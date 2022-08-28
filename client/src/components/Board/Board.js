import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addOwnMessage, sendTemplate } from '../../js/actions/index'
import { errorsIn } from "../../js/actions/errors";
import "./Board.css";
import { isEmpty } from 'lodash';
import WriteAllMsgs from "../Writers/WriteAllMsgs/WriteAllMsgs";
import Error from '../Error/Error';
import WTemplate from '../WTemplates/WTemplate/WTemplate';
import WMediaTemplate from "../WTemplates/WMediaTemplate/WMediaTemplate";
import WTemplateBoard from "../WTemplates/WTemplateBoard/WTemplateBoard";
import ShowReplyMsg from "../ShowReplyMsg/ShowReplyMsg";

const BoardComponent = (props) => {
    const messages_in = useSelector(store => store.messages_in);
    const dispatch = useDispatch();

    const [message, setMessage] = React.useState('');
    const [messageReply, setMessageReply] = React.useState('');
    const [mobileTo, setMobileTo] = React.useState('');
    const [showTextTemplateForm, setTextTplForm] = React.useState(false);
    const [showMediaTemplateForm, setMediaTplForm] = React.useState(false);
    const [showAllTemplates, setAllTemplates] = React.useState(false);
    const [context, setContext] = React.useState({});
    const [showReplyMsgView, setMsgReplyView] = React.useState(false);
    const [template_board, setTemplateBoard] = React.useState('');

    const handleMessage = (event) => {
        setMessage(event.target.value )
        setTextTplForm(false)
        let value = event.target.value;
    
        switch (value) {
          case '/tpltext':
            setTextTplForm(true);
            break;
          case '/tplmedia':
            setMediaTplForm(true);
            break;
          case '/tplshow':
            console.log("WabaId", props.wabaId)
            setAllTemplates(true);
            break;
          default:
            setTextTplForm(false)
            setMediaTplForm(false)
            setAllTemplates(false)
            break;
        }
    
        
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isEmpty(props.mobile)) {
            dispatch(errorsIn("No mobile detected in this contact"))
            return
        }
            
        if (message !== '') {
          if (messageRouter()) {
            const data = {
              to: props.mobile, message: message, from: props.whatsappId         
            }

            if (!isEmpty(context))
              data.context = context;
            
            
            dispatch(addOwnMessage(data))
            setMessage('');
            setMsgReplyView(false);
            setContext({});
            setMessageReply('');

          }
        }
    }


    const messageRouter = () => {
      if (message.indexOf('/template') === 0) {
        //get template name from input /template template_name
        const input_name = message.split(" ")
        const template_name = input_name[1];
        const template_language = input_name[2];
        let template_message = {
          "to":props.mobile, 
          "template_name": `${template_name}`, 
          "language":`${template_language}`, 
          "from": props.whatsappId
        }


        const parameters = input_name[3]
        if (parameters) {
          template_message.components = [{ "type": "body"}]
          template_message.components[0]['parameters'] = [];
          const parameters_texts = parameters.split(",");
          let arr = []
          parameters_texts.map(function(k, v) {
            template_message.components[0]['parameters'].push({"type": "text", "text": `${k}`})
          })
          //Object.assign(template_message.components.parameters, arr)
          //parameters.map
        }

        console.log(template_message)
        dispatch(sendTemplate(template_message))
        return false;
      }
      return true;
    }


    const handleTemplate = (tmp, language, message) => {
      setTemplateBoard(tmp)
      let messageText = `/template ${tmp} ${language}`;
      //find parameters
      const extract_parameters = checkForParameters(message, '{{')
      if (extract_parameters && extract_parameters !== null) {
        messageText += ` ${extract_parameters}`
        //messageText += ` ${extract_parameters}`.substring(0, extract_parameters.length - 1);
      }
      setMessage(`${messageText}`)
      setAllTemplates(false)
    }


    

    const checkForParameters = (cadena, parameter) => {
      const strArr = cadena.split(" ");
      const res = [];
      for(let i = 0; i < strArr.length; i++){
          console.log(strArr[i])
            if(strArr[i].includes(`${parameter}`)){
                res.push(`param`);
            };
      };
      return res.join(",");

   }
  
    //Ver como sustituir esto
    //empty reply state when child says
    const emptyShowReply = () => {
      setContext({});
      setMessageReply('');
      setMsgReplyView(false)
    }

    //writeallmsg callback function
    //set the id of msg to reply
    const handleReplyMsg = (idMsg, message) => {
      setContext({'message_id': idMsg});
      setMessageReply(message);
      setMsgReplyView(true)
    }


    return (
        <div id='columna2' class="main">
          <div class="chat-window">
            <WTemplateBoard handlerTemp={handleTemplate} visible={showAllTemplates} wabaId={props.wabaId} />
            <WTemplate visible={showTextTemplateForm} wabaId={props.wabaId} />
            <WMediaTemplate visible={showMediaTemplateForm} />
            <Error />
            <WriteAllMsgs handlerReply={handleReplyMsg} /> 
            <ShowReplyMsg handlerVisibility={emptyShowReply} visible={showReplyMsgView} message={messageReply} />        
          </div>
          
          <div class="type-message-bar">
            <div class="type-message-bar-center">
              <input
                    type="text"
                    name=""
                    id="comment"
                    placeholder="Send a message"
                    value={message}
                    onChange={handleMessage}
              />
            </div>
            <div class="type-message-bar-right">
              <img src="images/whatsapp-send-1.png" alt="Send" onClick={handleSubmit}/>
            </div>
          </div>
      </div>
    )
}

export default BoardComponent
//            <WTemplateBoard handlerTemp={handleTemplate} visible={showAllTemplates} wabaId={props.wabaId} />

import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addOwnMessage } from '../../js/actions/index'
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
            dispatch(addOwnMessage({to: props.mobile, message: message, from: props.wabaId, context: context}))
            setMessage('');
            setMsgReplyView(false);
            setContext({});
            setMessageReply('');

          }
        }
    }


    const messageRouter = () => {
      if (message.indexOf('/template') === 0) {
        //temporal error
        dispatch(errorsIn ("/template Message is not supported yet"));
        return false;
      }
      return true;
    }


    const handleTemplate = (tmp) => {
      setTemplateBoard(tmp)
      setMessage(`/template ${tmp}`)
      setAllTemplates(false)
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
            <WTemplate visible={showTextTemplateForm} wabaId={props.wabaId} />
            <WMediaTemplate visible={showMediaTemplateForm} />
            <WTemplateBoard handlerTemp={handleTemplate} visible={showAllTemplates} />
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
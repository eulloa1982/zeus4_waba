import React from "react";
import { connect } from 'react-redux';
import { addOwnMessage } from '../../js/actions/index'
import { errorsIn } from "../../js/actions/errors";
import "./Board.css";
import { isEmpty } from 'lodash';
import WriteToPrevMsgs from '../WriteToPrevMsgs/WriteToPrevMsgs';
import WriteFromPrevMsgs from '../WriteFromPrevMsgs/WriteFromPrevMsgs';
import WriteToLiveMsgs from '../WriteToLiveMsgs/WriteToLiveMsgs';
import Error from '../Error/Error';
import WTemplate from '../WTemplates/WTemplate/WTemplate';
import WMediaTemplate from "../WTemplates/WMediaTemplate/WMediaTemplate";
import WTemplateBoard from "../WTemplates/WTemplateBoard/WTemplateBoard";


function mapDispatchToProps(dispatch) {
  return {
    addOwnMessage: message => dispatch(addOwnMessage(message)),
    errorsIn: message => dispatch(errorsIn(message))
  };
}

const mapStateToProps = state => {
  return { messages_in: state.messages_in, to_prev_messages: state.to_prev_messages, from_prev_messages: state.from_prev_messages }
}

class BoardComponent extends React.Component {
  constructor(props) {
    //window['initial']();
    super(props)
    this.state = { message: '', 
                    mobileTo: '',
                    showTextTemplateForm: false,
                    showMediaTemplateForm: false,
                    showAllTemplates: false }
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.mobile = '';
    this.fullname = window.fullname;
  }

  handleMessage(event) {
    this.setState({ message: event.target.value })
    this.setState({showTextTemplateForm: false})
    let value = event.target.value;

    switch (value) {
      case '/tpltext':
        this.setState({showTextTemplateForm: true});
        break;
      case '/tplmedia':
        this.setState({showMediaTemplateForm: true});
        break;
      case '/tplshow':
        this.setState({showAllTemplates: true});
        break;
      default:
        this.setState({
                    showTextTemplateForm: false,
                    showMediaTemplateForm: false,
                    showAllTemplates: false
                  });
        break;
    }

    
  }


  handleSubmit(event) {
    event.preventDefault()
    if (isEmpty(this.props.mobile)) {
      this.props.errorsIn ("No mobile detected in this contact");
      throw new Error("No mobile configure")
    }
      
    if (this.state.message !== '') {
      if (this.messageRouter()) {
        this.props.addOwnMessage({ mobile: this.props.mobile, message: this.state.message });
        this.setState({
          message: ''
        });
      }
    }
  }

  //check message contain for specials chars combinations
  messageRouter() {
    const message = this.state.message
    if (message.indexOf('/template') === 0) {
      //temporal error
      this.props.errorsIn ("/template Message is not supported yet");
      return false;
    }
    return true;
  }



  render() {
    return(
      <div id='columna2' class="main">
        
        <div class="chat-window">
          <WTemplate visible={this.state.showTextTemplateForm} />
          <WMediaTemplate visible={this.state.showMediaTemplateForm} />
          <WTemplateBoard visible={this.state.showAllTemplates} />
          <Error />
          <WriteToPrevMsgs />
          <WriteFromPrevMsgs />
          <WriteToLiveMsgs />
          
          
        </div>
          
        <div class="type-message-bar">
          <div class="type-message-bar-center">
            <input
              type="text"
              name=""
              id="comment"
              placeholder="Send a message"
              value={this.state.message}
              onChange={this.handleMessage}
            />
          </div>
          <div class="type-message-bar-right">
            <img src="images/whatsapp-send-1.png" alt="Send" onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
      )
    } 
}

const connected = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
export default connected;

  /*
  <div class="main">
          <div class="chat-window-header">
            <div class="chat-window-header-left">
              <div class="contact-name-and-status-container">
              <span class="chat-window-contact-name"></span>
              </div>
            </div>
            <div class="chat-window-header-right">
              <img class="chat-window-search-icon" src="images/search-icon.svg" alt="attach" />
              <img class="chat-window-menu-icon" src="images/menu-icon.svg" alt="attach" />
            </div>
          </div>
          <div class="chat-window">
            
            
            
            {this.props.messages_in.map(post => (
                <div class="sender">
                  <span class="sender-message">{post.message} </span>
                  <span class="message-time">21:32</span>
                  {isEmpty(post.error) ? 
                    (
                      <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach" /></span>
                    ) 
                    : 
                    (
                      <span class="message-status"><img src="./images/status.svg" alt="attach" /></span>
                    )}
                </div>
            ))}
          </div>
          
          <div class="type-message-bar">
            <div class="type-message-bar-left">
              <img src="images/icons.svg" alt="icon"/>
              <img src="images/attach-icon.svg" alt="attach" />
            </div>
            <div class="type-message-bar-center">
              <input
                type="text"
                name=""
                id="comment"
                placeholder="Send a message"
                value={this.state.message}
                onChange={this.handleMessage}
              />
            </div>
            <div class="type-message-bar-right">
              <img src="images/whatsapp-send-1.png" alt="Send" onClick={this.handleSubmit}/>
            </div>
            
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {this.props.messages_in.map(post => (
            <li key={post.mobile}>Sending {post.message} To: {post.mobile}</li>
          ))}
          
          
          <div class="sender">
              <span class="sender-message-tail"><img src="images/message-tail-sender.svg" alt="attach"/></span>
              <span class="sender-message">I'm good, but I'm sooo bored ðŸ¥±ðŸ¥±ðŸ¥±</span>
              <span class="message-time">21:35</span>
              <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach"/></span>
            </div>
            <div class="receiver">
              <span class="receiver-message-tail">
                <img src="images/message-tail-receiver.svg" alt="attach"/>
              </span>
              <span class="receiver-message">Check this out...</span>
              <span class="message-time">21:36</span>
            </div>
            <div class="receiver image-message">
              <span class="receiver-message"><img src="./images/meme-coding.png" alt="attach"/></span>
              <span class="message-time">21:36</span>
            </div>
            <div class="receiver receiver-audio-message">
              <div class="audio-message">
                <div class="audio-message-left">
                  <img src="images/play-audio-icon.svg" alt="attach"/>
                </div>
                <div class="audio-message-center">
                  <div class="audio-message-center-top">
                    <span class="audio-message-bar"></span>
                    <input type="range" min="0" max="100" value="75" />
                  </div>
                  <div class="audio-message-center-bottom">
                    <div class="audio-message-bottom">
                      <span class="audio-message-length">1:15</span>
                      <span class="message-time">21:36</span>
                    </div>
                  </div>
                </div>
                <div class="audio-message-right">
                  <img class="audio-message-contact-image" src="images/timmy-m-harley.jpg" alt="attach"/>
                  <img class="audio-message-microphone" src="./images/microphone-seen.svg" alt="attach" />
                </div>
              </div>
            </div>
            <div class="sender">
              <span class="sender-message-tail"><img src="images/message-tail-sender.svg" alt="attach" /></span>
              <span class="sender-message">hahahahaaha</span>
              <span class="message-time">21:39</span>
              <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach" /></span>
            </div>
          
          
          
          
          */
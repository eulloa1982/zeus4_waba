import React from "react";
import { connect } from 'react-redux'
import { addOwnMessage } from '../../js/actions/index'
import "./Board.css";
import { isEmpty } from 'lodash';

//import { useSelector, useDispatch } from 'react-redux'
//import {OWN_MESSAGE_IN} from '../../js/reducers/index'

function mapDispatchToProps(dispatch) {
  return {
    addOwnMessage: message => dispatch(addOwnMessage(message))
  };
}
const mapStateToProps = state => {
  return { messages_in: state.messages_in }
}

class BoardComponent extends React.Component {
  constructor() {
    //window['initial']();
    super()
    this.state = { message: '', mobileTo: '' }
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.mobile = '';
    this.fullname = window.fullname
  }

  handleMessage(event) {
    this.setState({ message: event.target.value })
  }


  handleSubmit(event) {
    event.preventDefault()
    if (isEmpty(window.myvar)) {
      alert('You need to configure a mobile number for this user')
      throw new Error("No mobile configure")
    }
      
    if (this.state.message !== '') {
      this.props.addOwnMessage({ mobile: window.myvar, message: this.state.message });
    }
  }

  render() {
    return(
      <div id='columna2' class="main">
          
          
          <div class="chat-window">
            
            <div class="receiver">
              <span class="receiver-message">Testing message received</span>
              <span class="message-time">21:36</span>
            </div>
            
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
          
          <div>
            
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
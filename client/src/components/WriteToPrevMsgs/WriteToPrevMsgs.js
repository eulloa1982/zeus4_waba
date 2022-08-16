import React from "react";
import { connect } from 'react-redux'
import "../Board/Board.css";
import { isEmpty } from 'lodash';

const mapStateToProps = state => {
  return { to_prev_messages: state.to_prev_messages }
}

class WriteToPrevMsgs extends React.Component {
  
  render() {
    return (
        <div>       
          {this.props.to_prev_messages.map(post => (
            (post.message !== null && post.message !== '') ? 
            <div class="receiver">
              <span class="receiver-message">{post.message} </span>
              <span class="message-time">{post.time}</span>
              {isEmpty(post.status) ? 
                (
                  <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach" /></span>
                ) 
                : 
                (
                  <span class="message-status"><img src="./images/status.svg" alt="attach" /></span>
                )}
            </div>
            
            :

            ''
          ))}
        </div>
    )
  }
   
      

          
      
    
}

const connected = connect(mapStateToProps, '')(WriteToPrevMsgs);
export default connected;


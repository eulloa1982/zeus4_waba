import React from "react";
import { connect } from 'react-redux'
import { isEmpty } from 'lodash';


const mapStateToProps = state => {
  return { from_prev_messages: state.from_prev_messages }
}

class WriteFromPrevMsgs extends React.Component {
  
  render() {
    return(
      <div>
        {this.props.from_prev_messages.map(post => (
          (post.message !== null && post.message !== '') ?
            
            <div class="sender">
              <span class="sender-message">{post.message} </span>
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
          </div>      )
    } 
}

const connected = connect(mapStateToProps, '')(WriteFromPrevMsgs);
export default connected;

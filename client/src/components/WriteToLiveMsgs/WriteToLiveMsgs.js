import React from "react";
import { connect } from 'react-redux'
import { isEmpty } from 'lodash';


const mapStateToProps = state => {
  return { messages_in: state.messages_in }
}

class WriteToLiveMsgs extends React.Component {
 

  render() {
    return(
      <div>

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
      )
    } 
}

const connected = connect(mapStateToProps, '')(WriteToLiveMsgs);
export default connected;

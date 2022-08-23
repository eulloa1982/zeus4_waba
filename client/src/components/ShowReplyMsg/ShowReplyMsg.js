import React from 'react';
import './ShowReplyMsg.css';

const ShowReplyMsg = (props) => {

  return (
    <div>
      {props.visible ? 
        <div class="message-reply animate__animated animate__fadeInUp">
            <div>{props.message.substr(0,40)} ...</div>
        </div>

      :

      <div></div>
      }
    </div>

  )
}

export default ShowReplyMsg;
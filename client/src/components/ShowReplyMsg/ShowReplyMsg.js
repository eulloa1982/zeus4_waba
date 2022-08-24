import React from 'react';
import styles from './ShowReplyMsg.module.css';

const ShowReplyMsg = (props) => {

  const hideShowReply = () => {
    props.handlerVisibility()
  }

  return (
    <div>
      {props.visible ? 
        <div className={`${styles.messageReply} animate__animated animate__fadeInUp`}>
            <div onClick={hideShowReply}>{props.message.substr(0,40)} ...</div>
        </div>

      :

      <div></div>
      }
    </div>

  )
}

export default ShowReplyMsg;
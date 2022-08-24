import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { find, isEmpty } from 'lodash';
import { deleteAllMessages } from '../../../js/actions/index'
import styles from './WriteAllMsgs.module.css'


const WriteAllMsgs = (props) => {
  const all_messages = useSelector(store => store.all_msgs)
  const dispatch = useDispatch();

  const setParams = (idMsg, message) => {
    props.handlerReply(idMsg, message)
  }

  const selectMessage = (idMsg) => {
    if (idMsg !== null) {
      const message_reply = all_messages.filter(function (el) {
        //esta es la linea correcta, cuando recupere el ID del msg desde Whatsapp 
        //y lo agregue aqui
        //return el.zeus4waba__Whatsapp_MessageID === idMsg;
        return el.id === idMsg;
      })[0]
      if (!isEmpty(message_reply))
        return (`${message_reply.Created_Time.substr(0, 17)}:  ${message_reply.zeus4waba__w.substr(0,50)}`)
    }
      return null;
  }

  return (
    <div>
      {all_messages.map(msg => (
        
        (msg.zeus4waba__w !== null && msg.zeus4waba__w !== '') 
        ?
          <div class={msg.zeus4waba__Whatsapp_To !== null ? 'receiver' : 'sender'}>
            {msg.zeus4waba__ReplyTo !== null ? <div className={styles.receiverMessageReply}>{selectMessage(msg.zeus4waba__ReplyTo)}...</div> : '' }           <span class="receiver-message">{msg.zeus4waba__w} </span>
            <span className={styles.alignRight} onClick={() => dispatch(deleteAllMessages(msg.id))}><img src="./images/delete_message-2.jpg" alt="attach" /></span>
            <span className={styles.alignRight} onClick={() => setParams(msg.id, msg.zeus4waba__w)} ><img src="./images/reply.png" alt="attach" /></span>
                {isEmpty(msg.zeus4waba__Whatsapp_Status) ? 
                (
                  <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach" /></span>
                ) 
                : 
                (
                  <span class="align-right"><img src="./images/error.png" alt="attach" /></span>
                )}  
                <span class="message-time align-right">{msg.Created_Time}</span>

          </div>
            
        :
          ''
      ))}
    </div>
  )
}

export default WriteAllMsgs;




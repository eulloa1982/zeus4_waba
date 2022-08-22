import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from 'lodash';
import { deleteAllMessages } from '../../../js/actions/index'
import './WriteAllMsgs.css'


const WriteAllMsgs = () => {
  const all_messages = useSelector(store => store.all_msgs)
  const dispatch = useDispatch();

  return (
    <div>
      {all_messages.map(msg => (
        
        (msg.zeus4waba__w !== null && msg.zeus4waba__w !== '') 
        ?
          <div class={msg.zeus4waba__Whatsapp_To !== null ? 'receiver' : 'sender'}>
            <span class="receiver-message">{msg.zeus4waba__w} </span>
            <span class="align-right" onClick={() => dispatch(deleteAllMessages(msg.id))}><img src="./images/delete_message-2.jpg" alt="attach" /></span>
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




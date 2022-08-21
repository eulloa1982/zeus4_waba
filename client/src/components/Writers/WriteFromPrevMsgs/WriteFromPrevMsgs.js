import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deletePrevMessagesFrom } from '../../../js/actions/index'
import { isEmpty } from 'lodash';
import './WriteFromPrevMsgs.css'

const WriteFromPrevMsgs = () => {
  const from_prev_messages = useSelector(store => store.from_prev_messages)
  const dispatch = useDispatch();

  return (
    <div>
      {from_prev_messages.map(msg => (
        (msg.zeus4waba__w !== null && msg.zeus4waba__w !== '') 
        ?
          <div class="sender">
              <span class="sender-message">{msg.zeus4waba__w} </span>
              <span class="message-time">{msg.Created_Time}</span>
                {isEmpty(msg.zeus4waba__Whatsapp_Status) ? 
                (
                  <span class="message-status"><img src="./images/double-check-seen.svg" alt="attach" /></span>
                ) 
                : 
                (
                  <span class="message-status"><img src="./images/error.png" alt="attach" /></span>
                )} 
                <span class="message-delete" onClick={() => dispatch(deletePrevMessagesFrom(msg.id))}><img src="./images/delete_message-2.jpg" alt="attach"  /></span>
                
            </div>
            
            :

            ''
      ))}
    </div>
  )
}

export default WriteFromPrevMsgs;

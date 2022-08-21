import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from 'lodash';
import { deletePrevMessagesTo } from '../../../js/actions/index'


const WriteToPrevMsgs = () => {
  const to_prev_messages = useSelector(store => store.to_prev_messages)
  const dispatch = useDispatch();

  return (
    <div>
      {to_prev_messages.map(msg => (
        (msg.zeus4waba__w !== null && msg.zeus4waba__w !== '') 
        ?
          <div class="receiver">
              <span class="receiver-message">{msg.zeus4waba__w} </span>
              <span class="align-right" onClick={() => dispatch(deletePrevMessagesTo(msg.id))}><img src="./images/delete_message-2.jpg" alt="attach" /></span>

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

export default WriteToPrevMsgs;




import React from "react";
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash';


const WriteToLiveMsgs = (props) => {
  const from_live_messages = useSelector(store => store.from_live_messages)

  return (
    <div>
      {from_live_messages.map(msg => (
        (msg.zeus4waba__w !== null && msg.zeus4waba__w !== '') 
        ?
          <div class="sender" data-id={msg.id}>
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
            </div>
            
            :

            ''
      ))}
    </div>
  )
}

export default WriteToLiveMsgs

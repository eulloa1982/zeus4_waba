import React from 'react';
import { ZOHO } from '../../../vendor/ZSDK';
import { useSelector, useDispatch } from 'react-redux';
import { addLiveMessagesFrom } from '../../../js/actions/index'
import { last } from 'lodash';


function WriteToZohoFromMsg(props) {
    const messages = useSelector(store => store.messages_in)

    const dispatch = useDispatch()
    const last_in_message = last(messages)


    let status = '';
    //set type of message between successfully and unsuccessfully delivered
    if (last_in_message !== '') {
      status = 'error'
    }
    
    //set data to insert
    if (last_in_message.message !== '' && last_in_message.message !== null) {
      const data = {'Name': props.user, 'zeus4waba__Whatsapp_From': props.user, 'zeus4waba__w': `${last_in_message.message}`, 'zeus4waba__Whatsapp_Status': `${status}`}
      ZOHO.CRM.API.insertRecord({Entity: 'zeus4waba__Whatsapps', APIData: data})
        .then((dataMessage => {
          const id = dataMessage.data[0].details.id
          //get the record
          ZOHO.CRM.API.getRecord({Entity: 'zeus4waba__Whatsapps', RecordID: id})
            .then((response => {
              dispatch(addLiveMessagesFrom(response.data));
            }))
          //dispatch(addLiveMessagesFrom(dataMessage.data[0]));
        }))
        .catch((e) => console.log(e))
    }
 
  return (
    <div>
    </div>
    );
  }

export default WriteToZohoFromMsg;

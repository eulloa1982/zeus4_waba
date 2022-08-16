import React from 'react';
import { ZOHO } from '../../vendor/ZSDK';
import { connect } from 'react-redux';
import { last } from 'lodash';

const mapStateToProps = state => {
  return { messages_in: state.messages_in }
}

function WriteToZohoFromMsg(props) {
    const last_in_message = last(props.messages_in)

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
          console.log(dataMessage);
        }))
        .catch((e) => console.log(e))
    }
  //get last message
  

  
  return (
    <div>
    </div>
    );
  }

const connected = connect(mapStateToProps, '')(WriteToZohoFromMsg);
export default connected;


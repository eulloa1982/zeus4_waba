import React from 'react';
import { ZOHO } from '../../../vendor/ZSDK';
import { useSelector, useDispatch } from 'react-redux';
import { writeError } from '../../../js/actions/index'
import { last, isEmpty } from 'lodash';


const DeleteToZohoMsg = () => {
  const messages = useSelector(store => store.messages_id)
  const dispatch = useDispatch();

  if (!isEmpty (messages)) {
    const last_id_message = last(messages)

    if (last_id_message && last_id_message !== '' && last_id_message !== null) {
        ZOHO.CRM.API.deleteRecord({Entity: 'zeus4waba__Whatsapps', RecordID: `${last_id_message}`})
          .then((response => {
            const status = response.data[0].status
            if (status !== 'success') {
              dispatch(writeError(response.data[0].message))
            }
          }))
     
    }
  }
};

export default DeleteToZohoMsg;

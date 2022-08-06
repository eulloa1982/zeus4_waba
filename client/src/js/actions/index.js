import { isObject } from 'lodash';
import { isEmpty } from 'lodash';
import { ERROR_IN, OWN_MESSAGE_IN } from '../constants';

export function addOwnMessage(payloadSend) {
    return dispatch => {
        const token = localStorage.getItem('jwtToken')
        const options = {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
              },
            body: JSON.stringify(payloadSend)
            
            };
        return fetch("/wabaSend", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                console.log('message from node', response)
                if (!isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                    payloadSend.error = response.error.message;
                    dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'Unknown error'});
                console.log('Error action', err)
            })
    }
}



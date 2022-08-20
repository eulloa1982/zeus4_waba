import { isObject } from 'lodash';
import { isEmpty } from 'lodash';
import { ERROR_IN, OWN_MESSAGE_IN, FROM_PREV_MSG, TO_PREV_MSG } from '../constants';

//send a simple text message
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
        return fetch("/wabaMessage", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
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

/**sent whatsapp template to approve */
export function sendTemplate(payload) {
    return dispatch => {
        const token = localStorage.getItem('jwtToken')
        const options = {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
              },
            body: JSON.stringify(payload)
            
            };
        return fetch("/wabaTemplate", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (!isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                    payload.error = response.error.message;
                    //dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    //dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'Unknown error'});
                console.log('Error action', err)
            })
    }
}


export function addPrevMessagesTo(payload) {
    return dispatch => {
        dispatch({ type: TO_PREV_MSG, payload: payload });
    }
}


export function addPrevMessagesFrom(payload) {
    return dispatch => {
        dispatch({ type: FROM_PREV_MSG, payload: payload });
    }
}
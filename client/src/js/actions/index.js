import { isObject } from 'lodash';
import { isEmpty } from 'lodash';
import { ERROR_IN, 
        OWN_MESSAGE_IN, 
        ALL_MSG,
        DELETE_ALL_MSG
    } from '../constants';

/**
 * 
 * @param {to, message, from, context} payloadSend 
 * @to string (numeric)
 * @message string
 * @from string (numeric)
 * @context object {message_id: number}
 */
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
        return fetch("/textmessage", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (isObject(response.error) && !isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                    payloadSend.error = response.error.message;
                    dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    //aqui debo devolver el objeto de respuesta de whatsapp
                    //buscando capturar el ID de mensaje que envia Whatsapp
                    //que seria el response
                    dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'Unknown error'});
                console.log('Error action', err)
            })
    }
}


/**
 * 
 * @param {template_name, language, category, template_text, from} payload 
 * @template_name string (numeric)
 * @language string
 * @category string (OPT, MARKETING)
 * @template_text string
 * @from string (numeric)
 */
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
        return fetch("/createtemplate", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (isObject(response.error) && !isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
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


/**
 * 
 * @param {object} payload {from: waba-id-number}
 * @returns 
 */
export function getTemplates(payload) {
    return dispatch => {
        const token = localStorage.getItem('jwtToken')
        const options = {
            method: `GET`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
            },
            body: JSON.stringify(payload)
            
        };

        return fetch("/gettemplates", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (!isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                    //payload.error = response.error.message;
                    //dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    //dispatch({ type: OWN_MESSAGE_IN, payload: payloadSend });
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'An unknown error occurred when trying to retrieve WhatsApp Templates'});
            })
    }
}


export function addAllMessages(payload) {
    return dispatch => {
        dispatch({ type: ALL_MSG, payload: payload });
    }
}

export function deleteAllMessages(payload) {
    return dispatch => {
        dispatch({ type: DELETE_ALL_MSG, payload})
    }
}

export function writeError(payload) {
    return dispatch => {
        dispatch({type: ERROR_IN, payload})
    }
}
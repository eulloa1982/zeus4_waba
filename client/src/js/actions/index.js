import { isObject } from 'lodash';
import { isEmpty } from 'lodash';
import { ERROR_IN, 
        OWN_MESSAGE_OUT, 
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
        console.log("Sending", payloadSend)
        return fetch("/textmessage", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}

                if (isObject(response.data)) {
                    //all ok, get whatsapp id
                    const message_id = response.data.messages[0].id;
                    payloadSend.messageID = message_id
                    payloadSend.status = 'success'
                    payloadSend.replyTo = !isEmpty(payloadSend.context) ? payloadSend.context.message_id : ''

                    console.log("Payload send", payloadSend)
                    dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
                }
                else if (isObject(response.error) && !isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                    payloadSend.error = response.error.message;
                    dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    //aqui debo devolver el objeto de respuesta de whatsapp
                    //buscando capturar el ID de mensaje que envia Whatsapp
                    //que seria el response
                    dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'Unknown error'});
                console.log('Error action', err)
            })
    }
}


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
        return fetch("/sendtemplate", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (isObject(response.data)) {
                    //all ok, get whatsapp id
                    const message_id = response.data.messages[0].id;
                    payload.messageID = message_id
                    payload.message = `Template message: ${payload.template_name}`
                    payload.status = 'success'
                    console.log("Payload", payload)
                    dispatch({ type: OWN_MESSAGE_OUT, payload: payload });
                }
                else if (isObject(response.error) && !isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                   console.log("SUMATORI", response)
                }
                
            })
            .catch(err => {
                dispatch({type: ERROR_IN, payload: 'Unknown error'});
                console.log('Error action', err)
            })
    }
}





/**
 * Create a Text Template
 * @param {template_name, language, category, template_text, from} payload 
 * @template_name string (numeric)
 * @language string
 * @category string (OPT, MARKETING)
 * @template_text string
 * @from string (numeric)
 */
export function createTemplate(payload) {
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
                    //dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
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
                    //dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    //dispatch({ type: OWN_MESSAGE_OUT, payload: payloadSend });
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
import { isObject } from 'lodash';
import { isEmpty } from 'lodash';
import { ERROR_IN, OWN_MESSAGE_IN } from '../constants';

export function addOwnMessage(payload) {
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
        return fetch("/wabaSend", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                dispatch({ type: OWN_MESSAGE_IN, payload: payload });
                if (!isEmpty(response.error)){
                    dispatch({type: ERROR_IN, payload: response.error.message});
                } else if (isObject(response.errors)){
                    dispatch({type: ERROR_IN, payload: response.errors.message});                    
                } else {
                    dispatch({ type: OWN_MESSAGE_IN, payload: payload });
                }
                
            })
            .catch(err => {
                console.log('Error action', err)
            }) 
    }
}


export function badUrl() {
    return {type: "BAD_URL"};
}

export function error() {
    return {type: "ERROR_IN"}
}
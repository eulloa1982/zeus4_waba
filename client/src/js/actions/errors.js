import { isObject } from 'lodash';
import { isEmpty } from 'lodash';

export function errorsIn(payload) {
    
    return dispatch => {
        dispatch({ type: 'ERROR_IN', payload: payload });
        
    }
}


export function badUrl() {
    return {type: "BAD_URL"};
}

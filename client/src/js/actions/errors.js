import { ERROR_IN } from '../constants/index';

export function errorsIn(payload) {
    
    return dispatch => {
        dispatch({ type: ERROR_IN, payload: payload });
        
    }
}


export function badUrl() {
    return {type: "BAD_URL"};
}

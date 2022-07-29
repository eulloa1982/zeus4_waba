import { isObject } from 'lodash';
import { isEmpty } from 'lodash';

export function addOwnMessage(payload) {
    return dispatch => {
        
        const options = {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({a: 7, str: 'Some string: &=&'})
            };
            console.log(options)
        return fetch("/wabaSend", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                console.log(typeof(response), response)
                //dispatch({ type: 'OWN_MESSAGE_IN', payload: json });
            
                //this.setState({messageShow: true})
                if (!isEmpty(response.error)){
                    console.log("error", response.error)
                    dispatch({type: "ERROR_IN", payload: response.error.message});
                    //this.setState({message: response.error, showStyle: 'danger'})
                } else if (isObject(response.errors)){
                    console.log("errorsssss", response.errors)
                    return ({"error": JSON.stringify(response.errors)})
                    
                } else {
                    //console.log("DD", dd)
                    //let creador = {...response.data.data}
                    dispatch({ type: 'OWN_MESSAGE_IN', payload: json });
                    return({"error": "Operation success"})
                }
                
            })
            .catch(err => {
                console.log('Error', err)
            }) 
    }
}


export function badUrl() {
    return {type: "BAD_URL"};
}

export function error() {
    return {type: "ERROR_IN"}
}
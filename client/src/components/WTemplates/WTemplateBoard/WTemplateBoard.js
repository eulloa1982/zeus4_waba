import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './WTemplateBoard.module.css';
import WriteWTemplates from '../WriteWTemplates/WriteWTemplates';
import { ERROR_IN, 
  OWN_MESSAGE_OUT, 
  ALL_MSG,
  DELETE_ALL_MSG
} from '../../../js/constants/index.js';
import { isEmpty, isObject } from 'lodash';


const WTemplateBoard = (props) => {
  const dispatch = useDispatch();
  const[rr, setRr] = useState('')

  const getTemplates = (payload) => {
    //const rr = dispatch(getTemplates({from: props.wabaid}))
    const token = localStorage.getItem('jwtToken')
        const options = {
            method: `POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
            },
            body: JSON.stringify({ from: props.wabaId })
            
        };

        return fetch("/gettemplates", options)
            .then(res => res.json())
            .then(json => {
                let response = {...json}
                if (isObject(response.data)) {
                  //all ok, get whatsapp id
                  setRr(response.data.data)
                } else if (!isEmpty(response.error)){
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
                console.log(err)
                dispatch({type: ERROR_IN, payload: 'An unknown error occurred when trying to retrieve WhatsApp Templates'});
            })
  }

  // Handler
  const handler = (template, language) => {
    props.handlerTemp(template, language)
  }

  return (
    <div>
      {getTemplates}
      {props.visible ? 
        <div class="superior-text animate__animated animate__bounceInRight">
            <h3>Template Board</h3>
            <button onClick={getTemplates}>Get Templates</button>
            <div>
            <WriteWTemplates handler={handler} templates={rr}/>
            </div>
        </div>
      :
      <div></div>
      }
    </div>
  )
}

export default WTemplateBoard;
//              <WriteWTemplates handler={handler} templates={rr}/>

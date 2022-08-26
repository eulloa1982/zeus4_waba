import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './WTemplateBoard.module.css';
import { getTemplates } from '../../../js/actions/index';
import WriteWTemplates from '../WriteWTemplates/WriteWTemplates';


const WTemplateBoard = (props) => {
  const dispatch = useDispatch();
  //para getTemplates(props.wabaid)

  const rr = ['template1', 'template2', 'template3', 'template4'];

  // Handler
  const handler = (template) => {
    props.handlerTemp(template)
  }

  return (
    <div>
      {props.visible ? 
        <div class="superior-text animate__animated animate__bounceInRight">
            <h3>Template Board</h3>
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

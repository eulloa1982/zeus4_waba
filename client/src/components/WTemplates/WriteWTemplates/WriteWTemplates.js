import React from 'react';
import PropTypes from 'prop-types';
import './WriteWTemplates.css';
import { extend } from 'lodash';

const WriteWTemplates = (props) => {
  //pass data-template to parent
  const setParams = (e) => {
    const temp = e.target.dataset.template;
    props.handler(temp)
  }

  return (
    <div data-testid="WriteWTemplates">
        {
          props.templates.map(post => (
            <p class='cursor-hand' onClick={setParams} data-template={post}>{post}</p>
          ))
        }
      </div>
      )

}

export default WriteWTemplates;


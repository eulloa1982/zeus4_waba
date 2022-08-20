import React from 'react';
import PropTypes from 'prop-types';
import './WriteWTemplates.css';
import { extend } from 'lodash';

class WriteWTemplates extends React.Component {

  //pass data-template to parent
  setParams = (e) => {
    const temp = e.target.dataset.template;
    this.props.handler(temp)
  }

 
 
 render() {
  return (
<div data-testid="WriteWTemplates">
    {
      this.props.templates.map(post => (
        <p class='cursor-hand' onClick={this.setParams} data-template={post}>{post}</p>
      ))
    }
  </div>
  )
 }
 
}

WriteWTemplates.propTypes = {};

WriteWTemplates.defaultProps = {};

export default WriteWTemplates;

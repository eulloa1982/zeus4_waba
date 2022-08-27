import React from 'react';
import PropTypes from 'prop-types';
import styles from './WriteWTemplates.module.css';
import { isEmpty } from 'lodash';

const WriteWTemplates = (props) => {
  //pass data-template to parent
  const setParams = (e) => {
    const temp = e.target.dataset.template;
    const language = e.target.dataset.language;
    props.handler(temp, language)
  }

  const disComponent = (component) => {
    return (
      component.map(comp => (
        comp.text
      ))
    )
  }

  return (
    <div data-testid="WriteWTemplates" className={styles.WriteWTemplates}>
      <table>
        <tr><td>Name</td><td>Status</td><td>Language</td><td>Component</td></tr>
      {!isEmpty(props.templates) 
        ? 
          props.templates.map(post => (
            <tr>
            <td class='cursor-hand' onClick={setParams} data-template={post['name']} data-language={post['language']}>{post['name']}</td>
            <td> {post['status']}</td>
            <td> {post['language']} </td>
            <td>{disComponent(post['components'])}</td>
            </tr>
          ))
        :
          <div></div>
          
      }
      </table>
    </div>
  )

}

export default WriteWTemplates;
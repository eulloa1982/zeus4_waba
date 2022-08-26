import React from 'react';
import PropTypes from 'prop-types';
import styles from './DealForm.module.css';

const DealForm = (props) => {
 
 
  return (
    <div>
    {props.visible ? 
      <div className={`${styles.DealForm} animate__animated animate__bounceInLeft"`}>
        Deal Quick Create
        <div class="form-row">
          <input 
            type="hidden" 
            class="form-control"
            name="account"
            value={props.data.Account_Name.id} 
          />
          <input 
            type="hidden" 
            class="form-control"
            name="contact"
            value={props.data.id} 
          />
          
          <div class="form-group col-md-12">
            <label for="title">Lead Source</label>
              <input 
                type="text" 
                class="form-control"
                name="lead_source"
                value={props.data.Lead_Source} 
                disabled
                />
          </div>

          <button type="button" class="btn btn-primary">Set Deal</button>    
        </div>
      </div>
    :
    ''}
    </div>
  )
}

DealForm.propTypes = {};

DealForm.defaultProps = {};

export default DealForm;

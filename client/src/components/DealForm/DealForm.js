import React from 'react';
import PropTypes from 'prop-types';
import styles from './DealForm.module.css';

const DealForm = (props) => {
  const lead_source = 'Zeus4 WhatsApp';
 
  return (
    <div>
    {props.visible ? 
      <div className={`${styles.DealForm} animate__animated animate__bounceInLeft"`}>
        Quick Deal Creation
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
            <label for="title">Deal Name</label>
              <input 
                type="text" 
                class="form-control"
                name="deal_name"

              />
          </div>
          <div class="form-group col-md-12">
            <label for="title">Lead Source</label>
              <input 
                type="text" 
                class="form-control"
                name="lead_source"
                value={lead_source} 
                disabled
                />
          </div>
          <div class="form-group col-md-12">
            <label for="title">Closing Date</label>
              <input 
                type="date" 
                class="form-control"
                name="closing_date"
                />
          </div>
          <div class="form-group col-md-12">
            <label for="title">Description</label>
              <textarea 
                class="form-control"
                name="description"
              ></textarea>
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

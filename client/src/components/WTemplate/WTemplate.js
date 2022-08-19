import React from 'react';
import './WTemplate.module.css'
import PropTypes from 'prop-types';
import './WTemplate.css';


class WTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      visible: this.props.visible
    }
  }

  /*setParams = () => {
    this.props.handler(false)
  }*/



  render() {

    return (
      <div>
      {this.props.visible ? 
        <div class="superior">
          <div id="contenedor" class="animate__animated animate__bounceInRight">
            <h3>Text Template</h3>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="title">Title</label>
                <input type="text" class="form-control" placeholder="Template Title" />
              </div>  
              <div class="form-group col-md-6">
                <label for="language">Language</label>
                <select id="language" class="form-control">
                  <option selected>Choose...</option>
                  <option value='en_US'>US</option>
                </select>    
              </div>
              <div class="form-group col-md-6">
                <label for="category">Category</label>
                <select id="category" class="form-control">
                  <option selected>Choose...</option>
                  <option value='TRANSACTIONAL'>Transactional</option>
                  <option value='MARKETING'>Marketing</option>
                  <option value='OTP'>OTP</option>
                </select>    
              </div>

              <div class="form-group col-md-6">
                <label for="TemplateText">Template Text</label>
                <textarea class="form-control" id="TemplateText" placeholder="Template plain text" />
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Send Template</button>
        </div>
      </div>

      :

      <div></div>
      }
      </div>


      
  
    )
  }
}



WTemplate.propTypes = {};

WTemplate.defaultProps = {};

export default WTemplate;

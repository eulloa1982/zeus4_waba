import React from 'react';
import { connect } from 'react-redux';
import {sendTemplate} from '../../../js/actions/index';
import './WTemplate.css';

function mapDispatchToProps(dispatch) {
  return {
    sendTemplate: message => dispatch(sendTemplate(message))
  };
}


class WTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      visible: this.props.visible,
      title: '',
      language: 'en_US',
      category: 'MARKETING',
      message_text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleLanguage = (event) => {
    this.setState({language: event.target.value})  
  }

  handleCategory = (event) => {
    this.setState({category: event.target.value})
  }

  handleText = (event) => {
    this.setState({message_text: event.target.value})
  }

  handleSubmit() {
    const object = {
      template_name: this.state.title,
      language: this.state.language,
      category: this.state.category,
      template_text: this.state.message_text

    }

    this.props.sendTemplate({ ...object });
  }

  
  render() {
    return (
      <div>
      {this.props.visible ? 
        <div class="superior-text animate__animated animate__bounceInRight">
            <h3>Text Template</h3>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="title">Title</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Template Title"
                    onChange={this.handleTitle} />
              </div>  
              <div class="form-group col-md-6">
                <label for="language">Language</label>
                <select id="language" class="form-control" onChange={this.handleLanguage}>
                  <option selected>Choose...</option>
                  <option value='en_US'>US</option>
                </select>    
              </div>
              <div class="form-group col-md-6">
                <label for="category">Category</label>
                <select id="category" class="form-control" onChange={this.handleCategory}>
                  <option selected>Choose...</option>
                  <option value='TRANSACTIONAL'>Transactional</option>
                  <option value='MARKETING'>Marketing</option>
                  <option value='OTP'>OTP</option>
                </select>    
              </div>

              <div class="form-group col-md-6">
                <label for="TemplateText">Template Text</label>
                <textarea 
                      class="form-control"
                      placeholder="Template plain text"
                      onChange={this.handleText}      
                />
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Send Template</button>
      </div>

      :

      <div></div>
      }
      </div>


      
  
    )
  }
}



const connected = connect('', mapDispatchToProps)(WTemplate);
export default connected;

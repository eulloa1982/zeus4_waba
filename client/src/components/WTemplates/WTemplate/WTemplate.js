import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {createTemplate} from '../../../js/actions/index';
import './WTemplate.css';

const WTemplate = (props) => {

  const dispatch = useDispatch();
  const [data, setData] = useState({
                            visible: props.visible,
                            title: '',
                            language: 'en_US',
                            category: 'MARKETING',
                            message_text: ''
                          })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = () => {
    const object = {
      template_name: data.title,
      language: data.language,
      category: data.category,
      template_text: data.message_text,
      waba_id: props.wabaId

    }
    dispatch(createTemplate({ ...object}))

  }

  return (
    <div>
      {props.visible ? 
        <div class="superior-text animate__animated animate__bounceInRight">
            <h3>Text Template</h3>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="title">Title</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="title"
                    placeholder="Template Title"
                    onChange={handleInputChange} />
              </div>  
              <div class="form-group col-md-6">
                <label for="language">Language</label>
                <select name="language" class="form-control" onChange={handleInputChange}>
                  <option selected>Choose...</option>
                  <option value='en_US'>US</option>
                </select>    
              </div>
              <div class="form-group col-md-6">
                <label for="category">Category</label>
                <select name="category" class="form-control" onChange={handleInputChange}>
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
                      name="message_text"
                      onChange={handleInputChange}      
                />
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Send Template</button>
      </div>

      :

      <div></div>
      }
      </div>

  )
}

export default WTemplate;
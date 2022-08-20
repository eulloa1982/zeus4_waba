import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WTemplateBoard.module.css';
import { getTemplates } from '../../../js/actions/index';
import WriteWTemplates from '../WriteWTemplates/WriteWTemplates';

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: message => dispatch(getTemplates(message))
  };
}

class WTemplateBoard extends React.Component {
  constructor(props) {
    super(props)
    this.rr = []
   
  }

  componentDidMount() {
    //let templates = this.props.getTemplates();
    this.rr = ['template1', 'template2', 'template3', 'template4'];
  }


  //set handlerTemp from parent
  setParams = (temp) => {
    this.props.handlerTemp(temp)
  }

  // Handler
  handler = (template) => {
    this.setParams(template)
  }

  render() {
    return (
      <div>
        {this.props.visible ? 
          <div class="superior-text animate__animated animate__bounceInRight">
              <h3>Template Board</h3>
              <div>
                <WriteWTemplates handler={this.handler} templates={this.rr}/>

              </div>
          </div>
        :
        <div></div>
        }
      </div>


      
  
    )
  }
}


const connected = connect('', mapDispatchToProps)(WTemplateBoard);
export default connected;

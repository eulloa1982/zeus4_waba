import React from 'react';
import PropTypes from 'prop-types';
import './WMediaTemplate.css';


class WMediaTemplate extends React.Component {
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
            <h3>Media Template</h3>
            <p>Working on it...</p>
        </div>
      </div>

      :

      <div></div>
      }
      </div>


      
  
    )
  }
}



WMediaTemplate.propTypes = {};

WMediaTemplate.defaultProps = {};

export default WMediaTemplate;

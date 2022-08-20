import React from 'react';
import PropTypes from 'prop-types';
import './WTemplateBoard.module.css';


class WTemplateBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      visible: this.props.visible
    }
  }


  render() {

    return (
      <div>
      {this.props.visible ? 
        <div class="superior-text animate__animated animate__bounceInRight">
            <h3>Template Board</h3>
            <p>Working on it...</p>
        </div>

      :

      <div></div>
      }
      </div>


      
  
    )
  }
}



WTemplateBoard.propTypes = {};

WTemplateBoard.defaultProps = {};

export default WTemplateBoard;

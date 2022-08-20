import React from 'react';
import { connect } from 'react-redux';
import 'animate.css';
import './Error.css'

const mapStateToProps = state => {
  return { errors_in: state.errors_in }
}

export class ErrorComponent extends React.Component {
  render () {
    return (
      <div>
        {this.props.errors_in.map(post => (
          <div class='padre animate__animated animate__bounceOutRight animate__delay-4s'>
        
         
            <div >{post}</div>
          
       
      </div>
      ))}
      </div>
    );
  }
};

const connected = connect(mapStateToProps)(ErrorComponent);
export default connected;

import React    from "react";
import { connect } from 'react-redux'
import { addOwnMessage } from '../../js/actions/index'
import "./Customer.css";

function mapDispatchToProps(dispatch) {
  return {
    addOwnMessage: message => dispatch(addOwnMessage(message))
  };
}
const mapStateToProps = state => {
  return { messages_in: state.messages_in }
}

class CustomerComponent extends React.Component {
  constructor() {
    window['initial']();
    super()
    this.state = { message: '', mobileTo: '' }
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.mobile = '';
  }

  handleMessage(event) {
    
    this.setState({ message: event.target.value })
  }


  handleSubmit(event) {
    event.preventDefault()
    if (this.state.message !== '') {
      
      this.props.addOwnMessage({ mobile: window.myvar, message: this.state.message });
      
    }

    
  }

  render() {
    return(
      <div>
        
        
        
      </div>
    )
  } 
}

  
  
  const connected = connect(mapStateToProps, mapDispatchToProps)(CustomerComponent);
  export default connected;


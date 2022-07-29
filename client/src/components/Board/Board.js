import React    from "react";
import { connect } from 'react-redux'
import { addOwnMessage } from '../../js/actions/index'

//import { useSelector, useDispatch } from 'react-redux'
//import {OWN_MESSAGE_IN} from '../../js/reducers/index'

function mapDispatchToProps(dispatch) {
  return {
    addOwnMessage: message => dispatch(addOwnMessage(message))
  };
}
const mapStateToProps = state => {
  return { messages_in: state.messages_in }
}

class BoardComponent extends React.Component {
  constructor() {
    window['initial']();
    super()
    this.state = { message: '', mobileTo: '' }
    console.log("MYVAR", window.myvar)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleMobile = this.handleMobile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.mobile = '';
  }

  handleMessage(event) {
    
    this.setState({ message: event.target.value })
  }

  handleMobile(event) {
    //console.log('Handle mobile')
    //this.mobile = event.target.value
    this.setState({ mobileTo: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.message !== '') {
      
      this.props.addOwnMessage({ mobile: window.myvar, message: this.state.message });
      
    }

    
  }

  render() {
    return(
      <div>Set Mobile and Message to send (Under constructor)
        <input
            type="text"
            name="Mobile"
            value={window.myvar}
            placeholder="Mobile"
        />
        <input
            type="text"
            value={this.state.message}
            onChange={this.handleMessage}
        />
        
        <button
          aria-label="Send Message"
          onClick={this.handleSubmit}
        >
          Send WhatsApp
        </button>
        <ul>
        {this.props.messages_in.map(post => (
            <li key={post.mobile}>Sending {post.message} To: {post.mobile}</li>
          ))}
        </ul>
      </div>
    )
  } 
}

  
  
  const connected = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
  export default connected;

  /*{this.props.messages_in.map(post => (
            <li key={post.mobile}>Sending {post.message} To: {post.mobile}</li>
          ))}*/
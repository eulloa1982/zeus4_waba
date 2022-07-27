import React    from "react";
import { connect } from 'react-redux'

//import { useSelector, useDispatch } from 'react-redux'
//import {OWN_MESSAGE_IN} from '../../js/reducers/index'


class BoardComponent extends React.Component {
  constructor() {
    super()
    this.state = { message: '', mobileTo: '' }

    this.handleMessage = this.handleMessage.bind(this)
    this.handleMobile = this.handleMobile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMessage(event) {
    this.setState({ message: event.target.value })
  }

  handleMobile(event) {
    this.setState({ mobileTo: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch({
      type: 'OWN_MESSAGE_IN',
      payload: { mobile: this.state.mobileTo, message: this.state.message }
    })

  }

  render() {
    return(
      <div>Set Mobile and Message to send (Under constructor)
        <input
            type="text"
            value={this.state.mobileTo}
            onChange={this.handleMobile}
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
            <li key={post.mobile}>{post.message}</li>
          ))}
        </ul>
      </div>
    )
  } 
}

  const mapStateToProps = state => {
    return { messages_in: state.messages_in }
  }
  
  export default connect(mapStateToProps)(BoardComponent)
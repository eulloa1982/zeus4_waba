import { connect } from 'react-redux';
import { addPrevMessagesTo, addPrevMessagesFrom } from '../../js/actions/index'
import { orderBy } from 'lodash';
import React from 'react';

function mapDispatchToProps(dispatch) {
  return {
    addPrevMessageTo: message => dispatch(addPrevMessagesTo(message)),
    addPrevMessageFrom: message => dispatch(addPrevMessagesFrom(message))
  };
}

class Zoholoadmsg extends React.Component{
  constructor(props) {
    super(props)
    this.state = { message: '', mobileTo: '' }
  }

  componentDidMount() {
    this.dispatchMessagesTo()
    this.dispatchMessagesFrom()
    
  }

  dispatchMessagesTo = () => {
    let data = orderBy(this.props.msgTo, ['Created_Time'], ['asc']);
    data.map(msg => (
      this.props.addPrevMessageTo({ message: msg.zeus4waba__w, time: msg.Created_Time, to: msg.zeus4waba__Whatsapp_To, status: msg.zeus4waba__Whatsapp_Status })
    ))
    
  }

  dispatchMessagesFrom = () => {
    let data = orderBy(this.props.msgFrom, ['Created_Time'], ['asc']);
    data.map(msg => (
      this.props.addPrevMessageFrom({ message: msg.zeus4waba__w, time: msg.Created_Time, to: msg.zeus4waba__Whatsapp_To, status: msg.zeus4waba__Whatsapp_Status })
    ))
    
  }

  render() {
    return (
      <div></div>
    )
  }

  
}

const connected = connect('', mapDispatchToProps)(Zoholoadmsg);
export default connected;

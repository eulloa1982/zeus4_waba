import { connect } from 'react-redux';
import { addPrevMessagesFrom } from '../../js/actions/index'
import { orderBy } from 'lodash';
import React from 'react';

function mapDispatchToProps(dispatch) {
  return {
    addPrevMessageFrom: message => dispatch(addPrevMessagesFrom(message))
  };
}

class LoadFromMsgs extends React.Component{
  constructor(props) {
    super(props)
    this.state = { message: '', mobileTo: '' }
  }

  componentDidMount() {
    this.dispatchMessagesFrom()
    
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

const connected = connect('', mapDispatchToProps)(LoadFromMsgs);
export default connected;















/*import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadFromMsgs.module.css';

const LoadFromMsgs = () => (
  <div className={styles.LoadFromMsgs} data-testid="LoadFromMsgs">
    LoadFromMsgs Component
  </div>
);

LoadFromMsgs.propTypes = {};

LoadFromMsgs.defaultProps = {};

export default LoadFromMsgs;*/

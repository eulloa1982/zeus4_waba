import React, { useState } from 'react'
import { connect } from 'react-redux'
import { errorsIn } from '../../js/actions/errors'

const mapStateToProps = state => {
  return { errors_in: state.errors_in }
}

export class ErrorComponent extends React.Component {
  render () {
    return (
      <ul>
        {this.props.errors_in.map(post => (
          <li key={post}>Error: {post}</li>
        ))}
      </ul>
    );
  }
};

const connected = connect(mapStateToProps)(ErrorComponent);
export default connected;
/*{this.props.errors_in.map(post => (
          <li key={post.error}>Sending {post.error}</li>
          ))}*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Success.module.css';

const Success = () => (
  <div className={styles.Success} data-testid="Success">
    Success Component
  </div>
);

Success.propTypes = {};

Success.defaultProps = {};

export default Success;

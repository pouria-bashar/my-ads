import React from 'react';
import styles from './Alert.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const typeLabel = {
  error: 'Error!',
  warning: 'Warning',
};

const typeIcon = {
  error: 'error',
  warning: 'warning',
};

const Alert = ({ message, type }) => (
  <div className={cx({ alert: true, [type]: true })}>
    <div className={styles.info}>
      <i className="material-icons">{typeIcon[type]}</i>
      <p>{typeLabel[type]}</p>
    </div>
    <div className={styles.message}>
      {message}
    </div>
  </div>
);
Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};
Alert.defaultProps = {
  type: 'warning',
};
export default Alert;

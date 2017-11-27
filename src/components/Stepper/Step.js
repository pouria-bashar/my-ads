import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.css';

class Step extends React.Component {
  render() {
    const {
      isExpanded,
      children,
      title,
      index,
    } = this.props;
    return (
      <div className={styles.stepContainer}>
        <div className={styles.title}>
          <span>{index + 1}</span>
          <strong>{title}</strong>
        </div>
        <div
          className={styles.content}
          style={{ transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)', padding: isExpanded ? '16px' : '0' }}
        >
          {isExpanded && children}
        </div>
      </div>
    );
  }
}
Step.propTypes = {
  children: PropTypes.any,
  isExpanded: PropTypes.bool,
  title: PropTypes.string,
  index: PropTypes.number,
};
export default Step;

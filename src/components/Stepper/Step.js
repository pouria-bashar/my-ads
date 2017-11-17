import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.css';

class Step extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isExpanded: PropTypes.bool,
    title: PropTypes.string,
    index: PropTypes.number,
  };

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
          style={{ transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)' }}
        >
          {isExpanded && children}
        </div>
      </div>
    );
  }
}
export default Step;

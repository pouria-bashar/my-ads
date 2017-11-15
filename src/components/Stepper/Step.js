import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stepper.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const wrapperStyle = {
  overflow: 'hidden',
};
const contentStyle = {
  position: 'relative',
  overflow: 'hidden',
};

const childrenStyle = {
  position: 'relative',
  width: '100%',
  top: '0px',
  left: '0px',
  overflow: 'hidden',
  transition: 'all 1s',
};

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
        <div style={wrapperStyle}>
          <div style={contentStyle}>
            <div style={{ ...childrenStyle, height: isExpanded ? 'auto' : '0' }}>
              {isExpanded && children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Step;

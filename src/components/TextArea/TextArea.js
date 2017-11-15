import React from 'react';
import styles from './TextArea.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TextArea extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    const {
      className,
      error,
      style,
    } = this.props;
    return (
      <textarea
        rows="4"
        cols="50"
        style={style}
        className={cx({ container: true, [className]: !!className, error })}
      />
    );
  }
}
export default TextArea;

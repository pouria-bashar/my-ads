import React from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool,
  }

  static defaultProps = {
    primary: true,
    className: undefined,
  };

  render() {
    const {
      className,
      text,
      primary,
      ...rest
    } = this.props;
    return (
      <button
        className={cx({ container: true, [className]: !!className, primary })}
        {...rest}
      >
        {text}
      </button>
    );
  }
}
export default Button;

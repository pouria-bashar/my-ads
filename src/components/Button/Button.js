import React from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Button extends React.Component {
  render() {
    const {
      className,
      text,
      primary,
      loading,
      disabled,
      onClick,
      ...rest
    } = this.props;


    const buttonClassName = cx({
      container: true,
      [className]: !!className,
      primary,
      loading,
      disabled,
    });

    const loadingClass = cx({
      'material-icons': true,
      spin: true,
    });
    return (
      <button
        className={buttonClassName}
        onClick={(e) => {
          if (!disabled && onClick) onClick(e);
        }}
        {...rest}
      >
        {!loading && text}
        {loading && <i className={loadingClass}>loop</i>}
      </button>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  primary: true,
  className: undefined,
  loading: false,
};
export default Button;

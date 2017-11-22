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
    loading: PropTypes.bool,
  }

  static defaultProps = {
    primary: true,
    className: undefined,
    loading: false,
  };

  render() {
    const {
      className,
      text,
      primary,
      loading,
      ...rest
    } = this.props;


    const buttonClassName = cx({
      container: true,
      [className]: !!className,
      primary,
      loading,
    });

    const loadingClass = cx({
      'material-icons': true,
      spin: true,
    });
    return (
      <button
        className={buttonClassName}
        {...rest}
      >
        {!loading && text}
        {loading && <i className={loadingClass}>loop</i>}
      </button>
    );
  }
}
export default Button;

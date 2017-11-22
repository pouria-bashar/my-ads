import React from 'react';
import styles from './TextField.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TextField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      className,
      type,
      label,
      error,
      style,
      placeholder,
      ...rest
    } = this.props;
    return (
      <div style={style} className={cx({ container: true, [className]: !!className, error })}>
        {label && <label htmlFor="input">{label}</label>}
        <input id="input" type={type} placeholder={placeholder} {...rest} />
        {
          error &&
          <div className={styles.errorContainer}>{error}</div>
        }
      </div>
    );
  }
}
export default TextField;

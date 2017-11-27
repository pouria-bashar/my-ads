import React from 'react';
import styles from './TextField.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import formats from './formats';

const cx = classNames.bind(styles);

class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange, format } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      className,
      type,
      label,
      error,
      style,
      placeholder,
      icon,
      format,
      registerRef,
      ...rest
    } = this.props;

    const iconClassName = cx({ icon: true, 'material-icons': true });
    const containerClass = cx({
      container: true,
      [className]: !!className,
      error,
      iconPadding: !!icon,
    });

    return (
      <div style={style} className={containerClass}>
        {label && <label htmlFor="input">{label}</label>}
        <div className={styles.input}>
          <input
            {...rest}
            id="input"
            type={type}
            placeholder={placeholder}
            onChange={this.handleChange}
            ref={registerRef}
            autoComplete="off"
          />
          {
            icon && <i className={iconClassName}>{icon}</i>
          }
        </div>
        {
          error &&
          <div className={styles.errorContainer}>{error}</div>
        }
      </div>
    );
  }
}
TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func,
  registerRef: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',
};
export default TextField;

import React from 'react';
import styles from './UserDropdown.css';
import PropTypes from 'prop-types';

class Options extends React.Component {
  static propTypes = {
    options: PropTypes.array,
  }
  render() {
    const { options } = this.props;
    return (
      <div className={styles.options}>
        {
          options.map((option, index) => (
            <div onClick={option.onClick} key={index}>
              <i className="material-icons">{option.icon}</i>
              <span>{option.title}</span>
            </div>
          ))
        }
      </div>
    );
  }
}
export default Options;

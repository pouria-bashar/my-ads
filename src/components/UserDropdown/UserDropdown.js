import React from 'react';
import styles from './UserDropdown.css';
import PropTypes from 'prop-types';
import Options from './Options';

class UserDropdown extends React.Component {
  state= {
    showOptions: false,
  }
  render() {
    const { initials } = this.props;
    const { showOptions } = this.state;
    return (
      <div
        onClick={() => this.setState({ showOptions: !showOptions })}
        className={styles.userDropdown}
      >
        <span>{initials}</span>
        {showOptions && <Options options={[{ title: 'My Profile', icon: 'face' }, { title: 'Logout', icon: 'power_settings_new' }]} />}
      </div>
    );
  }
}

UserDropdown.propTypes = {
  initials: PropTypes.string,
};
export default UserDropdown;

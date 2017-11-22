import React from 'react';
import styles from './UserDropdown.css';
import PropTypes from 'prop-types';
import Options from './Options';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown, false);
  }


  handleMouseDown(e) {
    if (!this.container.contains(e.target)) {
      this.setState({ showOptions: false });
    }
  }

  render() {
    const { initials, onLogout } = this.props;
    const { showOptions } = this.state;
    return (
      <div
        onClick={() => this.setState({ showOptions: !showOptions })}
        className={styles.userDropdown}
        ref={(el) => { this.container = el; }}
      >
        <span>{initials}</span>
        {showOptions && <Options options={[{ title: 'My Profile', icon: 'face' }, { title: 'Logout', icon: 'power_settings_new', onClick: onLogout }]} />}
      </div>
    );
  }
}

UserDropdown.propTypes = {
  initials: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};
export default UserDropdown;

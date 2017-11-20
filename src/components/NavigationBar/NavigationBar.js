import React from 'react';
import styles from './NavigationBar.css';
import { NavLink } from 'react-router-dom';
import { UserDropdown } from 'components';
import AppIcon from '../../assets/icons/logo.svg';


class NavigationBar extends React.Component {
  state = {
    showMobile: false,
  }

  renderLinks() {
    return (
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="/login"
          >Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="/dashboard"
          >Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="/create"
          >New Ad
          </NavLink>
        </li>
        <li>
          <UserDropdown initials="PB" />
        </li>
      </ul>
    );
  }
  render() {
    return (
      <header className={styles.navigation}>
        <div className={styles.wrapper}>
          <i
            className={`${styles.mobile} material-icons`}
            onClick={() => this.setState({ showMobile: !this.state.showMobile })}
          >list
          </i>
          <div className={styles.logo}>
            <span dangerouslySetInnerHTML={{ __html: AppIcon }} />
          </div>
          {this.renderLinks()}
        </div>
      </header>
    );
  }
}

export default NavigationBar;

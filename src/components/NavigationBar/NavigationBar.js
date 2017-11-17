import React from 'react';
import styles from './NavigationBar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { UserDropdown } from 'components';

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <i className={`${styles.mobile} material-icons`}>list</i>
        <ul className={styles.navigation}>
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
      </div>
    );
  }
}

export default NavigationBar;

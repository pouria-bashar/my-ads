import React from 'react';
import styles from './NavigationBar.css';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {

  render() {
    return (
      <ul className={styles.navigation}>
        <li>
          <a>Link 1</a>
        </li>
        <li>
          <a>Link 2</a>
        </li>
      </ul>
    );
  }
}
export default NavigationBar;

import React from 'react';
import styles from './NavigationBar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { UserDropdown } from 'components';
import AppIcon from '../../assets/icons/logo.svg';
import * as Links from 'constants/routes';
import { graphql, compose } from 'react-apollo';
import { mutations, queries } from '_graphql';
import { get } from 'lodash';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobile: false,
    };
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.logout({ refetchQueries: [{ query: queries.currentUser }] });
  }

  renderGuestLinks() {
    return (
      <ul>
        {
          Links.GUEST_LINKS.map(link => (
            <li key={link.path}>
              <NavLink
                activeClassName={styles.active}
                to={link.path}
              >{link.label}
              </NavLink>
            </li>
          ))
        }
      </ul>
    );
  }

  renderuserLinks() {
    const { user } = this.props;
    const initials = `${get(user, 'firstName', '')[0] || ''}${get(user, 'lastName', '')[0] || ''}`;
    return (
      <ul>
        {
          Links.USER_LINKS.map(link => (
            <li key={link.path}>
              <NavLink
                activeClassName={styles.active}
                to={link.path}
              >{link.label}
              </NavLink>
            </li>
          ))
        }
        <li>
          <UserDropdown onLogout={this.onLogout} initials={initials} />
        </li>
      </ul>
    );
  }
  render() {
    const { isAuthenticated } = this.props;
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
          {isAuthenticated && this.renderuserLinks()}
          {!isAuthenticated && this.renderGuestLinks()}
        </div>
      </header>
    );
  }
}
NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};
export default compose(graphql(mutations.logout, { name: 'logout' }))(NavigationBar);

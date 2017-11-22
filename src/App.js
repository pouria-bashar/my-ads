import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Login, CreateAd, Dashboard, AdvertDetails, Signup } from 'views';
import { NavigationBar, PrivatePath } from 'components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { queries } from '_graphql';
import { isEmpty } from 'lodash';

class App extends React.Component {
  render() {
    const { user } = this.props.data;
    const isAuthenticated = !isEmpty(user);
    return (
      <Router>
        <div>
          <NavigationBar
            user={user}
            isAuthenticated={isAuthenticated}
          />
          <main>
            <Switch>
              <Route
                path="/login"
                render={(props) => <Login isAuthenticated={isAuthenticated} {...props} />}
              />
              <Route
                path="/signup"
                component={Signup}
              />
              <PrivatePath
                path="/dashboard"
                exact
                component={Dashboard}
                isAuthenticated={isAuthenticated}
              />
              <PrivatePath
                path="/create"
                exact
                component={CreateAd}
                isAuthenticated={isAuthenticated}
              />
              <PrivatePath
                path="/advert/:id"
                exact
                component={AdvertDetails}
                isAuthenticated={isAuthenticated}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};
export default compose(graphql(queries.currentUser))(App);

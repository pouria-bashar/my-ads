import React from 'react';
import './App.css';
import { Login, CreateAd, Dashboard, AdvertDetails } from 'views';
import { NavigationBar } from 'components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <main>
            <Switch>
              <Route
                path="/login"
                exact
                component={Login}
              />
              <Route
                path="/create"
                exact
                component={CreateAd}
              />
              <Route
                path="/dashboard"
                exact
                component={Dashboard}
              />
              <Route
                path="/advert/:id"
                component={AdvertDetails}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;

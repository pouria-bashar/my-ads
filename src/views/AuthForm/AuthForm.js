import React from 'react';
import styles from './AuthForm.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';

class AuthForm extends React.Component {
  state = {
    showLogin: true,
  }
  render() {
    const { showLogin } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          <button
            onClick={() => this.setState({ showLogin: true })}
            className={showLogin ? styles.active : ''}
          >Login
          </button>
          <button
            onClick={() => this.setState({ showLogin: false })}
            className={!showLogin ? styles.active : ''}
          >Signup
          </button>
        </div>
        <div className={styles.content}>
          {showLogin && <Login {...this.props} />}
          {!showLogin && <Signup {...this.props} />}
        </div>
      </div>
    );
  }
}
export default AuthForm;

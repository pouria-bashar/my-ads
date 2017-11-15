import React from 'react';
import styles from './Login.css';
import {
  TextField,
  Button,
} from 'components';

class Login extends React.Component {
  render() {
    return (
      <form className={styles.container}>
        <div className={styles.wrapper}>
          <h2>Sign in</h2>
          <TextField
            type="text"
            label="Email"
          />
          <TextField
            type="text"
            label="Password"
          />
          <Button
            text="Login"
          />
        </div>
      </form>
    );
  }
}
export default Login;

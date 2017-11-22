import React from 'react';
import styles from './Signup.css';
import {
  TextField,
  Button,
  Alert,
} from 'components';
import validate from './validation';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { mutations, queries } from '_graphql';
import { isEmpty } from 'lodash';

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  errors: [],
};


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      ...initialValues,
      loading: false,
      apiError: '',
    };
  }

  handleChange(e) {
    const { errors } = this.state;
    const value = { [e.target.name]: e.target.value };
    const error = validate(value);
    this.setState({ ...value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
    } = this.state;
    this.setState({ loading: true, apiError: '' });
    this.props.signup({
      variables:
      {
        email,
        password,
        firstName,
        lastName,
      },
      refetchQueries: [{ query: queries.currentUser }],
    })
    .then(() => {
      this.props.history.push('/dashboard');
    })
    .catch(err => {
      this.setState({ apiError: err.graphQLErrors.map(err => err.message)[0], loading: false });
    });
  }

  renderErrors(errors) {
    return (
      <Alert type="error" errors={errors} />
    );
  }

  render() {
    const { isAuthenticated, location } = this.props;
    const { apiError } = this.state;
    const { from } = location.state || { from: { pathname: '/dashboard' } };
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
      >
        <div className={styles.wrapper}>
          <h2>Sign up</h2>
          <TextField
            type="text"
            label="First name"
            name="firstName"
            onChange={this.handleChange}
          />
          <TextField
            type="text"
            label="Last name"
            name="lastName"
            onChange={this.handleChange}
          />
          <TextField
            type="text"
            label="Email"
            name="email"
            onChange={this.handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={this.handleChange}
          />
          {!isEmpty(apiError) && <Alert type="error" message={apiError} />}
          <Button
            text="Sign Up"
            loading={this.state.loading}
          />
        </div>
      </form>
    );
  }
}

Signup.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
  history: PropTypes.object.isRequired,
  signup: PropTypes.func,
};
export default compose(graphql(mutations.signup, { name: 'signup' }))(Signup);

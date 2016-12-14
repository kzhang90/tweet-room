import React from 'react';
import LoginForm from '../LoginForm';
import { signIn } from '../helpers/auth';

class Login extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <h1>Login Page</h1>
        <LoginForm />
        <button>Sign In with Twitter</button>
      </div>
    );
  }
}

export default Login;
import React from 'react';
import LoginForm from '../LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <h1>Login Page</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
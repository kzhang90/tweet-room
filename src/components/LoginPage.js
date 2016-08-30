import React from 'react';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm />
      </div>
    );
  }
}
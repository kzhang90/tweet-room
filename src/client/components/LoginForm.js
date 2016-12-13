import React from 'react';
import { signIn } from '../helpers/auth';

class LoginForm extends React.Component {
  handleTwitterSubmit(e) {
    e.preventDefault();
    signIn();
  }
  render() {
    return (
      <div className="loginForm">
        Save to mongodb.
      </div>
    );
  }
}

export default LoginForm;
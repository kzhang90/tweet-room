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
        <form>

          
        </form>
        <input className="center-block" type="image" src="static/images/sign-in-with-twitter-button.png" name="twitterLogin" id="twitterLogin" />
      </div>
    );
  }
}

export default LoginForm;
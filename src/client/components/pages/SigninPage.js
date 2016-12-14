import React from 'react';
import SigninForm from '../SigninForm';
import { signIn } from '../../helpers/auth';

class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1 className="text-center">Signin Page</h1>
          <SigninForm />
          <input type="image" src="static/images/sign-in-with-twitter-button.png" name="twitterLogin" id="twitterLogin" />
        </div>
      </div>
    );
  }
}

export default Login;
import React from 'react';
import { signIn } from '../helpers/auth';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
  }
  handleTwitterSubmit(e) {
    e.preventDefault();
    signIn();
  }
  render() {
    return (
      <div className="twitterLogin">
        <input className="center-block" onClick={this.handleTwitterSubmit} type="image" src="static/images/sign-in-with-twitter-button.png" name="twitterLogin" id="twitterLogin" />;
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
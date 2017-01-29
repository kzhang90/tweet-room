import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import { signIn } from '../helpers/auth';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import validateInput from '../../server/shared/validations/login';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
  }
  handleTwitterSubmit(e) {
    e.preventDefault();
    signIn();
    // save the token from sigin?
  }
  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <div className="loginArea">
        <input className="center-block" onClick={this.handleTwitterSubmit} type="image" src="static/images/sign-in-with-twitter-button.png" name="twitterLogin" id="twitterLogin" />
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
export default connect(null, { login })(LoginForm);
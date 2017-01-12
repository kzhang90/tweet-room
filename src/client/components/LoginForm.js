import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import { signIn } from '../helpers/auth';
import { login } from '../actions/login';
import { connect } from 'react-redux';
import validateInput from '../../server/shared/validations/login';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleTwitterSubmit(e) {
    e.preventDefault();
    signIn();
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    } else {
      return isValid;
    }
  }
  onSubmit(e) {
    e.preventDefault();
    // serverside validations:
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'), 
        (err) => this.setState({ errors: err.data.errors, isLoading: false })
      );
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <div className="loginForm">
        <form onSubmit={this.onSubmit}>
          <h1>Log In</h1>

          { errors.form && <div className="alert alert-danger">{errors.form}</div> }

          <TextFieldGroup
            field="identifier"
            label="Username / Email"
            value={identifier}
            error={errors.identifier}
            onChange={this.onChange}
          />          

          <TextFieldGroup
            field="password"
            label="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
          />

          <div className="form-group">
            <button className="btn btn-primary btn-lrg" disabled={isLoading}>Login</button>
          </div>
        </form>
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
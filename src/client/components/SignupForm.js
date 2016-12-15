import React from 'react';
import validateInput from '../../server/shared/validations/signup';
import { browserHistory } from 'react-router';
import TextFieldGroup from './common/TextFieldGroup';

class SignupForm extends React.Component {
  // constructor is the first method that is called when an instance of a component is being created and inserted into the DOM
  constructor() {
    // call super(props) or else risking code-breaking this.props = undefined.
    super();
    this.state = {
      username: '',
      email: '',
      password:'',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }
    // bind class methods with class instance
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    // every time we submit, we want to clear the errors.
    // dispatches actions and makes the ajax request.
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          // dispatch an action
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully.'
          })
          browserHistory.push('/');
        },
        // if something goes wrong:
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />        

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
        />        

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SignupForm;
import React from 'react';
import SignupForm from '../SignupForm';
import { connect } from 'react-redux';
import userSignupRequest from '../../actions/signupActions';

class SignupPage extends React.Component {
// redux will supply the function as a prop
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}
// when you expect this component will have the prop
SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignupPage);

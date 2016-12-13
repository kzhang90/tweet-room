import React from 'react';
import SignupForm from '../SignupForm';
import { connect } from 'react-redux';
import userSignupRequest from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
// redux will supply the function as a prop
  render() {
    // below deconstructs props
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}
// when you expect this component will have the prop
SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);

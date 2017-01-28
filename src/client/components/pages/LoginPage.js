import React from 'react';
import TwitterLogin from '../TwitterLogin';

class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <TwitterLogin />
        </div>
      </div>
    );
  }
}

export default Login;
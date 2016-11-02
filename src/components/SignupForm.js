import React from 'react';

export default class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" className="form-control"/>
        </div>
      </form>
    )
  }
}
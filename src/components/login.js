import React from 'react';

export default class Login extends React.component {

  constructor() {
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();

    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        consolelog("Error loggin in", err);
      });
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <input type="text" valueLink={this.linkState('user')} placeholder="username" />
          <input type="password" valueLink={this.linkState('password')} placeholder="password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
  }
}

reactMixin(Login.prototype, React.addons.LinkedStateMixin);
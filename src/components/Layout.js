import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">Root Link</Link>
          <Link to="/Login">Login</Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>This is my footer</p>
        </footer>
      </div>
    );
  }
}
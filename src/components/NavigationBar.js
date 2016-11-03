import React from 'react';
import { Link } from 'react-router';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Logo</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/signin">Sign in</Link></li>
              <li><Link to="/signout">Sign out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
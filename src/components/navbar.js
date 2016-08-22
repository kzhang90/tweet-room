import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}
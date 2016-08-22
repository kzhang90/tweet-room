import React from 'react';
import Feed from './feed';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>I should fetch twitter data here in the home component and pass it to feed</div>
        <Feed />
      </div>
    );
  }
}
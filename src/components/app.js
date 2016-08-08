import React from 'react';
import Feed from './feed';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Twitta Twatta</h1>
          <Feed />
        </div>
    );
  }
}


import React from 'react';
import Feed from './feed';

export default class App extends React.Component {
  render() {
    console.log('in the app!')
    console.log(process.env.TWITTER_KEY);
    return (
        <div>
          <h1>Twitta Twatta</h1>
          <Feed />
        </div>
    );
  }
}


import React from 'react';
import request from 'superagent';
import TrendingTagContainer from './TrendingTagContainer';

class Trending extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtags: []
    }
    this.getTrending = this.getTrending.bind(this);
  }

// ajax in this component to get the trending tags
// trending tag container is going to be mapped or for loop
// button result is passed as props to trending tag container
  getTrending() {
    console.log('in getTrending!');
    request.get('').end((error, response) => {
      if (!error && response) {
        this.setState({ hashtags: look.at.response });
      } else {
        console.log('There was an error fetching from Twitter', error);
      }
    });
  }

  render() {
    return (
      <div className="trending-wrap">
        <button onClick={this.getTrending} className="getTrendingButton">Get Trending!</button>
        <TrendingTagContainer myprop={'teehee'} />
      </div>
    );
  }
}

export default Trending;
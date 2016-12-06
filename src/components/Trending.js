import React from 'react';
import request from 'superagent';
import Hashtag from './Hashtag';

class Trending extends React.Component {
  constructor() {
    super();
    this.state = {
      hashtags: []
    }
    this.getTrending = this.getTrending.bind(this);
  }

  getTrending() {
    request.get('').end((error, response) => {
      if (!error && response) {
        this.setState({ hashtags: look.at.response });
      } else {
        console.log('There was an error fetching from Twitter', error);
      }
    });
  }

  render() {
    const { hashtags } = this.state;
    const HashtagComponents = hashtags.map((hashtag) => {
      return <HashTag key={hashtag.id} {...hashtag} />
    });

    return (
      <div className="trending-wrap">
        <button onClick={this.getTrending} className="getTrendingButton">Get Trending!</button>
        <div className="hashtags-container">
          <h2>Below are the current trending tags</h2>
          <ul>{HashtagComponents}</ul>
        </div>
      </div>
    );
  }
}

export default Trending;
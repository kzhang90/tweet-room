import React from 'react';
import TrendingButton from './TrendingButton';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // ajax in this component to get the trending tags
  render() {
    return (
      // button to GET top trending hashtags
      <div className="trendingTags">
        <TrendingButton />
      </div>
    );
  }
}

export default Feed;
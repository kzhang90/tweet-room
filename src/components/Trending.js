import React from 'react';
import TrendingButton from './TrendingButton';
import TrendingTagContainer from './TrendingTagContainer';

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
      // component to contain trending tags
      <div className="trendingTags">
        <TrendingButton />
        <TrendingTagContainer />
      </div>
    );
  }
}

export default Feed;
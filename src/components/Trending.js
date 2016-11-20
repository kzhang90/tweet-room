import React from 'react';
import TrendingButton from './TrendingButton';
import TrendingTagContainer from './TrendingTagContainer';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

// ajax in this component to get the trending tags
// trending tag container is going to be mapped or for loop
  render() {
    return (
      <div className="trendingTags">
        <TrendingButton />
        <TrendingTagContainer />
      </div>
    );
  }
}

export default Trending;
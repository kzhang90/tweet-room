import React from 'react';
import TagResult from 'TagResult.js';

// this component displays the hashtags that are trending.
class TrendingTagContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="trendingTagContainer">
        {
        <TagResult />
        }
      </div>
    );
  }

}

export default TrendingTagContainer;
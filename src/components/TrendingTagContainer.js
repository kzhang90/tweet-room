import React from 'react';
import TagResult from 'TagResult.js';

// this component displays the hashtags that are trending.
class TrendingTagContainer extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <div className="trendingTagContainer">
        <div className="resultContainer">
          <TagResult />
        </div>
      </div>
    );
  }

}

export default TrendingTagContainer;
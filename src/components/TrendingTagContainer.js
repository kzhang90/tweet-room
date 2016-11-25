import React from 'react';
import TagResult from './TagResult';

// this component displays the hashtags that are trending.
class TrendingTagContainer extends React.Component {
  constructor(props) {
    super(props);
  }
// top 10
  render() {
    return (
      <div className="trendingTagContainer">
        <TagResult anotherprop={'hoho'}/>
      </div>
    );
  }

}

export default TrendingTagContainer;
import React from 'react';

class TrendingButton extends React.Component {
  constructor(props) {
    super(props);
  }
  // methods to get http results
  
  render() {
    return (
      <button className="trendingButton">Get Tags</button>
    );
  }
}

export default TrendingButton;
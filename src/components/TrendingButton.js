import React from 'react';

class TrendingButton extends React.Component {
  constructor(props) {
    super(props);
  }
  // methods to get http results
  render() {
    return (
      <div className="trendingButton">
        <button>Get Tags</button>
      </div>
    )
  }
}

export default TrendingButton;
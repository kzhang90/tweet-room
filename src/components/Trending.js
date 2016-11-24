import React from 'react';
import TrendingTagContainer from './TrendingTagContainer';

class Trending extends React.Component {
  constructor() {
    super();
  }

  // someMethod() {

  // }

// ajax in this component to get the trending tags
// trending tag container is going to be mapped or for loop
// button result is passed as props to trending tag container
  render() {
    console.log('in trending render!');
    return (
      <div className="trendingWrap">
        <button className="getTrendingButton">Get Trending!</button>
        <TrendingTagContainer myprop={'teehee'}/>
      </div>
    );
  }
}

export default Trending;
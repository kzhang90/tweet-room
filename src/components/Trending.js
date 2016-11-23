import React from 'react';
import TrendingButton from './TrendingButton';
import TrendingTagContainer from './TrendingTagContainer';

class Trending extends React.Component {
  // constructor(props) {
  //   super();
  // }

// ajax in this component to get the trending tags
// trending tag container is going to be mapped or for loop
// button result is passed as props to trending tag container

// dont pass props to trendingbutton

// on press, the button sets state which then passes props to TrendingTagContainer
  render() {
    console.log('in trending render!');
    return (
      <div className="trendingWrap">
        <TrendingButton />
        <TrendingTagContainer />
      </div>
    );
  }
}

export default Trending;
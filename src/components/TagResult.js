import React from 'react';
// takes the props and displays
// do stuff with data in the props
class TagResult extends React.Component {
  constructor (props) {
    super(props);
    console.log("in tagresult constructor!");
  }

  render() {
    console.log("in tagresult render!");
    return (
      <div className="tagResult">
        This should be a img with a small graph
      </div>
    );
  } 
}

export default TagResult;
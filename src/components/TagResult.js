import React from 'react';
// takes the props and displays 
class TagResult extends React.Component {
  constructor (props) {
    super(props);
    console.log("in the constructor!");
  }

  render() {
    console.log("in the render!");
    return (
      <div className="tagResult">
        <div>This is the tag result</div>
      </div>
    );
  } 
}

export default TagResult;
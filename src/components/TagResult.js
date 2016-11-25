import React from 'react';
// takes the props and displays
// do stuff with data in the props
class TagResult extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { tagdata } = this.props;
    console.log("TagResult render");
    return (
      <div className="tag-result">
        <p>This should be a img with a small graph</p>
      </div>
    );
  } 
}

export default TagResult;
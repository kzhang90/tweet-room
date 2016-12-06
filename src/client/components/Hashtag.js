import React from 'react';
// takes the props and displays
// do stuff with data in the props
class Hashtag extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { tagdata } = this.props;
    return (
      <div className="tag-result">
        <p>This should be a img with a small graph</p>
      </div>
    );
  } 
}

export default Hashtag;
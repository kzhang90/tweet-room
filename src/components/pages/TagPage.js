import React from 'react';
// show all of the details of a tag
// 'tag/:id'
class TagPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          This will be a page dedicated to that specific hashtag(id).
        </div>
      </div>
    );
  }
}

export default TagPage;
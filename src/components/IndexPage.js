import React from 'react';
import Trending from './Trending';

class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Trending />
      </div>
    );
  }
}

export default IndexPage;
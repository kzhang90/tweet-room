import React from 'react';
import Trending from '../Trending';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Trending />
      </div>
    );
  }
}

export default HomePage;
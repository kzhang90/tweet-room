import React from 'react';
import Trending from './Trending';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Trending />
      </div>
    );
  }
}
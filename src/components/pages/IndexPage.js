import React from 'react';
import Feed from '../Feed';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Feed />
      </div>
    );
  }
}
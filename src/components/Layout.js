import React from 'react';
import { Link } from 'react-router';
import '../static/css/style.css';


export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="app-content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
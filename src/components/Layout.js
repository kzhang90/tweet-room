import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import '../static/css/style.css';


export default class Layout extends React.Component {
  render() {
    const title = "Welcome Kenny!";
    
    return (
      <div className="app-container">

        <Header title={title}/>
        <div className="app-content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
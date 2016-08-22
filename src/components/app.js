import React from 'react';
import NavBar from './navbar';

export default class App extends React.Component {

  constructor() {
    console.log("in the constructor");
    super();
    this.state = {};
  }

  render() {
    console.log('in the app!');
    return (
        <div>
          <NavBar />
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  // initialCount: React.PropTypes.number
};
App.defaultProps = {
  // default props go here
}


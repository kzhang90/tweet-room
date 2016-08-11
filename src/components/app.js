import React from 'react';
import Feed from './feed';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    // called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    // called when the props and/or state change
  }

  componentWillUnmount() {
    // called when the component is removed
  }

  render() {
    console.log('in the app!');
    return (
        <div>
          <h1>tweet room</h1>
          <Feed />
        </div>
    );
  }
}


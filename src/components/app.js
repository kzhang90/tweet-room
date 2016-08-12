import React from 'react';
import Feed from './feed';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
      // count: props.initialCount
    };
    // any method that is in the class needs to be bound to the instance.
    // this.method = this.method.bind(this)
  }

  componentWillMount() {
    // called the first time the component is loaded right before the component is added to the page
    console.log("component will mount");
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
          <button onClick={this.increment}>{this.state.count}</button>
          <Feed />
        </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {}


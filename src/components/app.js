import React from 'react';
import Feed from './feed';
import NavBar from './navbar';

export default class App extends React.Component {

  constructor() {
    console.log("in the constructor");
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
// a component cannot change its props but it can change its state
  componentWillMount() {
    // called the first time the component is loaded right before the component is added to the page
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
    // called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props");
    // called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update");
    // called when the props and/or state change
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // called when the component is removed
  }

  render() {
    console.log('in the app!');
    return (
        <div>
          <NavBar />
          <h1>Main Title</h1>
          <button onClick={this.increment}>{this.state.count}</button>
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  initialCount: React.PropTypes.number
};
App.defaultProps = {
  // default props go here
}


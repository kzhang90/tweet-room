import React from 'react';
import NavigationBar from './NavigationBar';
// import '../static/css/style.css';

class Layout extends React.Component {
  // pass props to constructor and super to access and define this.props in this component.
  // constructor() {
  //   super();
  //   this.state = {
  //     // title: "Welcome, Stranger",
  //     // data: 0
  //   }
  //   // this.updateNumber = this.updateNumber.bind(this);
  // }

  // updateNumber() {
  //   this.setState({data: this.state.data + 1});
  // }

  // componentWillMount() {
  //   console.log('will mount')
  // }
  // componentDidMount() {
  //   console.log('did mount')
  //   // ajax requests
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('component will receive props')
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should component update')
  //   return true;
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('component will update')
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('component did update')
  // }
  // componentWillUnmount() {
  //   console.log('component will unmount')
  // }
  render() { 
    return (
      <div className="container">
        <NavigationBar />
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
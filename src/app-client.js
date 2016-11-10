import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = function() {
  ReactDOM.render(<AppRoutes />, document.getElementById('app'));
}
// window.onload = () => {
//   ReactDOM.render(<AppRoutes />, document.getElementById('app'));
// };
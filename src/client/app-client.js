import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './index';

// does constants.js go in here because of webpack's entry point?

window.onload = function() {
  render(<AppRoutes />, document.getElementById('app'));
};
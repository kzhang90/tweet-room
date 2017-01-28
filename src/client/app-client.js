import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './index';

window.onload = function() {
  render(<AppRoutes />, document.getElementById('app'));
};
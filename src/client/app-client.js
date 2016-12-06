import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = function() {
  render(<AppRoutes />, document.getElementById('app'));
};
import React from 'react';

import routes from '../routes';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// thunk allows us to dispatch async
const store = createStore(
  (state = {}) => state,
  // applyMiddleware function is provided by redux
  applyMiddleware(thunk)
);

// imported render from 'react-dom'
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
  </Provider>, 
  document.getElementById('app')
);
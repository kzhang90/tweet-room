import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import render from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import routes from '../routes';

// thunk allows us to dispatch async
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

// problem might be here
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
  </Provider>, 
  document.getElementById('app')
);
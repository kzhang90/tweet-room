import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Login from './components/login';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Login from './components/login';

// need to add something like Router.run here urls are accessible
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));


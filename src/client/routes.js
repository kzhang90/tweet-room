import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import GreetingPage from './components/pages/GreetingPage';
import HomePage from './components/pages/HomePage';
import TagPage from './components/pages/TagPage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';

// a path to see all of the details of a tag
const routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={GreetingPage} />
      <Route path="signup" component={SignupPage} />
      <Route path="login" component={LoginPage} />
      <Route path="home" component={HomePage} />
      <Route path="tag/:id" component={TagPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;


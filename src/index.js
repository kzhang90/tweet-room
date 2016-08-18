import React from 'react';
import { render } from 'react-dom';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import App from './components/app';

render(<App />, document.getElementById('app'));
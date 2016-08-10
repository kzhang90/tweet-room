require('dotenv').load();

import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App />, document.getElementById('app'));
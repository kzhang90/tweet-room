const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
const request = require('request');

require('dotenv').config();

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('static'));

app.get('/trending', function(req, res) {
  const url = 'https://api.twitter.com/1.1/trends/place.json';
  

});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/views/index.html'));
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8080');
});

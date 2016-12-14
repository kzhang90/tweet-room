const express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const users = require('./routes/users');
const app = express();

const compiler = webpack(webpackConfig);
// use request to make http calls. supports https and follows redirects by default.
// const request = require('request');

require('dotenv').config();

app.use(bodyParser.json());
// in .env file: NAME=VALUE
// in server file here: process.env.NAME gets value
app.use('/api/users/', users);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.use('/static', express.static(path.join(__dirname, '../client/static')))

// make express api for post request for users

// app.get('/trending', function(req, res) {
//   const url = 'https://api.twitter.com/1.1/trends/place.json';
// });


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/static/views/index.html'));
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8080');
});

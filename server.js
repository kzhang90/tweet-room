var express = require('express');
var webpack = require('webpack');
var path = require('path');

// var webpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');

var app = express();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('src'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});

// new webpackDevServer(webpack(config), {
//   hot: true,
//   historyApiFallback: true,
//   proxy: {
//     '**': 'http://localhost:3000'
//   }
// }).listen(3001, 'localhost', function(err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('teehee');
//   }
// });


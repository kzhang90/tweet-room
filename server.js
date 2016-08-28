//const myComponent = require('./src/components/app');
const express = require('express');
const app = express();

const server = app.listen(3000);
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

// const React = require('react');
// const ReactComponent = React.createFactory(myComponent);

app.use(require('morgan')('short'));

// making a dev server that hot reloads on 3001 that mimic's 3000
new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    '**': 'http://localhost:3000'
  }
}).listen(3001, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('teehee');
  }
});


// send react component as server-rendered string.

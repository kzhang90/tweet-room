const express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.use('/static', express.static(path.join(__dirname, '../client/static')))

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

//const myComponent = require('./src/components/app');
const express = require('express');
const app = express();
const socketio = require('socket.io');

const server = app.listen(3033);
const io = require('socket.io').listen(server);

const React = require('react');
const ReactComponent = React.createFactory(myComponent);

app.use(require('morgan')('short'));

(function() {

  const webpack = require('webpack');
  const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path:'/__webpack_hmr', heartbeat: 10*1000
  }));
})();

// send react component as server-rendered string.
app.get('/', function(req, res) {
  res.sendFile(__dirname + )
})

// sockets chat rooms
io.sockets.on('connection', function(socket) {
});

// if (require.main === module) {
//   var server = http.createServer(app);
//   server.listen(process.env.PORT || 1616, function() {
//     console.log("Listening on %j", server.address());
//   });
// }
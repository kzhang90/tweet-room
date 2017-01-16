var webpack = require('webpack');
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // webpack dev server host and port
    // 'only' prevents reload on syntax errors
    'webpack/hot/only-dev-server',
    // app's entry point
    './src/client/app-client.js'
  ],
  output: {
    path: __dirname + '/static',
    // only use publicPath in production?
    // publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // below is if using es6 in serverside code 
        // include: [
        //   path.
        // ]
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }, {
        test: /\.css$/,
        loader: combineLoaders([
          {
            // style-loader lets it be applied to the page
            loader: 'style-loader'
          }, {
            // css-loader converts css to valid js
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  },
  devServer: {
    // webpack dev server will look for index.html
    contentBase: './src/static/views',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}
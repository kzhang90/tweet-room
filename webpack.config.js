var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        // test for both .js and .jsx files
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}
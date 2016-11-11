var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

var webpackConfig = {

  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/js/component-1.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'react-hot-loader/webpack'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index-template.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = webpackConfig;

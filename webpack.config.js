var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

var webpackConfig = {
    entry: path.resolve(__dirname, "src/js/component-1.js"),
    output: {
    path: "build",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index-template.html'
    })
  ]
}

module.exports = webpackConfig;

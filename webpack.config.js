var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject:'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module : {
    loaders: [
    {test: /\.js$/, exclude: /node_modules/, loader:'babel-loader'},
    {test: /\.css$/, loader: 'style-loader!css-loader'},
    {test: /\.html$/, loader: 'html-loader?attrs[]=video:src'},
    {test: /\.mp4$/, loader: 'url?limit=10000&mimetype=video/mp4'},
    { test: /\.(ttf|eot|svg|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}

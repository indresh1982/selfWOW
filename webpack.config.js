var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/bin');
var APP_DIR = path.resolve(__dirname, 'src');

console.log("test", BUILD_DIR, APP_DIR);
module.exports = {
  entry:  APP_DIR + '/App.react.js', // './src/app.js',
  output: {
    path: BUILD_DIR, // './public/bin',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
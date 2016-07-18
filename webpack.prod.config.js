var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var fs = require('fs-extra');

// copies assets to the build folder
function fsErr(err) { if(err) console.error(err) }
fs.ensureDirSync('build', fsErr);
fs.copy('src/assets', 'build/assets');

module.exports = {
  entry: {
    'build': [
      './src/polyfills.ts',
      './src/vendor.ts',
      './src/main.ts'
    ]
  },

  output: {
    path: './build',
    filename: '[name].bundle.js',
  },

  plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' })],

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript', 'angular2-template'] },
      { test: /^((?!main).)*\.scss$/, loaders: ['to-string', 'css', 'resolve-url', 'sass'] },
      { test: /main\.scss$/, loaders: ['style', 'css', 'resolve-url', 'sass'] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.json$/, loader: 'json' }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  }

};
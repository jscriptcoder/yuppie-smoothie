var webpack = require('webpack');
var path = require('path');


// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor':    './src/vendor.ts',
    'main':      './src/main.ts',
  },

  output: {
    path: './dist',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript', 'angular2-template'] },
      { test: /^((?!main).)*\.scss$/, loaders: ['to-string', 'css', 'resolve-url', 'sass'] },
      { test: /main\.scss$/, loaders: ['style', 'css', 'resolve-url', 'sass'] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.json$/, loader: 'json' },
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);

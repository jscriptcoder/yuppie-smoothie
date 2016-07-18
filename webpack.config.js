var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor':    './src/vendor.ts',
    'main':      './src/main.ts',
  },

  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none'
    })
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript', 'angular2-template'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /^((?!main).)*\.scss$/, loaders: ['to-string', 'css', 'resolve-url', 'sass'] },
      { test: /main\.scss$/, loaders: ['style', 'css', 'resolve-url', 'sass'] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.json$/, loader: 'json' }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    inline: true,
    port: 3000,
    contentBase: './src',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }

};
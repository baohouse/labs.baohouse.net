const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};

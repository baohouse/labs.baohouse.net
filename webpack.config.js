const isDevelopment = process.argv.indexOf('-p') === -1;

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: [
    '@babel/register',
    '@babel/polyfill',
    `${__dirname}/src/index.tsx`
  ],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    modules: ['src', 'node_modules', 'images'],
  },

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader' },
    ],
  },

};

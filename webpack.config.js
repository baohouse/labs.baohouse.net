const isDevelopment = process.argv.indexOf('-p') === -1;

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['@babel/register', '@babel/polyfill', `${__dirname}/src/index.tsx`],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    modules: ['src', 'node_modules', 'images'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              sourceMap: true,
            },
          },
        ],
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader' },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};

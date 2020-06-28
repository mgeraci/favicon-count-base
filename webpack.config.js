const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'FaviconCountBase.js',
    library: 'FaviconCountBase',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
};

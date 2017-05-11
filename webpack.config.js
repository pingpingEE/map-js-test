var path = require('path');

module.exports = {
  devtool: "source-map", // enum
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyMapJs'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
        loaders: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
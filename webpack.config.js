var config = {
  entry: './src/index.js',
  module: {
    rules: [{ test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimize: true,
  };
}

module.exports = config;

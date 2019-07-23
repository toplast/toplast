const webpack = require('webpack');
const slsw = require('serverless-webpack');

const { isLocal } = slsw.lib.webpack;

module.exports = {
  target: 'node',
  externals: ['aws-sdk'],
  mode: isLocal ? 'development' : 'production',
  entry: {
    ...slsw.lib.entries,
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
  ],
};

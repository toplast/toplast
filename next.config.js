/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const withImages = require('next-images')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { version } = require('./package.json')

module.exports = withImages({
  webpack(config) {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    return config
  },
  generateBuildId: async () => version,
  env: {
    LASTFM_API_KEY: process.env.LASTFM_API_KEY,
  },
})

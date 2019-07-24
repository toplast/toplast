const dotenv = require('dotenv');

const parsed = dotenv.config().parsed || {};

module.exports = {
  LAST_FM_API_URL: parsed.LAST_FM_API_URL || process.env.LAST_FM_API_URL,
  LAST_FM_API_KEY: parsed.LAST_FM_API_KEY || process.env.LAST_FM_API_KEY,
  SPOTIFY_CLIENT_ID: parsed.SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET:
    parsed.SPOTIFY_CLIENT_SECRET || process.env.SPOTIFY_CLIENT_SECRET
};

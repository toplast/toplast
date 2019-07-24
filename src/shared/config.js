const dotenv = require('dotenv');

const { parsed } = dotenv.config();

module.exports = {
  LASTFM_API_URL: parsed.LASTFM_API_URL || process.env.LASTFM_API_URL,
  LASTFM_API_KEY: parsed.LASTFM_API_KEY || process.env.LASTFM_API_KEY,
  SPOTIFY_CLIENT_ID: parsed.SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: parsed.SPOTIFY_CLIENT_SECRET
    || process.env.SPOTIFY_CLIENT_SECRET,
};

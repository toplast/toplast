require('dotenv').config()

module.exports = {
  LASTFM_API_KEY: process.env.LASTFM_API_KEY || '',
  LASTFM_API_URL: process.env.LASTFM_API_URL || 'https://ws.audioscrobbler.com/2.0/',
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || '',
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || ''
}

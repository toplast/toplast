const dotenv = require('dotenv');

const parsed = dotenv.config().parsed || {};

module.exports = {
  CLIENT_URL: parsed.CLIENT_URL || process.env.CLIENT_URL,
  LAST_FM_API_URL: parsed.LAST_FM_API_URL || process.env.LAST_FM_API_URL,
  LAST_FM_API_KEY: parsed.LAST_FM_API_KEY || process.env.LAST_FM_API_KEY
};

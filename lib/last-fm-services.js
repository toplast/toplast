const request = require('axios');
const config = require('./config');

const getMethodName = method =>
  method
    .replace('get', '')
    .split('.')
    .pop()
    .toLowerCase();

const lastFm = async (method, params) => {
  const baseUrl = config.LAST_FM_API_URL;
  const query = Object.assign({}, params, {
    api_key: config.LAST_FM_API_KEY,
    format: 'json',
    method
  });

  try {
    const response = await request.get(baseUrl, { params: query });

    return {
      statusCode: response.status,
      body: response.data[getMethodName(method)] || response.data
    };
  } catch ({ response }) {
    return {
      statusCode: response.status,
      body: response.data
    };
  }
};

module.exports = lastFm;

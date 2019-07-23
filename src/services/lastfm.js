import axios from 'axios';

const paramsToString = (params) => {
  const entries = Object.entries(params);

  const stringParameters = entries
    .map((param) => {
      const [key, value] = param;
      return `&${key}=${value}`;
    })
    .join('');

  return stringParameters;
};

const getMethodName = method => method
  .replace('get', '')
  .split('.')
  .pop()
  .toLowerCase();

export const lastfm = async (method, params) => {
  const baseUrl = process.env.LASTFM_API_URL;
  const query = `?method=${method}&api_key=${process.env.LASTFM_API_KEY}&format=json`;
  const stringParameters = paramsToString(params);

  const url = baseUrl + query + stringParameters;

  try {
    const response = await axios.get(url);
    const data = response.data[getMethodName(method)] || response.data;

    return {
      status: response.status,
      body: data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      body: error.response.data,
    };
  }
};

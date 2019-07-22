const axios = require('axios')
const config = require('../config')

const paramsToString = (params) => {
  const entries = Object.entries(params)

  let query = ''
  for (const [param, value] of entries) {
    query += `&${param}=${value}`
  }

  return query
}

export const lastFm = async (method, params) => {
  const _params = paramsToString(params)
  const query = `?method=${method}&api_key=${config.LASTFM_API_KEY}&format=json`

  const { data } = await axios.get(config.LASTFM_API_URL + query + _params)

  const methodName = method
    .replace('get', '')
    .split('.')
    .pop()
    .toLowerCase()

  return data[methodName] || data
}

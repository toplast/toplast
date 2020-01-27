const lastFm = require('../../lib/last-fm-services');
const { validateLastFmParams } = require('../../lib/validators');
const {
  handleArtistsData,
  handleFunctionReturn,
  handleLastFmParams
} = require('../../lib/handlers');

module.exports.main = async event => {
  console.log(JSON.stringify(event));

  const params = handleLastFmParams(event.queryStringParameters);
  if (!validateLastFmParams(params)) {
    return handleFunctionReturn({
      statusCode: 400,
      body: { message: 'Invalid params.' }
    });
  }

  const topArtists = await lastFm('User.getTopArtists', params);
  if (topArtists.statusCode !== 200) return handleFunctionReturn(topArtists);

  topArtists.body = await handleArtistsData(topArtists.body.artist);
  return handleFunctionReturn(topArtists);
};

const lastFm = require('../../lib/last-fm-services');
const { validateLastFmParams } = require('../../lib/validators');
const {
  handleAlbumsData,
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

  const topAlbums = await lastFm('User.getTopAlbums', params);
  if (topAlbums.statusCode !== 200) return handleFunctionReturn(topAlbums);

  topAlbums.body = handleAlbumsData(topAlbums.body.album);
  return handleFunctionReturn(topAlbums);
};

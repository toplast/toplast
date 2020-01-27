const lastFm = require('../../lib/last-fm-services');
const { validateLastFmParams } = require('../../lib/validators');
const {
  handleFunctionReturn,
  handleLastFmParams,
  handleTracksData
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

  const topTracks = await lastFm('User.getTopTracks', params);
  if (topTracks.statusCode !== 200) return handleFunctionReturn(topTracks);

  topTracks.body = await handleTracksData(topTracks.body.track);
  return handleFunctionReturn(topTracks);
};

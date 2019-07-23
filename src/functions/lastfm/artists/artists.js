import { buildResponse } from '../../../shared/build-response';
import { handleArtists } from './handlers';
import { handleParams } from '../handlers';
import { lastfm } from '../../../services/lastfm';
import { validateParams } from '../validators';

export const handle = async (event) => {
  let params = event.queryStringParameters;
  params = handleParams(params);

  if (!validateParams(params)) {
    return buildResponse(400, { message: 'User param is required!' });
  }

  const response = await lastfm('user.getTopArtists', params);

  if (response.status !== 200) { return buildResponse(response.status, response.body); }

  const artists = await handleArtists(response.body.artist);
  return buildResponse(200, artists);
};

const { getArtistImage, getTrackImage } = require('./spotify-services');

const getHeaders = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET'
});

const handleAlbumsData = albums => {
  return albums.map(album => ({
    artist: album.artist.name,
    image: album.image[1]['#text'],
    name: album.name,
    playcount: album.playcount
  }));
};

const handleArtistsData = async artists => {
  const promises = await artists.map(async artist => ({
    name: artist.name,
    playcount: artist.playcount,
    image: await getArtistImage(artist.name)
  }));

  const handledArtists = await Promise.all(promises);
  return handledArtists;
};

const handleFunctionReturn = ({ statusCode, body }) => {
  return {
    body: JSON.stringify(body),
    headers: getHeaders(),
    statusCode
  };
};

const handleLastFmParams = params => {
  return Object.assign({ period: '7day', limit: '1' }, params);
};

const handleTracksData = async tracks => {
  const promises = await tracks.map(async track => ({
    name: track.name,
    playcount: track.playcount,
    artist: track.artist.name,
    image: await getTrackImage(track.artist.name, track.name)
  }));

  const handledTracks = await Promise.all(promises);
  return handledTracks;
};

module.exports = {
  handleAlbumsData,
  handleArtistsData,
  handleFunctionReturn,
  handleLastFmParams,
  handleTracksData
};

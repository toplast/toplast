const { getArtistImage, getTrackImage } = require('./last-fm-scrapper');

const getHeaders = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET'
});

const handleAlbumsData = albums => {
  return albums.map(album => ({
    artist: album.artist.name,
    image:
      album.image[3]['#text'] ||
      'https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
    name: album.name,
    playcount: album.playcount
  }));
};

const handleArtistsData = async artists => {
  const promises = await artists.map(async artist => ({
    name: artist.name,
    playcount: artist.playcount,
    image: await getArtistImage(artist.url)
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
    image: await getTrackImage(track.url)
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

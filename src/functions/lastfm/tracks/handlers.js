const { searchTrackImage } = require('../../../services/spotify');

module.exports.handleTracks = async (tracks) => {
  const promises = await tracks.map(async track => ({
    name: track.name,
    playcount: track.playcount,
    artist: track.artist.name,
    image: await searchTrackImage(track.artist.name, track.name),
  }));

  const handledTracks = await Promise.all(promises);
  return handledTracks;
};

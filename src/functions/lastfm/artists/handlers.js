const { searchArtistImage } = require('../../../services/spotify');

module.exports.handleArtists = async (artists) => {
  const promises = await artists.map(async artist => ({
    name: artist.name,
    playcount: artist.playcount,
    image: await searchArtistImage(artist.name),
  }));

  const handledArtists = await Promise.all(promises);
  return handledArtists;
};

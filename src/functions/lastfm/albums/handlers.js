module.exports.handleAlbums = albums => albums
  .map(album => ({
    artist: album.artist.name,
    image: album.image[1]['#text'],
    name: album.name,
    playcount: album.playcount,
  }));

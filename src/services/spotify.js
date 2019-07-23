const SpotifyWebApi = require('spotify-web-api-node');

const spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const setAccessToken = async () => {
  const { body } = await spotify.clientCredentialsGrant();
  spotify.setAccessToken(body.access_token);
};

const searchArtistImage = async (artistName) => {
  if (!spotify.getAccessToken()) { await setAccessToken(); }

  const { body } = await spotify.searchArtists(artistName);
  const artists = body.artists.items;
  const artist = artists[0];

  if (!artist) { return null; }

  const image = artist.images[1].url;
  return image;
};

const searchTrackImage = async (artistName, trackName) => {
  if (!spotify.getAccessToken()) { await setAccessToken(); }

  const { body } = await spotify
    .searchTracks(`track:${trackName} artist:${artistName}`);
  const tracks = body.tracks.items;
  const track = tracks[0];

  if (!track) { return null; }

  const image = track.album.images[1].url;
  return image;
};

module.exports = { searchArtistImage, searchTrackImage };

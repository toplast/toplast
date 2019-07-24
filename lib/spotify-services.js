const Spotify = require('spotify-web-api-node');
const config = require('./config');

const spotify = new Spotify({
  clientId: config.SPOTIFY_CLIENT_ID,
  clientSecret: config.SPOTIFY_CLIENT_SECRET
});

const setAccessToken = async () => {
  const { body } = await spotify.clientCredentialsGrant();

  spotify.setAccessToken(body.access_token);
};

const getArtistImage = async artistName => {
  if (!spotify.getAccessToken()) await setAccessToken();

  const { body } = await spotify.searchArtists(artistName);
  const artist = body.artists.items[0];

  if (!artist) return null;
  return artist.images[1].url;
};

const getTrackImage = async (artistName, trackName) => {
  if (!spotify.getAccessToken()) await setAccessToken();

  const { body } = await spotify.searchTracks(
    `track:${trackName} artist:${artistName}`
  );
  const track = body.tracks.items[0];

  if (!track) return null;
  return track.album.images[1].url;
};

module.exports = { getArtistImage, getTrackImage };

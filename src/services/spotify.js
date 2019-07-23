const SpotifyWebApi = require('spotify-web-api-node');

const spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const setAccessToken = async () => {
  const { body } = await spotify.clientCredentialsGrant();
  spotify.setAccessToken(body.access_token);
};

module.exports.searchArtistImage = async (artistName) => {
  if (!spotify.getAccessToken()) { await setAccessToken(); }

  const { body } = await spotify.searchArtists(artistName);
  const artist = body.artists.items[0];
  const image = artist.images[1].url;

  return image;
};

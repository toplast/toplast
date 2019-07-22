const SpotifyWebApi = require('spotify-web-api-node')
const config = require('./../config')

const spotifyApi = new SpotifyWebApi({
  clientId: config.SPOTIFY_CLIENT_ID,
  clientSecret: config.SPOTIFY_CLIENT_SECRET
})

const setAccessToken = async () => {
  const { body } = await spotifyApi.clientCredentialsGrant()
  spotifyApi.setAccessToken(body.access_token)
}

export const searchArtistImage = async (artistName) => {
  await setAccessToken()
  const { body } = await spotifyApi.searchArtists(artistName)
  const artist = body.artists.items[0]
  const image = artist.images[1].url

  return image
}

export const searchTrackImage = async (trackName, artistName) => {
  await setAccessToken()
  const { body } = await spotifyApi.searchTracks(`track:${trackName} artist:${artistName}`)
  const track = body.tracks.items[0]
  const image = track.album.images[1].url

  return image
}

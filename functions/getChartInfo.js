const getImageColors = require('get-image-colors')
const { lastFm } = require('./services/lastfm')

const handleOptions = ({ option, user, period }) => {
  const requests = [
    { method: 'user.getTopAlbums', limit: '1', user, period },
    { method: 'user.getTopArtists', limit: '1', user, period },
    { method: 'user.getTopTracks', limit: '1', user, period }
  ]

  switch (option) {
    case '1':
      requests[0].limit = '5'
      break
    case '2':
      requests[1].limit = '5'
      break
    case '3':
      requests[2].limit = '5'
      break
    default:
      break
  }

  return requests
}

const getLastfmData = async (requests) => {
  const responses = []
  for (let request of requests) {
    const method = request.method
    delete request.method

    const response = await lastFm(method, request)
    responses.push(response)
  }

  return responses
}

const formatResponses = (responses) => {
  const _responses = {
    album: responses[0].album,
    artist: responses[1].artist,
    track: responses[2].track
  }

  return _responses
}

const handleAlbumData = (albums) => {
  for (let album of albums) {
    delete album['@attr']
    delete album['mbid']
    delete album['url']

    album.artist = album.artist.name
    album.image = album.image[album.image.length - 1]['#text']
  }

  return albums
}

const handleArtistData = async (artists) => {
  for (const artist of artists) {
    delete artist['@attr']
    delete artist['mbid']
    delete artist['streamable']
    delete artist['url']

    // artist.image = await getArtistImage(artist.name)
    artist.image = artist.image[artist.image.length - 1]['#text']
  }

  return artists
}

const handleTrackData = async (tracks) => {
  for (const track of tracks) {
    delete track['@attr']
    delete track['duration']
    delete track['mbid']
    delete track['streamable']
    delete track['url']

    track.artist = track.artist.name
    // track.image = await getTrackImage(track.name, track.artist)
    track.image = track.image[track.image.length - 1]['#text']
  }

  return tracks
}

const getChartColors = async (responses, option) => {
  const chartOptions = ['album', 'artist', 'track']
  const chart = chartOptions[option - 1]
  const image = responses[chart][0].image

  const palette = await getImageColors(image)
  const colors = palette.map(color => color.hex())

  return colors
}

export async function handler (event, context) {
  const params = event.queryStringParameters || {}
  if (Object.keys(params).length !== 3)
    return {
      statusCode: 406,
      body: 'Parameters not found'
    }

  const requests = handleOptions(params)

  let responses = await getLastfmData(requests)
  responses = formatResponses(responses)

  responses.album = handleAlbumData(responses.album)
  responses.artist = await handleArtistData(responses.artist)
  responses.track = await handleTrackData(responses.track)

  responses.colors = await getChartColors(responses, params.option)
  responses.option = params.option

  return {
    statusCode: 200,
    body: JSON.stringify(responses)
  }
}

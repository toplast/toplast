const { searchArtist } = require('./services/spotify')

exports.handler = async (event, context) => {
  const artist = await searchArtist('Kendrick Lamar')

  return {
    statusCode: 200,
    body: JSON.stringify(artist)
  }
}

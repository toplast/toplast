const handleOptions = (option) => {
  const requests = [
    { method: 'user.getTopAlbums', limit: '1' },
    { method: 'user.getTopArtists', limit: '1' },
    { method: 'user.getTopTracks', limit: '1' }
  ]

  switch (option) {
    case 1:
      requests[0] = Object.assign(requests[0], { limit: 5 })
      break
    case 2:
      requests[0] = Object.assign(requests[1], { limit: 5 })
      break
    case 3:
      requests[0] = Object.assign(requests[2], { limit: 5 })
      break
    default:
      requests[0] = Object.assign(requests[0], { limit: 5 })
      break
  }

  return requests
}

exports.handler = async (event, context) => {
  const params = event.queryStringParameters || {}
  if (params.length === 0)
    return { statusCode: 406, body: 'Parameters not found' }

  const requests = handleOptions(params.option)
  for (const request of requests) {
    console.log(request)
  }
  // params.period
  // params.username
  // params.option
}

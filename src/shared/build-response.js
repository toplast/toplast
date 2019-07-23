module.exports.buildResponse = (statusCode, response) => ({
  body: JSON.stringify(response),
  statusCode,
});

export const buildResponse = (statusCode, response) => ({
  body: JSON.stringify(response),
  statusCode,
});

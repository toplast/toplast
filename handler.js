const { validateParam } = require('./validators/paramValidator');

export async function hello (event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    })
  };
};

export async function getChartInfo (event) {
  const params = event.queryStringParameters || {};

  if (validateParam(params.user)) {
    console.log('oi');
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};

const puppeteer = require('puppeteer-core');
const AWS = require('aws-sdk');
const config = require('../../lib/config');
const { handleFunctionReturn } = require('../../lib/handlers');
const { validateTopLastParams } = require('../../lib/validators');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

module.exports.main = async event => {
  const params = event.queryStringParameters;

  if (!validateTopLastParams(params)) {
    return handleFunctionReturn({
      statusCode: 400,
      body: { message: 'Invalid params.' }
    });
  }

  const browser = await puppeteer.connect({
    browserURL: 'http://127.0.0.1:9222',
    defaultViewport: { height: 750, width: 750 }
  });
  const targetUrl = `${config.CLIENT_URL}?album=${params.albums}&artist=${params.artist}&track=${params.track}&option=${params.option}`;

  try {
    const page = await browser.newPage();
    const imagePath = `/tmp/screenshot-${new Date().getTime()}.png`;

    await page.goto(targetUrl);
    const buffer = await page.screenshot({ path: imagePath });
    await browser.close();

    await s3.putObject({
      Bucket: 'toplast-images',
      key: imagePath,
      Body: buffer,
      ContentType: 'image/png'
    }).promise;
    // const {  }

    return handleFunctionReturn({ statusCode: 200, body: { url: 'veja no s3' } });
  } catch (e) {
    return handleFunctionReturn({ statusCode: 500, body: e });
  }
};

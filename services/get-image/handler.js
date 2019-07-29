const aws = require('aws-sdk');
const chromium = require('chrome-aws-lambda');
const config = require('../../lib/config');
const { handleFunctionReturn } = require('../../lib/handlers');
const { validateTopLastParams } = require('../../lib/validators');

const BUCKET = 'toplast-images';

module.exports.main = async event => {
  console.log(JSON.stringify(event));

  const params = event.queryStringParameters;

  if (!validateTopLastParams(params)) {
    return handleFunctionReturn({
      statusCode: 400,
      body: { message: 'Invalid params.' }
    });
  }

  const s3 = new aws.S3({ apiVersion: '2006-03-01' });
  const targetUrl = `${config.CLIENT_URL}/chartGenerator?album=${params.album}&artist=${params.artist}&track=${params.track}&option=${params.option}`;

  let browser = null;
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.goto(targetUrl);
    await page.setViewport({ width: 750, height: 750 });

    const imagePath = `${params.user}/screenshot-${new Date().getTime()}.png`;

    const buffer = await page.screenshot();
    const { Location } = await s3
      .upload({
        ACL: 'public-read',
        Body: buffer,
        Bucket: BUCKET,
        ContentType: 'image/png',
        Key: imagePath
      })
      .promise();

    const response = handleFunctionReturn({
      statusCode: 200,
      body: { url: Location }
    });

    return response;
  } catch (error) {
    const response = handleFunctionReturn({ statusCode: 500, body: error });

    return response;
  } finally {
    if (browser !== null) await browser.close();
  }
};

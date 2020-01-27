const chromium = require('chrome-aws-lambda');

const getBrowser = async () => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  });

  return browser;
};

const getPage = async (browser, url, viewport = { width: 1280, height: 720 }) => {
  const page = await browser.newPage();

  await page.goto(url);
  await page.setViewport(viewport);

  return page;
};

module.exports = { getBrowser, getPage };

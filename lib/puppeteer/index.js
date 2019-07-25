const puppeteer = require('puppeteer-core');
const getChrome = require('./getChrome');

const getArtistImage = async artistUrl => {
  const chrome = await getChrome();
  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080
    });

    await page.goto(artistUrl);

    const result = await page.evaluate(() => {
      // eslint-disable-next-line no-undef
      const element = document.querySelector('.header-new-background-image');
      const { backgroundImage } = element.style;
      const imageUrl = backgroundImage.replace(/^url\("/g, '').replace(/"\)/g, '');

      return imageUrl;
    });

    await browser.close();
    setTimeout(() => chrome.instance.kill(), 0);

    return result;
  } catch (error) {
    await browser.close();
    setTimeout(() => chrome.instance.kill(), 0);

    return error;
  }
};

module.exports = { getArtistImage };

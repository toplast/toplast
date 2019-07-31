const { getBrowser, getPage } = require('./puppeteer-services');

const getArtistImage = async artistUrl => {
  let browser;
  try {
    browser = await getBrowser();

    const page = await getPage(browser, artistUrl);
    const result = await page.evaluate(() => {
      // eslint-disable-next-line no-undef
      const element = document.querySelector('.header-new-background-image');
      const { backgroundImage } = element.style;
      const imageUrl = backgroundImage.replace(/^url\("/g, '').replace(/"\)/g, '');

      return imageUrl;
    });

    return result;
  } catch (error) {
    return error;
  } finally {
    if (browser !== null) await browser.close();
  }
};

module.exports = { getArtistImage };

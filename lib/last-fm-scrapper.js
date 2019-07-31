const axios = require('axios');
const cheerio = require('cheerio');

const getArtistImage = async artistUrl => {
  const { data } = await axios(artistUrl);
  const element = cheerio('.header-new-background-image', data)[0];
  const imageUrl = element.attribs.content;

  return imageUrl;
};

module.exports = { getArtistImage };

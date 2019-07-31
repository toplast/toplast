const axios = require('axios');
const cheerio = require('cheerio');

const getArtistImage = async artistUrl => {
  const { data } = await axios(artistUrl);
  const element = cheerio('.header-new-background-image', data)[0];
  const imageUrl = element.attribs.content;

  return imageUrl;
};

const getTrackImage = async trackUrl => {
  const { data } = await axios(trackUrl);
  const element = cheerio('.cover-art', data)[0];

  if (!element)
    return 'https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png';

  const { children } = element;

  let img;
  children.forEach(child => {
    if (child.name === 'img') img = child;
  });

  if (img) return img.attribs.src;
  return 'https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png';
};

module.exports = { getArtistImage, getTrackImage };

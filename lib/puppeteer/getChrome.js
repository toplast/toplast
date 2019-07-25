const launchChrome = require('@serverless-chrome/lambda');
const request = require('axios');

const getChrome = async () => {
  const chrome = await launchChrome();

  const response = await request.get(`${chrome.url}/json/version`);
  const endpoint = response.data.webSocketDebuggerUrl;

  return {
    instance: chrome,
    endpoint
  };
};

module.exports = getChrome;

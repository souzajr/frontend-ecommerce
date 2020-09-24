require('dotenv').config();

module.exports = {
  env: {
    SITE_NAME: process.env.SITE_NAME,
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

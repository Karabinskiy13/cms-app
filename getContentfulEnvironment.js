/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_ENVIROMENT
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
};

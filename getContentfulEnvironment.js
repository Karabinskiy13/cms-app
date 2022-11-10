/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-9dKWzcOTDk_4RaQS4e0HslYq73KTdTSOKrb7wwADtJ8'
  });

  return contentfulClient.getSpace('jds8b94xttqh').then((space) => space.getEnvironment('master'));
};

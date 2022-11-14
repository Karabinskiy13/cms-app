/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const withLess = require('next-with-less');

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/jds8b94xttqh/**'
      }
    ]
  }
});

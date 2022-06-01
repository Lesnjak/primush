require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ua'],
    localeDetection: false,
  },
};

module.exports = withPlugins(
  [
    [nextTranslate],
    // Your other plugins here
  ],
  nextConfig
);

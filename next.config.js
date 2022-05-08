require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ua'],
    localeDetection: false,
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [nextTranslate],
    // Your other plugins here
  ],
  nextConfig
);

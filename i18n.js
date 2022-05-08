module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'ua'],
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}.${ns}.json`).then((m) => m.default),
};

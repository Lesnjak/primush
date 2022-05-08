module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'ar'],
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}.${ns}.json`).then((m) => m.default),
};

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nl-NL'],
  },
  localePath: path.resolve('./public/locales'),
};

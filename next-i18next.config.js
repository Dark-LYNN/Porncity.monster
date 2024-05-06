// @/next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nl-NL', 'tr-TR'],
    
  },
  localePath: path.resolve('./public/locales'),
  localeExtension: 'yaml', // YAML extension  
};

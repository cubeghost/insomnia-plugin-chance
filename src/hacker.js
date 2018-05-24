const faker = require('faker');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerHacker',
  displayName: 'Faker: Hacker',
  description: 'Generate a hacker string using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'phrase',
      type: 'enum',
      options: [
        { displayName: 'Abbreviation', value: 'abbreviation' },
        { displayName: 'Adjective', value: 'adjective' },
        { displayName: 'Noun', value: 'noun' },
        { displayName: 'Verb', value: 'verb' },
        { displayName: '-ing Verb', value: 'ingverb' },
        { displayName: 'Phrase', value: 'phrase' },
      ],
    },
    ARG_LOCALES
  ],
  run: (context, method, locale) => {
    faker.locale = locale;
    return faker.hacker[method]();
  }
};

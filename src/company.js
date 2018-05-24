const faker = require('faker');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerCompany',
  displayName: 'Faker: Company',
  description: 'Generate a business string using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'companyName',
      type: 'enum',
      options: [
        { displayName: 'Name', value: 'companyName' },
        { displayName: 'Suffix', value: 'companySuffix' },
        { displayName: 'Catch Phrase', value: 'catchPhrase' },
        { displayName: 'Catch Phrase Adjective', value: 'catchPhraseAdjective' },
        { displayName: 'Catch Phrase Descriptor', value: 'catchPhraseDescriptor' },
        { displayName: 'Catch Phrase Noun', value: 'catchPhraseNoun' },
        { displayName: 'Bullshit', value: 'bs' },
        { displayName: 'Bullshit Adjective', value: 'bsAdjective' },
        { displayName: 'Bullshit Buzzword', value: 'bsBuzz' },
        { displayName: 'Bullshit Noun', value: 'bsNoun' },
      ],
    },
    ARG_LOCALES
  ],
  run: (context, method, locale) => {
    faker.locale = locale;
    return faker.company[method]();
  }
};

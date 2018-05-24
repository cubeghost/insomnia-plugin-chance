const faker = require('faker');
const parseArguments = require('./arguments');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerLorem',
  displayName: 'Faker: Lorem Ipsum',
  description: 'Generate a lorem ipsum string using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'sentence',
      type: 'enum',
      options: [
        { displayName: 'Word', value: 'word' },
        { displayName: 'Words', value: 'words' },
        { displayName: 'Sentence', value: 'sentence' },
        { displayName: 'Slug', value: 'slug' },
        { displayName: 'Sentences', value: 'sentences' },
        { displayName: 'Paragraph', value: 'paragraph' },
        { displayName: 'Paragraphs', value: 'paragraphs' },
        { displayName: 'Text', value: 'text' },
        { displayName: 'Lines', value: 'lines' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for lorem ipsum functions',
      type: 'string',
      placeholder: '20',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.lorem[method](...parseArguments(args));
  }
};

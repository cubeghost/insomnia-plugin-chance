const faker = require('faker');
const coerce = require('tiny-coerce');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerDate',
  displayName: 'Faker: Date',
  description: 'Generate a date using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'recent',
      type: 'enum',
      options: [
        { displayName: 'Past', value: 'past' },
        { displayName: 'Future', value: 'future' },
        { displayName: 'Between', value: 'between' },
        { displayName: 'Recent', value: 'recent' },
        { displayName: 'Soon', value: 'soon' },
        { displayName: 'Month', value: 'month' },
        { displayName: 'Weekday', value: 'weekday' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for date functions',
      type: 'string',
      placeholder: '2000-01-01,2004-12-31',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;

    const date = faker.date[method](...args.split(',').map(coerce));

    if (date instanceof Date) {
      return date.toISOString();
    } else {
      return date;
    }
  }
};

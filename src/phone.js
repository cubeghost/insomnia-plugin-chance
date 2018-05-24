const faker = require('faker');
const parseArguments = require('./arguments');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerPhone',
  displayName: 'Faker: Phone',
  description: 'Generate a phone number using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'phoneNumber',
      type: 'enum',
      options: [
        { displayName: 'Phone Number', value: 'phoneNumber' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for phone number functions',
      type: 'string',
      placeholder: '###-###-#### x####',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.phone[method](...parseArguments(args));
  }
};

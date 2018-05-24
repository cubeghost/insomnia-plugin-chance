const faker = require('faker');
const coerce = require('tiny-coerce');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerName',
  displayName: 'Faker: Name',
  description: 'Generate a name using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'findName',
      type: 'enum',
      options: [
        { displayName: 'First Name', value: 'firstName' },
        { displayName: 'Last Name', value: 'lastName' },
        { displayName: 'Full Name', value: 'findName' },
        { displayName: 'Job Title', value: 'jobTitle' },
        { displayName: 'Prefix', value: 'prefix' },
        { displayName: 'Suffix', value: 'suffix' },
        { displayName: 'Title', value: 'title' },
        { displayName: 'Job Descriptor', value: 'jobDescriptor' },
        { displayName: 'Job Area', value: 'jobArea' },
        { displayName: 'Job Type', value: 'jobType' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for name functions',
      type: 'string',
      placeholder: '1',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.name[method](...args.split(',').map(coerce));
  }
};

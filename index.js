const faker = require('faker');
const { LOCALES, ARG_LOCALES } = require('./locales');

module.exports.templateTags = [
  {
    name: 'fakerTemplate',
    displayName: 'Faker: Template',
    description: 'Generate a value using a Faker.js template',
    args: [
      {
        displayName: 'Template',
        type: 'string',
        description: 'A template string to be passed into Faker.fake() (see https://github.com/marak/Faker.js/#fakerfake)',
        placeholder: '{{name.firstName}} {{name.lastName}}',
      },
      {
        displayName: 'Localization',
        defaultValue: 'en_US',
        type: 'enum',
        options: LOCALES,
      },
    ],
    run: (context, template, locale) => {
      faker.locale = locale;
      return faker.fake(template);
    }
  },
  {
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
      ARG_LOCALES
    ],
    run: (context, method, locale) => {
      faker.locale = locale;
      return faker.name[method]();
    }
  },
  {
    name: 'fakerInternet',
    displayName: 'Faker: Internet',
    description: 'Generate an internet-related string using Faker.js',
    args: [
      {
        displayName: 'Type',
        defaultValue: 'email',
        type: 'enum',
        options: [
          { displayName: 'Avatar', value: 'avatar' },
          { displayName: 'Email', value: 'email' },
          { displayName: 'Example Email', value: 'exampleEmail' },
          { displayName: 'Username', value: 'userName' },
          { displayName: 'Protocol', value: 'protocol' },
          { displayName: 'URL', value: 'url' },
          { displayName: 'Domain Name', value: 'domainName' },
          { displayName: 'Domain Suffix', value: 'domainSuffix' },
          { displayName: 'Domain Word', value: 'domainWord' },
          { displayName: 'IP', value: 'ip' },
          { displayName: 'IPv6', value: 'ipv6' },
          { displayName: 'User Agent', value: 'userAgent' },
          { displayName: 'Hex Color', value: 'color' },
          { displayName: 'Mac Address', value: 'mac' },
          { displayName: 'Password', value: 'password' },
        ],
      },
      ARG_LOCALES
    ],
    run: (context, method, locale) => {
      faker.locale = locale;
      return faker.internet[method]();
    }
  },
  {
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

      let date = faker.date[method](...args.split(','));

      if (date instanceof Date) {
        return date.toISOString();
      } else {
        return date;
      }
    }
  },
];

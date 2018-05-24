const faker = require('faker');
const coerce = require('tiny-coerce');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerInternet',
  displayName: 'Faker: Internet',
  description: 'Generate an internet string using Faker.js',
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
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for internet functions',
      type: 'string',
      placeholder: 'firstName,lastName,gmail.com',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.internet[method](...args.split(',').map(coerce));
  }
};

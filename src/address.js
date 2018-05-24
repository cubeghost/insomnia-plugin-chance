const faker = require('faker');
const parseArguments = require('./arguments');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerAddress',
  displayName: 'Faker: Address',
  description: 'Generate an address using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'streetAddress',
      type: 'enum',
      options: [
        { displayName: 'Zip Code', value: 'zipCode' },
        { displayName: 'City', value: 'city' },
        { displayName: 'City Prefix', value: 'cityPrefix' },
        { displayName: 'City Suffix', value: 'citySuffix' },
        { displayName: 'Street Name', value: 'streetName' },
        { displayName: 'Street Address', value: 'streetAddress' },
        { displayName: 'Street Suffix', value: 'streetSuffix' },
        { displayName: 'Street Prefix', value: 'streetPrefix' },
        { displayName: 'Secondary Address', value: 'secondaryAddress' },
        { displayName: 'County', value: 'county' },
        { displayName: 'Country', value: 'country' },
        { displayName: 'Country Code', value: 'countryCode' },
        { displayName: 'State', value: 'state' },
        { displayName: 'State Abbreviation', value: 'stateAbbr' },
        { displayName: 'Latitude', value: 'latitude' },
        { displayName: 'Longitude', value: 'longitude' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for address functions',
      type: 'string',
      placeholder: '#####-####',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.address[method](...parseArguments(args));
  }
};

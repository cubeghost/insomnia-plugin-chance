const faker = require('faker');
const { ARG_LOCALES } = require('./locales');

module.exports = {
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
    ARG_LOCALES,
  ],
  run: (context, template, locale) => {
    faker.locale = locale;
    return faker.fake(template);
  }
};

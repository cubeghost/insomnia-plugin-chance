const faker = require('faker');
const coerce = require('tiny-coerce');
const { ARG_LOCALES } = require('./locales');

module.exports = {
  name: 'fakerFinance',
  displayName: 'Faker: Finance',
  description: 'Generate a finance string using Faker.js',
  args: [
    {
      displayName: 'Type',
      defaultValue: 'currencyCode',
      type: 'enum',
      options: [
        { displayName: 'Account', value: 'account' },
        { displayName: 'Account Name', value: 'accountName' },
        { displayName: 'Mask', value: 'mask' },
        { displayName: 'Amount', value: 'amount' },
        { displayName: 'Transaction Type', value: 'transactionType' },
        { displayName: 'Currency Code', value: 'currencyCode' },
        { displayName: 'Currency Name', value: 'currencyName' },
        { displayName: 'Currency Symbol', value: 'currencySymbol' },
        { displayName: 'Bitcoin Address', value: 'bitcoinAddress' },
        { displayName: 'Ethereum Address', value: 'ethereumAddress' },
        { displayName: 'International Bank Account Number', value: 'iban' },
        { displayName: 'Business Identifier Code', value: 'bic' },
      ],
    },
    {
      displayName: 'Arguments',
      description: 'Comma-separated arguments for finance functions',
      type: 'string',
      placeholder: 'visa',
    },
    ARG_LOCALES
  ],
  run: (context, method, args, locale) => {
    faker.locale = locale;
    return faker.finance[method](...args.split(',').map(coerce));
  }
};

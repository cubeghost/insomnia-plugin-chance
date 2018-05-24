const fakerTemplate = require('./src/template');
const fakerName = require('./src/name');
const fakerInternet = require('./src/internet');
const fakerDate = require('./src/date');
const fakerAddress = require('./src/address');
const fakerFinance = require('./src/finance');

module.exports.templateTags = [
  fakerTemplate,
  fakerName,
  fakerInternet,
  fakerDate,
  fakerAddress,
  fakerFinance,
];

const fakerTemplate = require('./src/template');
const fakerName = require('./src/name');
const fakerInternet = require('./src/internet');
const fakerDate = require('./src/date');
const fakerAddress = require('./src/address');
const fakerFinance = require('./src/finance');
const fakerPhone = require('./src/phone');
const fakerLorem = require('./src/lorem');
const fakerHacker = require('./src/hacker');
const fakerCompany = require('./src/company');

module.exports.templateTags = [
  fakerTemplate,
  fakerName,
  fakerInternet,
  fakerDate,
  fakerAddress,
  fakerFinance,
  fakerPhone,
  fakerLorem,
  fakerHacker,
  fakerCompany,
];

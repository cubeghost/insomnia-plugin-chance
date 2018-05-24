const coerce = require('tiny-coerce');

module.exports = function parseArguments(string) {
  if (!string) {
    return [];
  }

  return string.split(',').map(coerce);
};

const assertEqual = require('./assertEqual');

const findKey = function (someObject, callback) {
  for (let key in someObject) {
    if (callback(someObject[key])) {
      return key;
    }
  }
};

module.exports = findKey;

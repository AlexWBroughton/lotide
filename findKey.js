const assertEqual = require('./assertEqual');

const findKey = function (someObject, callback) {
  for (let key in someObject) {
    if (callback(someObject[key])) {
      return key;
    }
  }
};

module.exports = findKey;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars ===2)); 
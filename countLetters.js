const assertEqual = require('./assertEqual');

const countLetters = function (countString) {
  const results = {};
  let noSpaceString = "";
  noSpaceString = countString.replace(/ /g, "");
  for (const letter of noSpaceString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
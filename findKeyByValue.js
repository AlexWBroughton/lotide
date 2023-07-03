const assertEqual = require('./assertEqual');

const findKeyByValue = function(someObject,objectValue){
  for (let key in someObject){
    if (someObject[key] === objectValue){
      return key;
    }
  }
};

module.exports = findKeyByValue;

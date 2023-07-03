const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  //same keys?
  let keyBool = true;
  
  for (let key in object1){
    if (!Array.isArray(object1[key])){
      if (!findKeyByValue(object2,object1[key])){
        keyBool = false;
      }
    }
    else {
      if (!eqArrays(object1[key],object2[key])){
        keyBool = false;
      }
    }
  }

  for (let key in object2){
    if (!Array.isArray(object2[key])){
      if (!findKeyByValue(object1,object2[key])){
        keyBool = false;
      }
    }
    else {
      if (!eqArrays(object2[key],object1[key])){
        keyBool = false;
      }
    }
  }
  return keyBool;
};

module.exports = eqObjects;


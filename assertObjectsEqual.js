const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const checkmark = "\u2713";
  const xmark = "\u274C";
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`${checkmark}${checkmark}${checkmark}  Assertion Passed: $${inspect(actual)} = ${inspect(expected)}`);
  }
  else {
    console.log(`${xmark}${xmark}${xmark} Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;

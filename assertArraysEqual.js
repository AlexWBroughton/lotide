const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  const checkmark = "\u2713";
  const xmark = "\u274C";
  if (eqArrays(actual, expected)) {
    console.log(`${checkmark}${checkmark}${checkmark}  Assertion Passed: ${actual} = ${expected}`);
  }
  else {
    console.log(`${xmark}${xmark}${xmark} Assertion Failed: ${actual} != ${expected}`);
  }
};

module.exports = assertArraysEqual;
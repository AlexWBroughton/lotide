const assertEqual = function(actual, expected) {
  const checkmark = "\u2713";
  const xmark = "\u274C";
  if (actual === expected) {
    console.log(`${checkmark}${checkmark}${checkmark}  Assertion Passed: ${actual} = ${expected}`);
  }
  else {
    console.log(`${xmark}${xmark}${xmark} Assertion Failed: ${actual} != ${expected}`);
  }
};  

module.exports = assertEqual;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  }
  else {
    return false;
  }
};

const eqArrays = function (arr1, arr2) {
  let arrBool = false;
  if (arr1.length === arr2.length) {
    for (const index in arr1) {
      arrBool = assertEqual(arr1[index], arr2[index]);
      if (arrBool === false) {
        return arrBool;
      }
    }
  }
  return arrBool;
};

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



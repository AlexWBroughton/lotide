const assertEqual = function(actual, expected) {
  const checkmark = "\u2713";
  const xmark = "\u274C";
  if (actual === expected) {
    console.log(`${checkmark}${checkmark}${checkmark}  Assertion Passed: ${actual} = ${expected}`);
    return true;
  }
  else {
    console.log(`${xmark}${xmark}${xmark} Assertion Failed: ${actual} != ${expected}`);
    return false;
  }
};  

const eqArrays = function (arr1, arr2) {
  let arrBool = false;
  if (arr1.length === arr2.length){
    for (const index in arr1){
      arrBool = assertEqual(arr1[index],arr2[index]);
      if (arrBool === false){
        return arrBool;
      }
    }
  }
  return arrBool;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false*/
console.log(eqArrays(["1", "2"], ["1", "2", 3]));
console.log(eqArrays([], ["1", "2", 3]));
console.log(eqArrays([0, 1], ["0", "1"]));


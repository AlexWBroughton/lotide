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




//Code works first try no need for array testing functions
//unless the complexity evolves further.

const middle = function (arr) {
  let middleArray = [];
  let middle = 0;
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middle = Math.floor(arr.length/2);
      middleArray.push(arr[middle-1]);
      middleArray.push(arr[middle]);
    }
    else {  
      middle = Math.floor(arr.length/2);
      middleArray = arr[middle];
    }
  }
  return middleArray;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");




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


module.exports = middle




console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
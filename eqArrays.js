assertEqual = require("./assertEqual");

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

console.log(eqArrays([1,2,3],[1,2,3]));
module.exports = eqArrays;


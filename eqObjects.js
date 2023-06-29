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

const findKeyByValue = function(someObject,objectValue){
  for (let key in someObject){
    if (someObject[key] === objectValue){
      return key;
    }
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



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),true); // => false
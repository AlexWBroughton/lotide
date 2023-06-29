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


const findKeyByValue = function(someObject,objectValue){
  for (let key in someObject){
    if (someObject[key] === objectValue){
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
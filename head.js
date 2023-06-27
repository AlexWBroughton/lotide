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

const head = function(arr){
  if (arr.length === 1)
  {
    if (isNaN(arr)){
      return String(arr);
    }
    else{
      return Number(arr);
    }
  }
  else if (arr.length > 1){
    return arr[0];
  }
};


assertEqual(head([]),"uyo");
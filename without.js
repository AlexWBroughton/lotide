const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  }
  else {
    return false;
  }
};  

const eqArrays = function (arr1, arr2) {
  let arrBool = false;
  for (const index in arr1){
    for (const jndex in arr2){
      arrBool = assertEqual(arr1[index],arr2[jndex]);
      if (arrBool){
        return arrBool;
      }
    }
  }
  return arrBool;
};



const without = function(source,itemsToRemove) {
  let withoutArray = source;
  if (eqArrays(source,itemsToRemove)) {
    for (const index in source){
      for (const jndex in itemsToRemove){
        if (assertEqual(source[index],itemsToRemove[jndex])){
          if (index == 0){
            withoutArray.shift();
          }
          else{
            withoutArray.splice(index,index);
          }
        }
      }
    }
  }
  console.log(withoutArray);
  return withoutArray;
};
  

//TESTING


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"], ["1", "2", "3"]); //[]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); //[hello,world]


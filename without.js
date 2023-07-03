const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


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
  
module.exports = without;

//TESTING


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"], ["1", "2", "3"]); //[]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); //[hello,world]


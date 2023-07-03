const assertEqual = require('./assertEqual');

const tail = function(arr){
  
  if (arr.length >= 1){
    return arr.pop();
  }
  else{
    return arr;
  }
}


module.exports = tail;


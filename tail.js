const assertEqual = require('./assertEqual');

const tail = function(arr){
  
  if (arr.length > 1){
    return arr.slice(1);
  }
  else{
    return arr;
  }
}

module.exports = tail;


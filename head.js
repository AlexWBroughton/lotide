const assertEqual = require('./assertEqual.js');

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

module.exports = head;

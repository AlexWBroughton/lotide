const assertEqual = require('./assertEqual.js');

const head = function(arr){
  if (arr.length === 1)
  {
    if (typeof(arr[0] === 'string')){
      return String(arr[0]);
    }
    else{
      return Number(arr[0]);
    }
  }
  else if (arr.length > 1){
    return arr[0];
  }
};

module.exports = head;

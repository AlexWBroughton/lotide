const middle = require("../middle");
const assert = require('chai').assert;



describe("#head", () => {
  it("returns the middle of element of an array if the length of the array is odd", () => {
    assert.deepEqual(middle([1, 2, 3,4,5,6,7]), 4);
  });
  it("returns the middle two elements of an array if the length of the array is even", () => { 
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });
});



console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
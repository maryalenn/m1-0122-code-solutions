/* exported reverse */

// Create a function with one parameter, an Array, that returns the elements of the array in reverse order.
// Within the function, define a new variable, newArray, which will hold the results of the array in reverse order.In order to populate newArray, create a for loop which will start at the Array index of array.length - 1 and decrement the loop counter down to 0. Each loop will push the array element at the counter index.

function reverse (array) {
  var newArray = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    newArray.push(array[i]);
  };

  return newArray;
};

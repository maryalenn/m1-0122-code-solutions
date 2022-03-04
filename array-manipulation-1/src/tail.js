/* exported tail */

// Create a new function with one parameter, an array, that returns all but the first element in the array.
// Create a loop that starts at index of 1 instead of 0 that pushes all items into a new array. Return the new array.

function tail (array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i])
  };
  return newArray;

};

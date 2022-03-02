/* exported initial */

// Create a new function with one parameter, an Array, that returns all of the elements of the array except the last element. Within the function, create a new variable, newArray, which holds the updated array. Create a loop which starts at index 0, and stops at the index of array.length minus one. Push the results of the loop into the newArray variable. Return the newArray variable.

function initial (array) {
  var newArray = [];
  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i]);
  };
  return newArray;
};

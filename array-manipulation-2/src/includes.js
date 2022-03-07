/* exported includes */

// Define a new function 'includes' with two parameters 'array' and 'value'
// Create a for loop to loop over the length of the array
// On each iteration of the loop, check if the value parameter is equal to the array at the index of i
// Return either true of false


function includes (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value == array[i])
    return true;
  }
  return false;
};

/* exported dropRight */

// Define a new function 'dropRight' with two parameters 'array' and 'count'
// Declare a new variable with the initial value set to an empty array
// Create a for loop to loop over the array for the array.length minus the value of the 'count' parameter
// On each iteration of the loop push the array at index i to the newArray variable
// Return the newArray variable


function dropRight (array, count) {
  var newArray =[];
  for(var i = 0; i < (array.length-count); i++){
    newArray.push(array[i])
  };
  return newArray;
};

/* exported equal */

// Define a new function 'equal' with two parameters: 'first' - an array; and 'second' - an array
// Create a for loop to iteration through each element of the first array and compare to each element in the second array
// If all element of both arrays match, and the length of both arrays are equal, return true, else return false

function equal (first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i] && first.length===second.length) {} else return false;
  }
  return true;
};

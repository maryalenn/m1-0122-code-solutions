/* exported flatten */
// Define a new function 'flatten' with one parameter 'array'
// Declare a new variable, an empty array named 'flattened'
// Create a new for loop to iterate over each element in the array
// On each loop, create an if statement to check if the element at array[i] is an array
// If true, create another loop to iterate over each element of the nested array and push the value of the element at the nested array index to the 'flattened' array.
// if false, push the value of the element at the loop index to the 'flattened' array
// return 'flattened'



function flatten (array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])===false) {
      flattened.push(array[i]);
    } else if (Array.isArray(array[i])===true) {
     for (var b = 0; b < array[i].length; b++) {
        flattened.push(array[i][b]);
      }
    }
    // console.log('flattened: ', flattened, 'full array: ', array);
  }
return flattened;

};

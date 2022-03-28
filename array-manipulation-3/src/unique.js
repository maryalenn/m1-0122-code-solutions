/* exported unique */
// Define a new function 'unique' with one parameter 'array' (an array)
// Declare a new array 'uniqueArray' set to an empty array
// Create a for loop to iterate over each element of the 'array'
// Push the element at index to the uniqueArray
// Create another for loop to iterate over the uniqueArray



function unique (array) {
  var uniqueArray = [];
  array.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  )
// console.log('original array', array, 'uniqueArray', uniqueArray);
return uniqueArray;
};


// Original plan did not work - Scrap and start over
// Define a new function 'unique' with one parameter 'array
// Declare a new variable 'uniqueArray', an empty array
// Use the forEach method of the array object with one argument, element
// Use an if statement - if the 'uniqueArray' array does not include the element, then push the element to the 'uniqueArray'
// Return uniqueArray

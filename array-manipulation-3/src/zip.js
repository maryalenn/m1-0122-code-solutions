/* exported zip */

// Define a new function 'zip' with two parameters 'first' (an array) and 'second' (an array)
// Declare a new variable 'zipped' assigned to an empty array
// Determine which of the two arrays is shorter
// Create a for loop to iterate over the shorter of the loops
// On each loop, push an array of first[i], second[i].
// Return zipped


function zip (first,second) {
  var zipped = [];
  if (first.length >= second.length) {
    for (var i = 0; i < second.length; i++) {
      zipped.push([first[i],second[i]])
    }
  } else {
    for (var i = 0; i < first.length; i++) {
      zipped.push([first[i], second[i]])
  };
};
  // console.log(zipped);
  return zipped;
}

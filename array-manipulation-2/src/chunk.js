/* exported chunk */



// 1. Define a new function "chunk"
//    parameters: array, size (a number)
//    goal - break the array into multiple subarrays - each subarray should contain the number of elements, as determined by the size parameter.
// 2. Define a new variable - 'arrayChunk'
// 3. Create a for loop to iterate over the array for as long as the index is less than the length of the array.
//    Each loop to be incremented by the index added to size (i += size)
//   On each pass, create a new variable using the slice method (array.slice(i, i+size))
//   Push the results of the chunk variable to the arrayChunk variable (arrayChunk.push(chunk))
// 4. Return the arrayChunk variable


function chunk(array, size) {
  var arrayChunk = [];
  for (var i=0; i < array.length; i += size) {
    var chunk = array.slice(i, i+size)
    arrayChunk.push(chunk);
  }
  return arrayChunk;
};

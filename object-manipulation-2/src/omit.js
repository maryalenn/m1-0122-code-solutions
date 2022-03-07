/* exported omit */

// Define a new function 'omit' with two parameters, 'source' (object), and 'keys' (array)
// Define a new variable set to an empty object.
// Create a for...in loop to loop over the source object
// On each iteration add the source at key to the omittedPicks object
// Within the loop, create a for loop to loop over the keys array
// Check the key array at the index of i if it is a match to the source object at key.
// Use the delete method to remove an object property from omittedPicks when it is a match
// Return omittedPicks




function omit(source, keys) {
  var omittedPicks = {};
  for (key in source) {
    omittedPicks[key] = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key)
      delete omittedPicks[keys[i]];
    }
  }

  return omittedPicks;
};

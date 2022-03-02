/* exported capitalize */

// Create a function, with one parameter, a string ('word'), that will capitalize the first character of the string parameter. Use the toUpperCase() method to convert the first character of the word parameter to uppercase. Return the original word with the first character capitalized.

function capitalize (word) {
  var capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalized;
};

// 1. Define a new function called capitalize with a single parameter ('word')
//    Objective = capitalize the first letter of the word parameter.
// 2. Within the function, declare a new variable 'capitalized'
//     capitalized = Use the toUpperCase method, targeting the value of word at the index of 0, concatenated to the slice method of the word object at the index of 0, set toLowerCase.
// 3. Return the value of the 'capitalized' variable.

/* exported getWords */

// 1. Create a function called getWords
//     with a single parameter, a string ('string')
//     Objective: Return each word in the string as an element in an Array.
// 2. Within the function, assign an empty array to a new variable called 'words'
// 3. Create an if statement that tests if the string is not equal to '', then use the split method of the string object to add each word of the string, identified with a ' ', into the 'words' array.
// 4. Return the words variable.

function getWords(string) {
  var words = [];
  if (string !='') { var words = string.split(' ')};
  return words;
};

/* exported reverseWord */

// 1. Create a new Function called reverseWord
//       one parameter, a string ('word')
//   Objective of function = return the characters of the 'word' parameter in reverse ondragover.
// 2. Create a new variable, 'reversed' with value set to an empty string.
// 3. Create a for loop, starting at the end of the index of the 'word' string. (word.length-1)
//     On each iteration of the loop:
//       Test that the index is greater than or equal to zero
//       Decrement the index counter by 1
//       Add the character of the word the index to the 'reversed' variable
// 4. Return the results of the 'reversed' variable.

function reverseWord (word) {
  var reversed ='';
  for (var i = (word.length-1); i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;

};

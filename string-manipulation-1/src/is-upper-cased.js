/* exported isUpperCased */

// Create a function with one parameter, a String('word') which will return a true of false value indicating if all of the characters in a word are uppercased. Within the function create a loop that evaluates each character. If any character if lowercase, the function will return false and loop will end. If loop completes, then will return true.

function isUpperCased (word) {
  for (var i = 0; i < word.length; i++) {
   if (word[i]==word[i].toUpperCase()) {} else return false;
  }
    return true;
};


// 1. Define a new function called isUpperCased with one parameter ('word')
//     Objective = Return true if all characters of the 'word' parameter are uppercase
// 2. Create a loop which will loop over ever letter of the 'word' string.
//     The loop will start at an index of 0, compare if the index is less than the length of 'word', and increase the index counter. On each iteration, it will check if word at index is equal to uppercase word at index (using the toUpperCase method). If true, will contine with loop, if false, return false to end the loop.
// 3. If loop completes without returning false, then return true.

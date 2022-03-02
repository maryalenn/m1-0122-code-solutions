/* exported isLowerCased */
// Create a function called isLowerCased with one parameter, a string ('word'). The objective of the function is to return a boolean true or false indicating if all characters within the 'word' parameter are lowercased.
// Within the function create a for loop to loop within each character of the string, use an if statement to check if the character at indext is equal to the character at index toLowerCase(). If any are false, the loop will return false and exit. If loop completes, then return true.

function isLowerCased (word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i]==word[i].toLowerCase()) {} else {return false}
  }
  return true;

};


// 1. Define a new function called isLowerCased with one parameter, a string ('word')
//    Objective = Return true if all characters of 'word' is lowercase

// 2. Create a loop which will loop over ever letter of the 'word' string.
//     The loop will start at an index of 0, compare if the index is less than the length of 'word', and increase the index counter. On each iteration, it will check if word at index is equal to lowercase word at index (using the toLowerCase method). If true, will contine with loop, if false, return false to end the loop.
// 3. If loop completes without returning false, then return true.

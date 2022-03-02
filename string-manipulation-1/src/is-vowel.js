/* exported isVowel */

// 1. Create a new function called isVowel with a single parameter, a string ('char')
//     Objective = return true if 'char' is a vowel, otherwise, return false.
// 2. Create a new array of strings called 'vowels'
// 3. Create a for loop to check each element in the vowels array
//     On each iteration of the loop, check if the element of the array at the current index is equal to the parameter value, or if the element of the array is equal to the uppercase value of the current index. If value is true, then return true, which will stop the loop.
// 4. Return false if all iterations of the loop complete without returning true.


function isVowel (char) {
  var vowels = ['a','e','i','o','u'];
  for (var i = 0; i < vowels.length; i++) {
    if ((char == vowels[i]) || char == (vowels[i].toUpperCase())) {return true}
  }
  return false;
};

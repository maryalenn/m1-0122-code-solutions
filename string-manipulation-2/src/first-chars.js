/* exported firstChars */

// 1. Define a new function - 'firstChars'
//     Parameters - (length, string)
// 2. Return of the function is the first 'length' number of characters of 'string'
// 3. Create a new variable called firstCharacters which will hold the new string
// 4. Create a for loop to pass over each character in the string parameter
//    Number of iterations = length Parameters
//    Create a condition that the string at [i] is not falsey (if falsey, return firstCharacters)
// 5. Each loop iteration will add the character at the [i] index of the string parameter to the firstCharacter variable.

function firstChars (length, string) {
  var firstCharacters = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) { firstCharacters += string[i];}
    else return firstCharacters;
  };
  return firstCharacters;
};

/* exported lastChars */

// 1. Create a new function 'lastChars'
//     Parameters - length (indicate the length of characters, starting from the end of the string)
//                  string
// 2. Define a new variable to hold the last characters of the string
// 3. Define a startIndex variable
//     Create an if statement so if the length of the string is less than the 'length' parameter, then the starting index will be 0 (insted of negative mumber, which will make the return falsey); otherwise, the startIndex will be the length of the string minus the value of the length parameter.
// 4. Create a for loop
//       starting index (i) variable set to the value of startIndex
//       loop iterations is until the index variable is less than the length of the string.
// 5. On each loop, as long as the value of 'i' is not false, add the character of the string at the index of 'i' to the lastCharacters variable. If 'i' is falsey, return the lastCharacters variable.
// 6. Return the lastCharacters variables






function lastChars(length, string) {
  var lastCharacters = '';
  var startIndex
  if(string.length < length) {startIndex =0} else {startIndex = string.length-length};

  for (var i = startIndex; i < string.length; i++) {
    if (string[i]) { lastCharacters += string[i]; }
  };
  return lastCharacters;
};

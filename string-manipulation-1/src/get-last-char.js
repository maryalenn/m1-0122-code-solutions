/* exported getLastChar */

// Create a function called getLastChar, with one parameter, a string ('string'), and the objective to return the last character in the string parameter. Define a new variable, lastCharacter, which will be set to the last character of the string paramter. The method to obtain the lastCharacter will be charAt.string(string.length-1).

function getLastChar (string) {
  var lastCharacter = string.charAt(string.length - 1);
  return lastCharacter;
};

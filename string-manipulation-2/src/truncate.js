/* exported truncate */

// function truncate(length, string) {
//   var newString = '';
//   for (var i = 0; i < length; i++) {
//     //run loop as long as the loop iteration is less than the length parameter
//     if (string.length >= length)
//     //if the number of character in the string is greater than or equal to the length parameter
//     {
//       newString += string[i];
//       //add the character at the string index to the newString Variable
//     } else { newString = string }
//     //if the length of the string is less than the length parameter, just return the entire string to the newString variable
//   };
//   newString += '...';
//   //concatenate '....' to the newString variable
//   return newString;
//   //return the final output of the newString variable
// };



function truncate (length, string) {
  var newString = '';
  for (var i=0; i< length; i++) {
    if (string.length >= length) {
      newString += string[i];} else {newString = string}
  };
  newString += '...';
  return newString;
};

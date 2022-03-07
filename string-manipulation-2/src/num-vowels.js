/* exported numVowels */

// function numVowels (string) {
//   var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   var vowelCount = 0;
//   for (var i = 0; i < string.length; i++) {
//     // console.log('string[i]: ', string[i]);
//     if (vowels.includes(string[i])) {
//       vowelCount = vowelCount+1;
//       // console.log('string: ',string);
//       // console.log('vowelCount:', vowelCount);
//     }
//   }
//     return vowelCount;
// };



function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
};

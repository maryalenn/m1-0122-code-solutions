/* exported addSuffixToAll */

function addSuffixToAll (words, suffix) {
  wordsWithSuffix = [];
  for (var i = 0; i < words.length; i++) {
    wordsWithSuffix.push(words[i] + suffix);
  };
  return wordsWithSuffix;
};

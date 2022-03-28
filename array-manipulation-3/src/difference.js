/* exported difference */

function difference(first, second) {
  var uniqueArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first[i] != second[i] && !second.includes(first[i])) {
      uniqueArray.push(first[i]);
    }
  }
  for (var b = 0; b < second.length; b++) {
    if (second[b] != first[b] && (!first.includes(second[b])) ) {
      uniqueArray.push(second[b]);
    }
  };

  return uniqueArray;
};

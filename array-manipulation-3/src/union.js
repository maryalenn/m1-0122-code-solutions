/* exported union */

function union (first, second) {
  var unique = [];
  for (var i = 0; i < first.length; i++) {
    if (!unique.includes(first[i])) {
      unique.push(first[i])
     }
    }
  for (var b = 0; b < second.length; b++) {
    if (!unique.includes(second[b])) {
      unique.push(second[b]);
  }
  }
  return unique;
};

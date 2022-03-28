/* exported intersection */


function intersection (first, second) {
  var unique = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      unique.push(first[i])
    }
  }
  for (var b = 0; b < second.length; b++) {
    if (first.includes(second[b]) && !unique.includes(second[b])) {
      unique.push(second[b]);
    }
  }
  return unique;
};

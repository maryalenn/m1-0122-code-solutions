/* exported swapChars */


function swapChars (firstIndex, secondIndex, string) {
  var swapped = '';
  for (var i = 0; i < string.length; i++) {
    if (firstIndex === i) {swapped += string[secondIndex]} else
    if (secondIndex === i) {swapped += string[firstIndex]} else
    { swapped += string[i];}
  };
  return swapped;
};

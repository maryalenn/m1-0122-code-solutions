/* exported filterOutStrings */

function filterOutStrings (values) {
  valuesNoStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] != 'string') {
      valuesNoStrings.push(values[i])
    };
    // console.log(valuesNoStrings);
  }
  return valuesNoStrings;
};

/* exported filterOutNulls */
function filterOutNulls (values) {
  value = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      value.push(values[i]);
      };
    }
    return value;
  };

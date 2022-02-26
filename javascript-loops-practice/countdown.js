/* exported countdown */
function countdown(number) {
  var values = [];
  for(var i = number; i >= 0; i-- ) {
    values.push(i)
  };
  return values;
};

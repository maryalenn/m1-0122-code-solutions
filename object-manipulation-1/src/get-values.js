/* exported getValues */

function getValues (object) {
  values = [];
  for (value in object) {
    values.push(object[value]);
  }
  return values;

};

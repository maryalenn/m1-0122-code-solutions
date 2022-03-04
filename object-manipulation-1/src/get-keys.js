/* exported getKeys */

function getKeys (object) {
  var getKeys = [];
  for (key in object) {
    getKeys.push(key)
  };
  return getKeys;

};

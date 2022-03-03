/* exported toObject */

function toObject (keyValuePair) {
  var key = keyValuePair[0] ;
  var value = keyValuePair[1];
  var pair = {}
  pair[key] = value;
  // console.log(key, value, pair);
  return pair;
};

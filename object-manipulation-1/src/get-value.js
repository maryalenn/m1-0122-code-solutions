/* exported getValue */

// 1. Define a new function, getValue,  with two parameters:
//     'object' - any javascript Object
//     'key' - a javascript string
//     Objective: return the value of the object found at the key property.
// 2. Within the function, declare a new variable 'getValue'
//    The object parameter at the index of key will be returned to the getValue variable.
// 3. Return the getValue variable.


function getValue (object, key) {
  var getValue = object[key];
  return getValue;
};

/* exported invert */

// // Define a function invert with one parameter 'source' which will hold on object with key:value pairs
//       function invert (source) {}
// Declare two new variables to hold the 'source' keys and values as an array
//       var keys = [];
//       var values = [];
// Create a for...in loop to loop over the source object and pass in the associated keys and values into the variables
//       for (key in source)
            // keys.push(key);
            // values.push(source[key]);
// Declare a new variable 'inverse' with the value set to an object
            // var inverse = {};
// Create a for loop to run over the length of the keys array
            // for (var i=0; i>keys.length; i++) {}
// On each loop iteration, add a new key:value pair with key=values and value=keys
// Return inverse




function invert (source) {
  var keys = [];
  var values = [];

  for (key in source) {
    keys.push(key)
    values.push(source[key]);
  }
  var inverse = {};
  for (var i = 0; i < keys.length; i++)
 { inverse[values[i]] = keys[i];}
return inverse;
};

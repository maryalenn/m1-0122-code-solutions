/* exported defaults */
// Define a new function 'defaults' with two parameters, 'target' (an object) and 'source' (an object)
        // function defaults (target, source) {};
// Create a for...in loop to loop over the target object
      // for (key in source) {}
// Declare a new variable 'result' to hold the true/false return of if the target object has the same property of 'key' in the current loop iteration.
      // var result = target.hasOwnProperty(key);
// Create an if statement that if the result is equal to false, then add the source at the key property to the target object.
      // if (result === false) {target[key]=source[key]}


function defaults (target, source) {
  for (key in source) {
    var result = target.hasOwnProperty(key);
    if (result === false) {
      target[key]=source[key];
    }
  }
};

/* exported pick */


// declare a function 'pick' with two parameters - source (object), keys (array)
//     function pick (source, keys)
// declare a new variable 'selectedPicks' with an empty object
//     var selectedPicks = {};
// create a for...in loop to loop over the 'source' object
//     for (key in source)
// within the for...in loop create a for loop to loop over the 'keys' array
//     for (var i = 0; i < keys.length; i++)
// within the for loop, create a conditional statement to check if the value of keys at the index of 'i' is equal to the 'key' in the for...in loop. Also a conditional to check if the value of source at the index of key is not undefined
//     if (keys[i]===key && source[key] !== undefined)
// if true, add source at the index of key to the selectedPicks variable at the index of key
//   selectedPicks[key]=source[key]
// return the selectedPicks object
//   return selectedPicks;





function pick (source, keys) {
  var selectedPicks = {};
  for (key in source){
    for (var i= 0; i < keys.length; i++) {
      if (keys[i]===key && source[key] !==undefined) {
        selectedPicks[key]=source[key];
      }
    }
  }
  return selectedPicks;
};

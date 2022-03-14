/* exported drop */

function drop (array, count) {
  var newArray = [];
  for (var i = (count); i <= (array.length-1); i++)
    {newArray.push(array[i])
    // console.log (i); //Check the loop is running correctly
    // console.log(array[i]); //Check what value is being returned on this iteration
  };
  // console.log(newArray); //Check the newArray
  return newArray;
};

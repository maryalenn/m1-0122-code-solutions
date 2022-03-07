/* exported take */

function take (array, count) {
  takeArray = [];
  for (var i = 0; i < count; i++) {
    if (array[i] != null) { takeArray.push(array[i]);}
    // console.log(i); //Check loop is running
    // console.log(array[i]) //Check the return of each loop iteration
  }
  return takeArray;
};

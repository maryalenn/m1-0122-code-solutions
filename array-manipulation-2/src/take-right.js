/* exported takeRight */


function takeRight(array, count) {
  var newArray = [];
  if (array.length-count >= 1) {
    for (var i = (array.length - count); i < array.length; i++) {
      newArray.push(array[i]);
      // console.log('current index', i);
      // console.log('newArray', newArray);
    }

    } else {
      for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        // console.log('current index', i);
        // console.log('newArray', newArray);
    }
  };

  return newArray;
};

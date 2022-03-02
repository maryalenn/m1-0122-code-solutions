/* exported compact */

// Create a new function called compact with one parameter, an Array. The purpose of the function will be to return a new array. In this new array, it will:
//   Omit 'false'
//   Omit 'null'
//   Omit 'NaN'
//   Omit 0 and -0
//   Omit undefined
//   Omit empty Strings
//   Maintain the order of truthy statements.

//   To accomplish:
//   create a new variable newArray = []
//   create a loop to evaluate each element in the array.
//   Create a series of if else if statements to check if the element value is one of the omitted items.
//   If the element is truthy and not one of the omitted items then push the element into the newArray.
//   Return newArray

// function compact (array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (
//         (array[i] != false)
//         && (typeof(array[i]) != 'null')
//         && (isNaN(array[i]) != true)
//         && (array[i] != 0)
//         && (array[i] != -0)
//         && (typeof(array[i]) != 'undefined')
//         && (array[i] != " ")
//       )
//     {
//       newArray.push(array[i]);
//       console.log('original array: ',array);
//       console.log(array[i]);
//       console.log('newArray: ', newArray)
//     }

//   };
//   return newArray;
// };

function compact (array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {newArray.push(array[i])}
  }

  return newArray;
};

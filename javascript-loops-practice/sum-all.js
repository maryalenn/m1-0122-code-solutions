/* exported sumAll */
//ORIGINAL SOLUTION WRITTEN AS FOR..IN LOOP
// function sumAll(numbers) {
//   var values = 0;
//   for (value in numbers)
//    {values = values + numbers[value]};
//   return values;
// };

//SOLUTION REWRITTEN AS FOR LOOP
function sumAll(numbers) {
  var values = 0;
  for (var i = 0; i < numbers.length; i++) {
    values += numbers[i] };
  return values;
};

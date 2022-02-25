/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen () {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <=10) {
    numbers.push(currentNumber);
    currentNumber++;
  };
  return numbers;
};

function getEvenNumbersToTwenty () {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <=20) {
    evenNumbers.push(currentNumber);
    currentNumber= currentNumber+2;
  };
  return evenNumbers;
};

function repeatWord (word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times){
    repeated += word;
    count++;
  };
  return repeated;
};

function logEachCharacter (string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  };
};

function doubleAll (numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i]+numbers[i]);
  };
  return doubled;
};

function getKeys (object) {
  var keys = [];
  for (key in object) {
    keys.push(key);
    // console.log(key);
  };
  return keys;
};

function getValues(object) {
  var values = [];
  for (value in object) {
    values.push(object[value]);
    // console.log(object[value]);
  };
  return values;
};
/////////////////////////////////////////
//TESTING OBJECTS
var car = {
  make: 'Ford',
  model: 'Mustang',
  color: 'red',
  year: '1966'
}

var pet = {
  type: 'cat',
  sex: 'female',
  name: 'Polly',
}

var shoe = {
  brand: 'Nike',
  type: 'Running',
  size: '7W',
  color: 'grey',
  gender: 'Womens',
  model: 'Pegasus',
}

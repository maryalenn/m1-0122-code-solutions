//1.
function convertMinutesToSeconds (minutes) {
  var seconds = minutes * 60;
  return seconds;
};

var totalSeconds = convertMinutesToSeconds(5);
console.log('the value of totalSeconds: ', totalSeconds);

//2.
function greet (name) {
  var customGreeting = "Hey, " + name;
  return customGreeting;
};

var greetBeavis = greet ('Beavis');
console.log('the value of greetBeavis: ',greetBeavis);

//3.
function getArea(width,height) {
  var area = width * height;
  return area;
};

var calculatedArea = getArea(17,42);
console.log('the value of calculatedArea: ',calculatedArea);

//4.
function getFirstName(person){
  return person.firstName;
};

var personFirstName = getFirstName({firstName:'LeLouche', lastName:'Lamperouge'})
console.log('the value of personFirstName: ',personFirstName);

//5.
function getLastElement(array){
  var lastElement = array[array.length - 1];
  return lastElement;
};

var propaneLastElement = getLastElement(['propane','and','propane','accesories'])
console.log('the value of propaneLastElement: ',propaneLastElement);

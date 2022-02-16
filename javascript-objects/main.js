var student = {
  firstName: "Marya",
  lastName: "Chuong",
  age: 42,
};

var fullName = student.firstName + " " + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = "Restaurant Owner";

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: "Ford",
  model: "Mustang",
  year: "1966",
};

vehicle.color = "red";
vehicle['isConvertable'] = false;
console.log('value of the vehicle object: ', vehicle);

var pet = {
  name: "Polly",
  type: "Cat",
};

delete pet.name;
delete pet.type;

console.log('value of the pet object: ', pet);

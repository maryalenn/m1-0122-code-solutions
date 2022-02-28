/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

//1. isUnderFive(number)
  function isUnderFive (number){
   if (number < 5){
    result = true;
   }
   else {
     result = false;
   }
   return result;
   };
  // isUnderFive();
  // console.log('is 3 under Five ',isUnderFive(3));


  //2. isEven(number)
  function isEven (number) {
    if (number % 2 == 0 ){
      result = true;
    }
    else {
      result = false
    }
    return result;
  };
  // isEven();
  // console.log("Is 505 Even? ",isEven(505));

//3. startsWithJ(string)
  function startsWithJ (string) {
    if (string[0]==='J') {return true} else {return false};
  };

//4. isOldEnoughToDrink(person)
  function isOldEnoughToDrink (person) {
    if (person.age >= 21) {return true} else {return false};

  };

//5. isOldEnoughToDrive(person)
  function isOldEnoughToDrive (person) {
    if (person.age >= 16) {return true} else {return false};
  };

  //6. isOldEnoughToDrinkAndDrive(person)
  function isOldEnoughToDrinkAndDrive (person) {
    if ((person.age >= 16) && (person.age >= 21)) { return false} else {return false};

  };

//   var homer = {
//     name: 'Homer Jay Simpson',
//     age: 39
//   };
// console.log("Is Homer Old Enough to Drink? ",isOldEnoughToDrink(homer));
// console.log("Is Homer Old Enough to Drive? ", isOldEnoughToDrive(homer));
// console.log("Is Homer Old Enough to Drink and Drive? ",isOldEnoughToDrinkAndDrive(homer));

  //7. categorizeAcidity(pH)
  function categorizeAcidity (pH) {
    if (pH === 7) {return "neutral"}
    else if ((pH >= 0) && (pH < 7) ) {return "acid"}
    else if ((pH <=14) && (pH > 7)) {return "base"}
    else {return "invalid pH level"};
  };

// console.log("Acidity -1: ", categorizeAcidity(-1));
// console.log("Acidity 14.00001: ", categorizeAcidity(14.00001));
// console.log("Acidity 7: ", categorizeAcidity(7));
// console.log("Acidity 2: ", categorizeAcidity(2));
// console.log("Acidity 9: ", categorizeAcidity(9));




//8. introduceWarnerBro(name)
  function introduceWarnerBro (name) {
    if (name === "yakko" || name === "wakko") {return "We\'re the warner brothers!"}
    else if (name === "dot") {return "I\'m cute~"}
    else {return "Goodnight everybody!"};
  };


  // console.log("yakko says: ", introduceWarnerBro('yakko'));
  // console.log("wakko says: ", introduceWarnerBro('wakko'));
  // console.log("dot says: ", introduceWarnerBro('dot'));
  // console.log("cody says: ", introduceWarnerBro('cody'));
  // console.log("minerva says: ", introduceWarnerBro('minerva'));

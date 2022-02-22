//The Math Object
var variableOne = 50;
var variableTwo = 100;
var variableThree = 200;
var maximumValue = Math.max(variableOne,variableTwo,variableThree)

console.log('maximumValue: ',maximumValue);

var heroes = ['Spiderman', 'Wonder Woman', 'Black Widow', 'Ant Man']
var randomNumber = Math.random()
randomNumber = randomNumber * heroes.length

var randomIndex = Math.floor(randomNumber)
console.log('value ofrandomIndex: ',randomIndex);

var randomHero = heroes[randomIndex]
console.log('randomHero: ', randomHero);

//Array Methods
var library = [
  {
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
  },
  {
    title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
    author: 'Brené Brown',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
    author: 'Mark Manson',
  }
]
var lastBook = library.pop()
console.log('lastBook: ',lastBook);

var firstBook = library.shift()
console.log('firstBook: ', firstBook);

var js = {
  title:'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
}
library.push(js);
library.unshift(css);
library.splice(1,1);
console.log('library: ',library);

//String Methods
var fullName = 'Marya Chuong'
var firstAndLastName = fullName.split(' ')
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0]
// console.log('the firstName: ', firstName);
var sayMyName = firstName.toUpperCase()
console.log ('sayMyName: ', sayMyName);

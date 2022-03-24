var books = [
  {
    isbn: "9780486821955 0486821951"
,
    title: "Don Quixote" ,
    author: "Miguel de Cervantes Saavedra" ,
  },
  {
    isbn: "9781786751041 1786751046" ,
    title: "Alices adventures in wonderland" ,
    author: "Lewis Carroll",
  },
  {
    isbn: "0393020398 9780393020397",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
  },
];

console.log("books", books);
console.log("books TypeOf: ", typeof(books));

booksJSON = JSON.stringify(books);
console.log("JSON Stringify: ", booksJSON);
console.log("JSON Stringify TypeOf: ", typeof(booksJSON));

booksParsed = JSON.parse(booksJSON);
console.log("booksParsed: ", booksParsed);
console.log("booksParsed TypeOf", typeof(booksParsed))

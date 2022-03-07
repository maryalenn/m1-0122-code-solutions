/* exported capitalizeWord */
 function capitalizeWord (word) {
   var capitalizeWord = word[0].toUpperCase()+word.slice(1).toLowerCase();
   if (capitalizeWord === 'Javascript') {capitalizeWord = 'JavaScript'};
   return capitalizeWord;

 };


var activeCharacter = document.querySelector('.active');
document.addEventListener('keydown', typingTutor);

function typingTutor(event) {
  if (event.key === activeCharacter.textContent ) {
    // console.log(event.key);
    activeCharacter.classList.add('correct');
    activeCharacter.classList.remove('active');
    activeCharacter.classList.remove('incorrect');
    activeCharacter = activeCharacter.nextElementSibling;
    activeCharacter.classList.add('active');
    return;
  }
  // To recognize if keypress is a space
  if (event.key === ' ' && activeCharacter.innerHTML === '&nbsp;'){
    // console.log(event.key);
    activeCharacter.classList.remove('active');
    activeCharacter = activeCharacter.nextElementSibling;
  return
}
//If keypress does not equal the text content, then add the .incorrect class
  if (event.key !== activeCharacter.textContent) {
    // console.log(event.key);
    activeCharacter.classList.add('incorrect');
    return
  }

};



// ISSUES:
// Spacebar = how to identify that it is a match to the keypress. Solution - use innerHTML instead of textContent to target spacebar keypress as a match to &nbsp;

//Identifying the next sibling as incorrect before the next keypress event. Solution - return statement after each if statement.

// ENHANCMENTS:
// Message when the activity is complete
// Counter for errors/accuracy
// Total Speed (i.e. WPM)
// Play again - reset button
// Ability for user to add in own text

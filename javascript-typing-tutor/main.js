
var activeCharacter = document.querySelector('.active');
var tutorCharacters = document.querySelector('.type-tutor');
var lastCharacter = tutorCharacters.lastElementChild;
document.addEventListener('keydown', typingTutor);
var typos = 0;

var modalOpen = document.querySelector('.last');
var modalWindow = document.querySelector('.modal');
var resetButton = document.querySelector('.reset');
function reset () {
  reset = location.reload();
}
document.addEventListener('click', reset, false);
var msgScore = document.querySelector('.score');


function typingTutor(event) {
  lastCharacter.classList.add('last');

  if (event.key === activeCharacter.textContent ) {
    // console.log(event.key);
      activeCharacter.classList.add('correct');
      activeCharacter.classList.remove('active');
      activeCharacter.classList.remove('incorrect');
      if(!!activeCharacter.nextElementSibling)
        {activeCharacter = activeCharacter.nextElementSibling;
        activeCharacter.classList.add('active')}
       else {
        msgScore.textContent = "You had " + typos + " typos."
        modalWindow.classList.remove('hide');
      }
    return
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
    typos++;
    return
  }

};

// ISSUES:
// Spacebar = how to identify that it is a match to the keypress. Solution - use innerHTML instead of textContent to target spacebar keypress as a match to &nbsp;
// End of Activity - continues to try to find sibling <span> elements and produces a null error. Solution: Add if(!!activeCharacter.nextElementSibling) to check if there is a nextElementSibling.

// ENHANCMENTS:
// Message when the activity is complete ++COMPLETE
// Counter for errors/accuracy ++COMPLETE
// Play again - reset button ++COMPLETE
// Total Speed (i.e. WPM)
// Ability for user to add in own text


var lightSwitch = document.querySelector('body');
var lightSwitchBtn = document.querySelector('.lightbulb');
var clickCounter = 0;


function lightBulb (event) {
  clickCounter++;
  if (clickCounter % 2 == 0) {
    lightSwitch.className = "light";
  } else {lightSwitch.className = "dark"}
}

lightSwitchBtn.addEventListener('click', lightBulb);

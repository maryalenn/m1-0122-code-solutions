var clickCounter = 0;
var hotBtn = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function countClicks (event) {
  clickCounter++;
  clickCount.textContent = "Clicks: " + clickCounter;

  if (clickCounter >= 4) {
    hotBtn.classList.remove('cold');
    hotBtn.classList.add('cool');
  }
  if (clickCounter >= 7) {
    hotBtn.classList.remove('cool');
    hotBtn.classList.add('tepid');
  }
  if (clickCounter >= 10) {
    hotBtn.classList.remove('tepid');
    hotBtn.classList.add('warm');
  }
  if (clickCounter >= 13) {
    hotBtn.classList.remove('warm');
    hotBtn.classList.add('hot');
  }
  if (clickCounter >= 16) {
    hotBtn.classList.remove('hot');
    hotBtn.classList.add('nuclear');
  }
};

hotBtn.addEventListener('click', countClicks);

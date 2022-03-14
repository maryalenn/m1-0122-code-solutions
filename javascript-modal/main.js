var modalBtnOpen = document.querySelector('.open');
var modalWindow = document.querySelector('.modal');
var modalBtnClose = document.querySelector('.close');

modalBtnOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);

function openModal (event) {
  modalWindow.classList.remove('hide');
};

function closeModal(event) {
  modalWindow.classList.add('hide');
};

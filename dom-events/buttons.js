
// CLICK EVENT
function handleClick (event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
};
var buttonClicked = document.querySelector('.click-button');
buttonClicked.addEventListener('click', handleClick);


// MOUSEOVER EVENT
function handleMouseover (event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var buttonHovered = document.querySelector('.hover-button');
buttonHovered.addEventListener('mouseover', handleMouseover);


// DOUBLE-CLICK EVENT
function handleDoubClick (event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
};
var buttonDblClicked = document.querySelector('.double-click-button');
buttonDblClicked.addEventListener('dblclick', handleDoubClick);


function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ',event.target.name);
  // logs a message that the 'focus' event as fired
  // logs the event.target.name

};

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ', event.target.name);
  // logs a message that the 'blur' event was fired
  // logs the event.target.name

};

function handleInput (event) {
  console.log('event.target.name: ', event.target.name, 'event.target.value', event.target.value,);
  // logs the event.target.name and event.target.value

};
var el = document.getElementById("contact-form");
var userName = document.querySelector("input[name='name']");
var email = document.querySelector("input[name='email']");
var message = document.querySelector("textarea[name='message']");
userName.addEventListener("focus", handleFocus);
email.addEventListener("focus", handleFocus);
message.addEventListener("focus", handleFocus);

userName.addEventListener("blur", handleBlur);
email.addEventListener("blur", handleBlur);
message.addEventListener("blur", handleBlur);

userName.addEventListener("input", handleInput);
email.addEventListener("input", handleInput);
message.addEventListener("input", handleInput);

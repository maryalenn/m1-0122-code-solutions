var el = document.getElementById("contact-form");
el.addEventListener('submit', submitForm);

function submitForm (event) {
  event.preventDefault();
  var submission = {};
  submission.name = el.elements.name.value;
  submission.email = el.elements.email.value;
  submission.message = el.elements.message.value;
  console.log(submission);
  document.getElementById("contact-form").reset();


};

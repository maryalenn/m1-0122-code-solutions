

var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener ('click', function(event) {
    if (event.target.matches('.tab')) {

      for (var i = 0; i < tabElements.length; i++) {
        if (tabElements[i] == event.target) {
          tabElements[i].classList.add('active')

        } else if (tabElements[i] != event.target) {
          tabElements[i].classList.remove('active')
      }
    var dataView = event.target.getAttribute('data-view');

      for (var b = 0; b < viewElements.length; b++) {
        var viewElementsAttr = viewElements[b].getAttribute('data-view')

        if (viewElementsAttr != dataView) {
          viewElements[b].classList.add('hidden')
        }
        else if (viewElementsAttr == dataView) {
          viewElements[b].classList.remove('hidden')
}
      }

  }
}})

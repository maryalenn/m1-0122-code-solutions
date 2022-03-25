/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
console.log("previousTodosJSON", previousTodosJSON)
window.addEventListener ('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON)
})

if (previousTodosJSON != null) {
  todos = JSON.parse(previousTodosJSON);
};
console.log('todos', todos)

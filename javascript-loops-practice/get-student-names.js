/* exported getStudentNames */


function getStudentNames(students) {
  var names = [];
  for(name in students) {
    names.push(students[name].name);
    // console.log(names);
  }
  return names;
};

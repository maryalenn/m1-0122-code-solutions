/* exported capitalizeWords */

function capitalizeWords (string) {
  capitalizedString = string.split(" ");
  for (var i = 0; i < capitalizedString.length; i++) {
    capitalizedString[i] = capitalizedString[i][0].toUpperCase() + capitalizedString[i].substr(1).toLowerCase();
    // console.log(capitalizedString);
  }
  capitalizedString = capitalizedString.join(' ');
  // console.log(capitalizedString);
  return capitalizedString;
};

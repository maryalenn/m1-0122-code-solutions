/* exported oddOrEven */
function oddOrEven (numbers) {
  var numbersOddOrEven = [];
  for (var i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 == 0) { numbersOddOrEven.push('even') } else { numbersOddOrEven.push('odd')};
    return numbersOddOrEven;
};

function stopUntilNegative(numbers) {
  const positiveNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      break;
    }
    positiveNumbers.push(numbers[i]);
  }
  return positiveNumbers;
}

const numbers = [0, 10, 12, 9, 5, -15, 20, 3, 17, -2, 23];
console.log(stopUntilNegative(numbers));

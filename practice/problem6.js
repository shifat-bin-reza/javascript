var numbers = [13, 79, 45];

if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
  console.log(numbers[0] + " is large");
} else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
  console.log(numbers[1] + " is large");
} else {
  console.log(numbers[2] + " is large");
}

function getSmaller(numbers) {
  let small = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < small) {
      small = numbers[i];
    }
  }
  return small;
}

let numbers = [25, 10, 12, 32, 2, 45, 0.5];
let smallNumber = getSmaller(numbers);
console.log(smallNumber);

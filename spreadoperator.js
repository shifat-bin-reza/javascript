const maxNumbers = Math.max(10, 20, 999, 100, 250);
console.log(maxNumbers);

const array = [10, 20, 999, 1001, 149, 700];
const maxNumbers2 = Math.max(...array);
console.log(maxNumbers2);

const result2 = [...array];
const result3 = [1, 2, ...array, 3, 4, 5];
console.log(result2);
console.log(result3);
var num1 = 10;
var num2 = 20;
console.log(num1, num2);

// Method-1
var temp = num1;
num1 = num2;
num2 = temp;

console.log(num1, num2);

// Method-2 (ES6)
let first = 7;
let second = 5;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

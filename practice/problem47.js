// Problem 1
const obj = {
    name: 'Shifat',
    age: 21
}

console.log(`Student Name ${obj.name} and his age is ${obj.age}`);

// Problem 2
const doDevise = number => number / 5;
console.log(doDevise(10));

// Problem 3
const getResult1 = (number1, number2) => {
    return ((number1 + 2) * (number2 + 2));
}
console.log(getResult(10, 20));

// Problem 4
const array = [1, 2, 3, 4, 5];
const getResult2 = array.map(number => number * 5);
console.log(getResult2);
console.log(array);
const getResult3 = array.forEach(number => console.log(number * 5));
console.log(array);

const getResult4 = array.filter(number => number % 2 !== 0);
console.log(getResult4);

const { name, age, gender } = { name: 'Shifat', age: 21, gender: 'Male' };
console.log(name, age, gender);
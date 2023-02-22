// Using array find method
console.log('Array Find Method:');
const array = [33, 50, 79, 78, 90, 101, 30];
const afterDevise = array.find(number => number % 10 === 0);
console.log(afterDevise);
// Using array filter method
console.log('Array Filter Method:');
const array = [33, 50, 79, 78, 90, 101, 30];
const afterDevise = array.filter(number => number % 10 === 0);
console.log(afterDevise);
const array = [1, 9, 17, 22];
console.log('Regular Method:');
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

// Using array reduce method
console.log('Array Reduce Method:');
let result = array.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(result);

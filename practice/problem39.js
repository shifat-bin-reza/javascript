console.log('Regular Method:');
const oddArray = [1, 3, 5, 7, 9];
const evenArray = [];
for (let i = 0; i < oddArray.length; i++) {
    evenArray.push(oddArray[i] + 1);
}
console.log(evenArray);

// Using map method
console.log('Using Map Method:');
const mapEven = oddArray.map(even => even + 1);
console.log(mapEven);
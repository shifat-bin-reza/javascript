const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

console.log('Foor Loop Method:');
let sum = 0;
for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
}

console.log(sum);

console.log('Array Reduce Method:');
const array2 = [];
for (let i = 0; i < people.length; i++) {
    array2.push(people[i].age);
}

const result = array2.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(result);

const avgOfSum = numbers => {
    let sum = 0;
    for (let i of numbers) {
        let square = Math.pow(i, 2);
        sum = sum + square;
    }
    const average = sum / numbers.length;
    return average;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(avgOfSum(numbers));
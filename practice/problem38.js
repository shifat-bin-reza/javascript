const getArray = (firstArray, secondArray) => {
    const newArray = [...firstArray, ...secondArray];
    const maxValue = Math.max(...newArray);
    return maxValue;
}

const firstArray = [1, 2, 3, 999];
const secondArray = [4, 5, 6];
console.log(getArray(firstArray, secondArray));
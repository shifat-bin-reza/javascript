function doMultiply(array) {
    let ans = 0;
    for (let i of array) {
        ans += i;
    }
    return ans;
}

let array = [4, 2, 8];
console.log(doMultiply(array));
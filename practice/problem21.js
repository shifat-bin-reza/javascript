let array = [25, 10, 34, 45, 12];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);

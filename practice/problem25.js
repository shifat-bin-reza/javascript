var array = [10, 20, 10, 12, 17, 16, 3, 4, 10];
var removeDuplicate = [];
for (var i = 0; i < array.length - 1; i++) {
  const x = array[i];
  if (removeDuplicate.includes(x) === false) {
    removeDuplicate.push(x);
  }
}

console.log(removeDuplicate);

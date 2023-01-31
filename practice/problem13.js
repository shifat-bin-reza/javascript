//Even numbers for an array
function evenNumber(array) {
  var storeValue = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      storeValue.push(array[i]);
    }
  }
  return storeValue;
}

// Sum of all even numbers
function evenSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNumber(array));
console.log("Sum: " + evenSum(array));

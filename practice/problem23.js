function getResult(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var array = [10, 20, 30, 40, 50, 100];
var result = getResult(array);
console.log(result);

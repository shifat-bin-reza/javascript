function findSecondLargestElem(arr) {
  var first = -1,
    second = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
}
let arr = [12, 35, 1, 10, 34, 1];
var secondLargest = findSecondLargestElem(arr);
console.log(secondLargest);

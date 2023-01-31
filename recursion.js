function recursion(value) {
  if (value == 0) {
    return 1;
  }
  return value * recursion(value - 1);
}
var value = 10;
console.log(recursion(value));

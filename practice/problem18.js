var t,
  x,
  y,
  z,
  count = 0;
t = parseInt(prompt());
for (var i = 0; i < t; i++) {
  x = parseInt(prompt());
  y = parseInt(prompt());
  z = parseInt(prompt());
  if (x == y || y == z || x == z) {
    count++;
  }
}
console.log(count);

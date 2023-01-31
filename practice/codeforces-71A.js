var t, s;
t = parseInt(prompt());
while (t--) {
  s = prompt();
  var length = s.length;
  if (length > 10) {
    console.log(s[0] + (length - 2) + s[length - 1] + "\n");
  } else {
    console.log(s + "\n");
  }
}

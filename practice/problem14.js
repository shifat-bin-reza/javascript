var year = 2012;
if (year % 400 == 0) {
  console.log("This is a leap year");
} else if (year % 100 == 0) {
  console.log("This is not a leap year");
} else if (year % 4 == 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}

// function odd_even(x) {
//   if (x % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// var x = 33;
// odd_even(x);

function odd_even(x) {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var x = 100;
console.log(odd_even(x));

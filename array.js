// basic array declaration  
var names = ["Shifat", "Abir", "Emon"];
console.log(names);
console.log(names.length);
console.log("************************");

var numbers = [100, 200, 300, 400, 500];
console.log(numbers);
console.log(numbers.length);
console.log("************************");

// array index
console.log(names[1]);
console.log("************************");

 // change value of any index
 numbers[2] = 350;
 console.log(numbers)
 console.log("************************");

 // find any value index - 
 console.log(numbers.indexOf(400));
 console.log("************************");

 // push an element - add value at last index
 names.push("Rina Akter");
 console.log(names);
 console.log("************************");

 // pop an element - removes the last index value
 names.pop();
 console.log(names);
 console.log("************************");

  // shift an element - removes the value of first index
  numbers.shift();
  console.log(numbers);
  console.log("************************");

  // unshift an element - add value at first index
  numbers.unshift(50);
  console.log(numbers);
  console.log("************************");
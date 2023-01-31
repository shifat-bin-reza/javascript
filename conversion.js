var x = "20";
var y = "10";
// before conversion
console.log("before conversion:");
var totalPrice = x + y;
console.log(totalPrice);

// after conversion
console.log("after conversion:");
var totalPrice = parseInt(x) + parseInt(y);
console.log(totalPrice);

// toFixed method
console.log("to fixed method:");
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);

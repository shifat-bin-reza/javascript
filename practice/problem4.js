var fruits = ["Apple", "Banana", "Orange"];

console.log("Index of Banana:");
var bananaPosition = fruits.indexOf("Banana");
console.log(bananaPosition);

console.log("Replacing Banana with Mango:");
fruits[bananaPosition] = "Mango";
console.log(fruits);

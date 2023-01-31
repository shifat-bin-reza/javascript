var shoppingCart = {
  // property/key: value
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

var penCount = shoppingCart.pen;
console.log(penCount);

var random = shoppingCart["keyboard"];
console.log(random);

var propertyKeys = Object.keys(shoppingCart);
console.log(propertyKeys);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

var propertyName = "books";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

console.log(shoppingCart);

// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart["mouse"] = 40;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);

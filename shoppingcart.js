function totalCost(cart) {
  let cost = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    cost = cost + product.quantity * product.price;
  }
  return cost;
}

const cart = [
  { name: "Shirt", quantity: 2, price: 1200 },
  { name: "Pant", quantity: 1, price: 1000 },
  { name: "Tie", quantity: 1, price: 400 },
  { name: "Underware", quantity: 3, price: 600 },
  { name: "Belt", quantity: 1, price: 300 },
];

const totalMoney = totalCost(cart);

console.log("Your total bill is", totalMoney);

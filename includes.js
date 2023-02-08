function findProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const products = [
  { name: "Nokia Phone", price: 19000 },
  { name: "Dell Laptop", price: 100000 },
  { name: "Dorne", price: 150000 },
  { name: "Realme Phone", price: 20000 },
  { name: "HP Laptop", price: 60000 },
];

console.log(findProducts(products, "laptop"));

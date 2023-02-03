function findLowestPhone(phones) {
  let lowest = phones[0];

  for (let i = 0; i < phones.length; i++) {
    if (phones[i].price < lowest.price) {
      lowest = phones[i];
    }
  }
  return lowest;
}

const phones = [
  { name: "Samsung", camera: 12, storage: 128, price: 16000 },
  { name: "Realme", camera: 10, storage: 128, price: 12000 },
  { name: "Redmi", camera: 13, storage: 128, price: 14000 },
  { name: "Infinix", camera: 14, storage: 64, price: 8000 },
  { name: "Walton", camera: 5, storage: 64, price: 6000 },
  { name: "Iphone", camera: 16, storage: 256, price: 130000 },
];

let lowest = findLowestPhone(phones);

console.log("Lowest: ", lowest);

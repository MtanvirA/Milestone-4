let phones = [
  { brand: "Iphone", model: "16 Pro Max", price: 130000 },
  { brand: "Samsung", model: "S25 Ultra", price: 105000 },
  { brand: "Vivo", model: "X300", price: 90000 },
  { brand: "Samsung", model: "Z Fold 7", price: 210000 },
  { brand: "ASUS", model: "ROG Phone 8", price: 120000 },
];

function cheap(phones) {
  let max = phones[0];
  for (let phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

let low = cheap(phones);
console.log(low);

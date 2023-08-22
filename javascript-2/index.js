const arr1 = [
  { id: "1", quantity: 2 },
  { id: "3", quantity: 2 },
];

const arr2 = [
  { id: "1", quantity: 2 },
  { id: "2", quantity: 2 },
  { id: "3", quantity: 3 },
  { id: "1", quantity: 3 },
];
function mergeProducts(arr1, arr2) {
  const result = [];
  arr1.forEach((product1) => {
    const product2 = arr2.find((p) => p.id === product1.id);
    if (product2) {
      result.push({
        id: product1.id,
        quantity: product1.quantity + product2.quantity,
      });
    }
  });
  return result;
}

console.log(mergeProducts(arr1, arr2));

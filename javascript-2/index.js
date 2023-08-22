function mergeProducts(arr1, arr2) {
  const merged = {};
  const result = [];

  arr1.forEach((item) => {
    if (!merged[item.id]) {
      merged[item.id] = item.quantity;
    } else {
      merged[item.id] += item.quantity;
    }
  });

  arr2.forEach((item) => {
    if (merged[item.id]) {
      result.push({ id: item.id, quantity: merged[item.id] + item.quantity });
    }
  });

  return result;
}

const arr1 = [
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 }
];

const arr2 = [
  { id: '1', quantity: 2 },
  { id: '3', quantity: 2 }
];

console.log(mergeProducts(arr1, arr2));
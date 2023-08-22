const arr1 = [
  { id: "2", quantity: 2 },
  { id: "3", quantity: 3 },
  { id: "1", quantity: 3 },
  { id: "5", quantity: 3 },
];

const arr2 = [
  { id: "1", quantity: 2 },
  { id: "3", quantity: 2 },
  { id: "1", quantity: 5 },
  { id: "5", quantity: 5 },
];

const formatFunc = (arr) => {
  return arr.reduce((acc, curr) => {
    if (acc[curr.id]) {
      acc[curr.id] += curr.quantity;
    } else {
      acc[curr.id] = curr.quantity;
    }
    return acc;
  }, {});
};

const mergeFunc = (arr1, arr2) => {
  const formatArr1 = formatFunc(arr1);
  const formatArr2 = formatFunc(arr2);

  const mergedArr = [];

  for (const key in formatArr1) {
    if (formatArr2[key]) {
      const obj = { id: key, quantity: formatArr1[key] + formatArr2[key] };
      mergedArr.push(obj);
    }
  }

  console.log(mergedArr);
};

mergeFunc(arr1, arr2);

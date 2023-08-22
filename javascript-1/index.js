const products = [
  {
    id: 1,
    name: "Trà sữa truyền thống",
    price: 30000,
  },
  {
    id: 2,
    name: "Trà sữa Thái xanh",
    price: 32000,
  },
  {
    id: 3,
    name: "Trà sữa đặc biệt",
    price: 40000,
  },
];

const sugars = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

const ices = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

const data = { quantity: 2, productId: 1, sugarId: 3, iceId: 3 };

const data2 = { quantity: 2, productId: 1, sugarId: 2, iceId: 2 };

const data3 = { quantity: 1, productId: 2, sugarId: 3, iceId: 3 };

function addToCart(data) {
  const product = products.find((item) => item.id === data.productId);
  const sugar = sugars.find((item) => item.id === data.sugarId);
  const ice = ices.find((item) => item.id === data.iceId);
  const productToCart = {
    quantity: data.quantity,
    name: product.name,
    price: product.price,
    sugar: sugar.label,
    ice: ice.label,
    totalPrice: product.price * data.quantity,
  };

  console.log(productToCart);
}

addToCart(data);
addToCart(data2);
addToCart(data3);
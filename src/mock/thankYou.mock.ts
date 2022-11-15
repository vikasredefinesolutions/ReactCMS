const __ItemDetails = {
  size: 'XS',
  qty: 4,
  price: 494,
};

const __product = {
  name: "Patagonia Men's Better Sweater Jacket",
  sku: 25528,
  color: 'StoneWash',
  totalQty: 24,
  itemTotal: 2964,
  itemDetails: [__ItemDetails],
  image: {
    url: '/images/1040623_25528_STH.jpg',
    alt: "Patagonia Men's Better Sweater Jacket",
  },
};

export default {
  customer: {
    firstName: 'John',
    email: ' john@email.com',
  },
  order: {
    id: 'WEB-S05654123',

    product: [__product],
  },
  total: {
    subTotal: 4780,
    shipping: 35,
    tax: 35.6,
    grandTotal: 4850.6,
  },
  contactNo: '+91-000-000-0000',
};

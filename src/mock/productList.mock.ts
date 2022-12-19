const Product = {
  id: 'xyz-greyshirt',
  name: "Patagonia Men's Better Sweater Jacket",
  skuId: '25528',
  price: '139.00',
  priceUnit: '$',
  brand: {
    name: 'Petter Millar',
    logo: 'images/peter-millar.png',
  },
  image: {
    label: 'front',
    id: 'images/1040623_25528_STH_large.jpg',
    url: 'images/1040623_25528_STH_large.jpg',
  },
  description:
    "<p>Looking for a company gift that your employees will reach for repeatedly? Check out the Patagonia Men's Better Sweater Jacket. This 100% recycled polyester jacket has a sweater-knit aesthetic and is popular with employees of all industries. It's been dyed with a low-impact process that reduces the use of dyestuffs, energy, and water compared to conventional dyeing methods. It's also Fair Trade Certified sewn, so you can feel good about your employee gift. Whether they are wearing it a school or busy hospital, the Patagonia Men's Better Sweater Jacket will be a staple in your employees' attire.</p> <p>Looking for another company gift that your employees will reach for repeatedly? Check out the Patagonia Men's Better Sweater Jacket. This 100% recycled polyester jacket has a sweater-knit aesthetic and is popular with employees of all industries. It's been dyed with a low-impact process that reduces the use of dyestuffs, energy, and water compared to conventional dyeing methods. It's also Fair Trade Certified sewn, so you can feel good about your employee gift. Whether they are wearing it a school or busy hospital, the Patagonia Men's Better Sweater Jacket will be a staple in your employees' attire.</p>",
};

export const productList = {
  productBanner: {
    html: '<section className="mainsection section"><div className="w-full mx-auto"><div className="relative"><div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8"><div className="container mx-auto"><div className="flex gap-10 items-center p-16 px-20 bg-gray-100"><div className="w-full lg:w-1/2 flex items-center gap-2 h-full justify-around"><div className="h-full w-full lg:w-1/2"><img className="object-cover" src="images/your-favorite-brands.png" alt=""></div><div className="px-4 text-5xl leading-none text-gray-900">&</div><div className="h-40 w-full lg:w-1/2 bg-white shadow-2xl flex items-center justify-center"><div className="uppercase border-2 border-black inline-block p-2" role="heading" aria-level="{6}">Your Logo</div></div></div><div className="w-full lg:w-1/2 text-gray-900"><h2 className="text-2xl md:text-3xl lg:text-title font-title mb-1">Men\'s Custom Clothing</h2><div className="text-lg md:text-xl lg:text-small-title font-small-title mb-1">Name Brand Logo Apparel & Company Clothing</div><p className="text-default-text font-default-text">Custom clothing and logo apparel adds timeless style to men\'s promotional apparel. Customize company clothing from name brands like Nike, Peter Millar, FootJoy, Adidas, Helly Hansen, The North Face, Johnnie-O, Southern Tide and more.</p></div></div></div></div></div></div></section>',
    loginBar: {
      text: '',
      color: '',
      font: '',
      background: '',
    },
    shippingStatement: {
      background: '',
    },
  },
  products: [
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
    Product,
  ],
};

export const filterOptions: Array<{
  title: string;
  options: Array<{
    label: string;
    value: string;
    count?: string;
  }>;
}> = [
  {
    title: 'Gender',
    options: [
      { label: 'Men', value: 'Men', count: '10' },
      { label: 'Women', value: 'Women', count: '08' },
      { label: 'Unisex', value: 'Unisex', count: '44' },
    ],
  },
  {
    title: 'Product Type',
    options: [
      {
        label: 'Quarter Zips & Pullovers',
        value: 'Quarter Zips & Pullovers',
        count: '9',
      },
      { label: 'Jackets', value: 'Jackets', count: '31' },
      {
        label: 'Hoodies & Sweatshirts',
        value: 'Hoodies & Sweatshirts',
        count: '2',
      },
      { label: 'Vests', value: 'Vests', count: '9' },
      { label: 'T-Shirt', value: 'T-Shirt', count: '4' },
      { label: 'Shirts', value: 'Shirts', count: '1' },
      { label: 'Headwear', value: 'Headwear', count: '1' },
      { label: 'Bags', value: 'Bags', count: '7' },
    ],
  },
  {
    title: 'Categories',
    options: [
      { label: 'Bottom', value: 'Bottom' },
      { label: 'Coat & Jacket', value: 'Coat & Jacket' },
      { label: 'Jeans & denim', value: 'Jeans & denim' },
      { label: 'Kids Wear', value: 'Kids Wear' },
      { label: 'Sports Wear', value: 'Sports Wear' },
      { label: 'T-shirts', value: 'T-shirts' },
      { label: 'Shoes', value: 'Shoes' },
    ],
  },
  {
    title: 'Color',
    options: [
      { label: 'Aqua Marine ', value: 'Aqua Marine ', count: '15' },
      { label: 'Black ', value: 'Black ', count: '14' },
      { label: 'Golden Yellow ', value: 'Golden Yellow ', count: '07' },
      { label: 'Lavender Ash ', value: 'Lavender Ash ', count: '65' },
      { label: 'Lemon Green ', value: 'Lemon Green ', count: '28' },
      { label: 'Light Brown ', value: 'Light Brown ', count: '19' },
      { label: 'Navy Blue ', value: 'Navy Blue ', count: '24' },
      { label: 'Old Leaf ', value: 'Old Leaf ', count: '02' },
      { label: 'Sea Green ', value: 'Sea Green ', count: '06' },
      { label: 'White ', value: 'White ', count: '17' },
    ],
  },
  {
    title: 'Size',
    options: [
      { label: 'XS', value: 'XS', count: '3' },
      { label: 'S', value: 'S', count: '1' },
      { label: 'M', value: 'M', count: '10' },
      { label: 'L', value: 'L', count: '25' },
      { label: 'XL', value: 'XL', count: '15' },
      { label: 'XXL', value: 'XXL', count: '29' },
    ],
  },
  {
    title: 'Material',
    options: [
      { label: 'Cotton', value: 'Cotton', count: '3' },
      { label: 'Silk-Cotton', value: 'Silk-Cotton', count: '1' },
      { label: 'Crepe', value: 'Crepe', count: '10' },
      { label: 'Georgette', value: 'Georgette', count: '25' },
      { label: 'Rayon', value: 'Rayon', count: '15' },
    ],
  },
  {
    title: 'Price Range',
    options: [
      { label: '$150 - $199 ', value: '$150 - $199 ', count: '2' },
      { label: '$200 - $249 ', value: '$200 - $249 ', count: '8' },
      { label: '$250 - $299 ', value: '$250 - $299 ', count: '15' },
      { label: '$300 - $349 ', value: '$300 - $349 ', count: '7' },
      { label: '$350 - $399 ', value: '$350 - $399 ', count: '20' },
      { label: '$400 - $449 ', value: '$400 - $449 ', count: '18' },
      { label: '$450 - $499 ', value: '$450 - $499 ', count: '6' },
      { label: '$500 and above ', value: '$500 and above ', count: '4' },
    ],
  },
  {
    title: 'Tags',
    options: [
      { label: 'dress', value: 'dress' },
      { label: 'tops', value: 'tops' },
      { label: 'gown', value: 'gown' },
      { label: 'jeans & denim', value: 'jeans & denim' },
      { label: 'coat & jacket', value: 'coat & jacket' },
      { label: 't-shirts', value: 't-shirts' },
      { label: 'skirts', value: 'skirts' },
      { label: 'bottom', value: 'bottom' },
    ],
  },
];

export const hideAllConsoles = false; // Will hide all the consoles except API Failures.

export type _fileNames =
  | 'Product-Details'
  | '_app'
  | 'Request-Consultation'
  | 'Compare-Products'
  | 'home'
  | 'my-order-details';

export const __fileNames: { [key: string]: _fileNames } = {
  productDetails: 'Product-Details',
  _app: '_app',
  requestConsultation: 'Request-Consultation',
  compareProducts: 'Compare-Products',
  home: 'home',
  myAccount_myOrderDetails: 'my-order-details',
};

export const _showConsoles = {
  productDetails: false,
  _app: false,
  requestConsultation: false,
  compareProducts: false,
  home: false,
  myAccount_myOrderDetails: true,
  services: {
    store: true,
    productDetails: true,
    compareProducts: true,
    header: true,
    page: true,
    user: true,
  },
};

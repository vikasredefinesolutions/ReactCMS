export const hideAllConsoles = true; // Will hide all the consoles except API Failures.

export type _fileNames =
  | 'Product-Details'
  | '_app'
  | 'Request-Consultation'
  | 'Compare-Products'
  | 'home';

export const __fileNames: { [key: string]: _fileNames } = {
  productDetails: 'Product-Details',
  _app: '_app',
  requestConsultation: 'Request-Consultation',
  compareProducts: 'Compare-Products',
  home: 'home',
};

export const _showConsoles = {
  productDetails: true,
  _app: false,
  requestConsultation: false,
  compareProducts: false,
  home: false,
  services: {
    store: true,
    productDetails: true,
    compareProducts: true,
    header: true,
    page: true,
  },
};

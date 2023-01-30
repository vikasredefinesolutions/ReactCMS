import loaderGif from './images/loading-load.gif';
import defaultProductImage from './images/newNavy.png';

const defaultImages = {
  logoWillComeHere: defaultProductImage,
  product: defaultProductImage,
};

export const __StaticImg = {
  loaderGif: loaderGif,
  noImageFound: defaultImages.product,
  product: defaultImages.product,
  orderDetails: {
    logoWillComeHere: defaultImages.logoWillComeHere,
  },
};

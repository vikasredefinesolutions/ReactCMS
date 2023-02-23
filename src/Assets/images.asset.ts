import header_helpIcons from './images/header-help-icon.png';
import header_orderIcon from './images/header-order-icon.png';
import header_settingIcon from './images/header-setting-icon.png';
import header_signOutIcon from './images/header-sign-out.png';
import loaderGif from './images/loading-load.gif';
import defaultProductImage from './images/newNavy.png';

const defaultImages = {
  logoWillComeHere: defaultProductImage,
  product: defaultProductImage,
};

export const __StaticImg = {
  loggedInMenu: {
    help: header_helpIcons,
    order: header_orderIcon,
    settings: header_settingIcon,
    signOut: header_signOutIcon,
  },
  loaderGif: loaderGif,
  noImageFound: defaultImages.product,
  product: defaultImages.product,
  orderDetails: {
    logoWillComeHere: defaultImages.logoWillComeHere,
  },
};

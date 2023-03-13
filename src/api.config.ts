export interface _Config {
  baseUrl: {
    redefine: string;
    klaviyo: string;
    klaviyo2: string;
    googleFonts: string;
    cms: string;
    media: string;
  };
  imageFolderPath: string;
}

export const cssApis = {
  4: `https://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/main.css`,
  5: `https://ystore.us/HTML/RedefineCommerce/Ecom-front/pkhealthgear/main.css`,
  23: `https://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/main.css`,
  108: `https://ystore.us/HTML/RedefineCommerce/Ecom-front/usaa/main.css`,
  134: `https://www.ystore.us/HTML/RedefineCommerce/Ecom-front/bacarditogo/main.css`,
  135: `https://www.ystore.us/HTML/RedefineCommerce/Ecom-front/bbcprod/main.css`,
  139: `https://www.ystore.us/HTML/RedefineCommerce/Ecom-front/bain/main.css`,
  27: `http://ystore.us/HTML/RedefineCommerce/Ecom-front/bain/main.css`,
  22: `http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/main.css`,
};

const dev: _Config = {
  baseUrl: {
    redefine: 'https://redefine-front-beta.redefinecommerce.io/',
    klaviyo: `https://static.klaviyo.com/onsite/js/klaviyo.js`,
    klaviyo2: 'https://a.klaviyo.com/',
    googleFonts: 'https://fonts.googleapis.com/',
    cms: 'https://redefine-front-beta.redefinecommerce.io/',
    media: 'https://redefinecommerce.blob.core.windows.net',
  },
  imageFolderPath: '/rdc/1/store/4/images/',
};

const stage: _Config = {
  baseUrl: {
    redefine: 'https://redefine-front-beta.redefinecommerce.io/',
    klaviyo: `https://static.klaviyo.com/onsite/js/klaviyo.js`,
    klaviyo2: 'https://a.klaviyo.com/',
    googleFonts: 'https://fonts.googleapis.com/',
    cms: 'https://redefine-front-beta.redefinecommerce.io/',
    media: 'https://redefinecommerce.blob.core.windows.net',
  },
  imageFolderPath: '/rdc/1/store/4/images/',
};

const prod: _Config = {
  baseUrl: {
    redefine: 'https://redefine-front-beta.redefinecommerce.io/',
    klaviyo: `https://static.klaviyo.com/onsite/js/klaviyo.js`,
    klaviyo2: 'https://a.klaviyo.com/',

    googleFonts: 'https://fonts.googleapis.com/',
    cms: 'https://redefine-front-beta.redefinecommerce.io/',
    media: 'https://redefinecommerce.blob.core.windows.net',
  },
  imageFolderPath: '/rdc/1/store/4/images/',
};

let config: _Config;

switch (process.env.REACT_APP_STAGE) {
  case 'stagging':
    config = dev;
    break;
  case 'staging':
    config = stage;
    break;
  case 'production':
    config = prod;
    break;
  default:
    config = dev;
    break;
}
export default config;

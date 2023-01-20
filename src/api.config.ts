export interface _Config {
  api: {
    URL: string;
  };
  CLIENT_ID: string;
  mediaBaseUrl: string;
  CMS: string;
}

const dev = {
  api: {
    URL: 'https://redefine-front-dev.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://redefine-front-dev.redefinecommerce.io/',
};

const stage = {
  api: {
    URL: 'https://redefine-front-dev.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://redefine-front-dev.redefinecommerce.io/',
};

const prod = {
  api: {
    URL: 'https://redefine-front-dev.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://redefine-front-dev.redefinecommerce.io/',
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

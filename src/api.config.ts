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
    URL: 'https://redefine-front-staging.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/',
};

const stage = {
  api: {
    URL: 'https://redefine-front-staging.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/',
};

const prod = {
  api: {
    URL: 'https://redefine-front-staging.redefinecommerce.io/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/',
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

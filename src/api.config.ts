import { _Config } from './definations/api.type';

const dev = {
  api: {
    URL: 'https://redefine-front-staging.azurewebsites.net/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/API',
};

const stage = {
  api: {
    URL: 'https://redefine-front-staging.azurewebsites.net/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/API',
};

const prod = {
  api: {
    URL: 'https://redefine-front-staging.azurewebsites.net/',
  },
  CLIENT_ID: '',
  mediaBaseUrl: 'https://redefinecommerce.blob.core.windows.net',
  CMS: 'https://www.redefinecommerce.net/API',
};

let config: _Config;

switch (process.env.REACT_APP_STAGE) {
  case 'dev':
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

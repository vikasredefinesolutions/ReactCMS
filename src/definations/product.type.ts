import { inventory, pricing, productById } from '../mock/product.mock';
import { _ProductDetailsTransformed } from './APIs/productDetail.res';
import { storeReturnType } from './store.type';

export type _LogoSteps =
  | 'SELECT_LOCATION'
  | 'SHARE_LATER'
  | 'SELECT_NOW'
  | 'DONE';

export type _modals =
  | 'sizeChart'
  | 'availableInventory'
  | 'login'
  | 'forgot'
  | 'personalizationFonts'
  | 'qouteRequest'
  | 'startOrder';

export type _Product = typeof productById;
export type _Pricing = typeof pricing;
export type _Inventory = typeof inventory;

export interface _Reviews {}

export interface _ShowProduct {}

export interface _productImage {
  _uid: string;
  url: string;
  label: string;
}

export interface _SelectedProduct {
  _uid: string;
}

export interface _AllColors {
  id: any;
  label: any;
  url: any;
  alt: any;
}

// --------------------
export interface _ProductReturnType {
  details: null | _ProductDetailsTransformed;
  colors: null | _AllColors[];
}

export interface _ExpectedProductProps {
  product: {
    details: null | _ProductDetailsTransformed;
    colors: null | _AllColors[];
  };
  store: storeReturnType | null;
}

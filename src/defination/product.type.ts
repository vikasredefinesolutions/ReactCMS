import { inventory, pricing, productById } from '../mock/product.mock';

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

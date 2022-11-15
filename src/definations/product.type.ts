import { inventory, pricing, productById } from '../mock/product.mock';
import { _ProductColor } from './APIs/colors.res';
import { _ProductDiscountTable } from './APIs/discountTable.res';
import { _ProductDetailsTransformed } from './APIs/productDetail.res';
import { _SizeChartTransformed } from './APIs/sizeChart.res';
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

// --------------------
export interface _ProductReturnType {
  details: null | _ProductDetailsTransformed;
  colors: null | _ProductColor[];
}

export interface _ExpectedProductProps {
  product: {
    details: null | _ProductDetailsTransformed;
    colors: null | _ProductColor[];
    sizes: null | _SizeChartTransformed;
    discount: null | _ProductDiscountTable;
  };
  store: storeReturnType | null;
}

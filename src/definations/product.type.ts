import { _ProductColor } from './APIs/colors.res';
import { _ProductDiscountTable } from './APIs/discountTable.res';
import { _ProductDetails, _ProductSEO } from './APIs/productDetail.res';
import { _SizeChartTransformed } from './APIs/sizeChart.res';
import { _StoreReturnType } from './store.type';

export type _LogoSteps =
  | 'SELECT_LOCATION'
  | 'SHARE_LATER'
  | 'SELECT_NOW'
  | 'DONE';

export type _modals =
  | 'requiredQty'
  | 'sizeChart'
  | 'availableInventory'
  | 'login'
  | 'forgot'
  | 'personalizationFonts'
  | 'qouteRequest'
  | 'startOrder'
  | 'InventoryLimit';

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
  details: null | _ProductDetails;
  colors: null | _ProductColor[];
}

export interface _ExpectedProductProps {
  product: {
    details: null | _ProductDetails;
    colors: null | _ProductColor[];
    sizes: null | _SizeChartTransformed;
    discount: null | _ProductDiscountTable;
    SEO: null | _ProductSEO;
  } | null;
  store?: _StoreReturnType | null;
}

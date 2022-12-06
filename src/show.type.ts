import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductDiscountTable } from '@type/APIs/discountTable.res';
import {
  _Brands,
  _StoreMenu,
  _TransformedThemeConfig,
} from '@type/APIs/header.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductDetails, _ProductSEO } from '@type/APIs/productDetail.res';
import { _SizeChartTransformed } from '@type/APIs/sizeChart.res';
import { _StoreReturnType } from '@type/store.type';

export type _productController = {
  details: null | _ProductDetails;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
  SEO: null | _ProductSEO;
  inventory: null | _ProductInventoryTransfomed;
};

export type _Expected_AppProps = {
  store: _StoreReturnType | null;
  menuItems: _StoreMenu[] | null;
  brands: _Brands[] | null;
  configs: {
    header: _TransformedThemeConfig | null;
  };
};

export type _conditionalLog =
  | _productController
  | _Expected_AppProps
  | _StoreReturnType;

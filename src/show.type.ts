import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductDiscountTable } from '@type/APIs/discountTable.res';
import { _Footer } from '@type/APIs/footer.res';
import {
  _StoreMenu,
  _TransformedHeaderConfig,
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from '@type/APIs/header.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductDetails, _ProductSEO } from '@type/APIs/productDetail.res';
import { _SizeChartTransformed } from '@type/APIs/sizeChart.res';
import { _StoreReturnType } from '@type/store.type';

export type _DynamicContent = {
  type: 'BRANDS' | 'CATEGORY';
  title: string;
  seName: string | null;
  items: _t_Brands | _t_MenuCategory | null;
};

export type _NoneContent = {
  type: 'TOPIC' | 'CATEGORY';
  title: string;
  seName: string | null;
  items: _t_MenuTopic | null;
};

export type _CustomContent = {
  type: 'TOPIC' | 'CATEGORY';
  title: string;
  seName: string | null;
  items: string | null;
};

export type _MenuItems = {
  items: null | _StoreMenu[];
  items_content:
    | (_CustomContent | _DynamicContent | _NoneContent | null)[]
    | null;
};

export type _BrandsSiteMap = {
  items: { dataType: string; brands: [] };
  seName: string;
  brandName: string;
  type: string;
};

export type _CategorySiteMap = {
  id: number;
  name: string;
  parentCategoryId: number;
  sename: string;
  storeId: number;
  subRows: [];
};

export type _productController = {
  details: null | _ProductDetails;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
  SEO: null | _ProductSEO;
  inventory: null | _ProductInventoryTransfomed;
};

export type _Expected_AppProps = {
  store: _StoreReturnType;
  menuItems: _MenuItems | null;
  configs: {
    header: _TransformedHeaderConfig | null;
    footer: _Footer | null;
  };
};

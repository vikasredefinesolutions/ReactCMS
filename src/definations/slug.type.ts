import { _ProductDetailsProps } from './APIs/productDetail.res';
import {
  StoreBrandProductColorViewModel,
  StoreBrandProductSizeViewModel,
  StoreBrandProductGenderViewModel,
  StoreBrandProductProductTypeViewModel,
  StoreBrandProductPriceRangeViewModel,
  GetlAllProductList,
  ProductListType,
} from './productList.type';

export type other = StoreBrandProductColorViewModel |
    StoreBrandProductSizeViewModel |
    StoreBrandProductGenderViewModel |
    StoreBrandProductProductTypeViewModel |
    StoreBrandProductPriceRangeViewModel |
    GetlAllProductList;


export interface Seo {
  brandId: number;
  brandName: string;
  seName: string;
  seTitle: string;
  seKeyWords: string;
  seDescription: string;
}

export interface FilterOption {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
  colorCode: string;
  fromPrice?: number;
  toPrice?: number;
}

export interface Filter {
  label: string;
  options: FilterOption[];
}

export interface GetProductImageOptionList2 {
  id: number;
  imageName: string;
  colorName: string;
  displayorder: number;
  alttag: string;
}

export interface Product {
  getProductImageOptionList: GetProductImageOptionList2[];
  id: number;
  name: string;
  sename: string;
  msrp: number;
  salePrice: number;
  brandlogo: string;
  iswishlist: boolean;
  wishListId: number;
  displayOrder: number;
}

export interface CheckedFilter {
  name: string;
  value: string;
}

export interface ProductListPageData {
  seo?: Seo;
  filters?: Filter[];
  product?: Product[];
  checkedFilters?: CheckedFilter[];
}

export interface SlugPropType {
  pageType: string;
  pageData: ProductListPageData | _ProductDetailsProps | TopicProps;
  slug: string;
}

export interface TopicProps {
  seo?: Seo;
}
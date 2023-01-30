import { __Error } from '@constants/global.constant';
import { _ProductDetailsProps } from './APIs/productDetail.res';
import { _FeaturedProduct } from './APIs/storeDetails.res';

export type _PageTypesAvailable =
  | 'topic'
  | 'category'
  | 'product'
  | 'collection'
  | 'brand'
  | '404';

export interface _TopicHomeProps {
  pageData: {
    components: any;
  };
  pageType: 'topic';
  slug: string;
}

export interface _GetPageType {
  storeId: number;
  slug: string;
  id: number;
  type: _PageTypesAvailable;
  meta_Title: string;
  meta_Keywords: string;
  meta_Description: string;
}

export interface _SlugServerSide_WentWrong {
  error: __Error.storeIdMissing | __Error.noPageTypeFound;
}

export interface _StoreCache {
  storeCode: string;
  storeTypeId: number;
}

export interface _SlugServerSideProps {
  _store: _StoreCache | null;
  pageMetaData: _GetPageType | null;
  page: {
    productDetails: _ProductDetailsProps | null;
    productListing: _ProductListProps | null;
    topicHome: {
      components: any;
    };
    home: {
      featuredItems: null | Array<_FeaturedProduct[] | null>;
    };
  } | null;
}

export interface _ProductListProps {
  brandSEO: _BrandSEO;
  filters: Filter[];
  product: Product[];
  checkedFilters: CheckedFilter[];
  brandId: number;
}

export interface _BrandSEO {
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

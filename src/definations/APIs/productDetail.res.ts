import { _ProductColor, _ProductImageOption } from './colors.res';
import { _SizeChartTransformed } from './sizeChart.res';

export interface _ProductDetailsProps {
  details: null | _ProductDetails;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  SEO: null | _ProductSEO;
  alike: null | _ProductsAlike[];
}

export interface _ProductDoNotExist {
  id: null;
  productDoNotExist: {
    retrunUrlOrCategorySename: string;
    info: string;
  } | null;
}

export interface _ProductDoNotExistTransformed {
  retrunUrlOrCategorySename: string;
  info: string;
}

export interface _ProductBySku {
  productId: number;
  seName: string;
  storeId: number;
  name: string;
  description: string;
  shortDescription: string;
  quantity: number;
  ourCost: string;
  msrp: string;
  imap: string;
  salePrice: string;
  sku: string;
  brandID: number;
}

export interface _LogoLocationDetail {
  logoLocationDetailId: number;
  name: string;
  image: string;
  threeDImage: string;
  threeDLogoLocationClass: string;
  price: number;
  cost: number;
  brandGuideLines: boolean;
}

export interface _LogoLocation {
  isFirstLogoFree: boolean;
  productId: number;
  subRow: _LogoLocationDetail[] | [];
}

export interface _ProductDetails {
  id: number;
  storeId: number;
  name: string;
  description: string;
  shortDescription: string;
  quantity: number;
  ourCost: number;
  msrp: number;
  imap: number;
  salePrice: number;
  companionProductId: number | null;
  companionProductName: string | null;
  companionProductSEName: string | null;
  companionProductImage: string | null;
  isEnableLogolocation: boolean;
  sku: string;
  brandID: number | null;
  brandName: string | null;
  brandImage: string | null;
  sizes: string;
  brandColorLogoUrl: string;
  brandBannerImage: null;
  isDiscontinue: boolean;
  discontinueDate: string;
  discontinueEndDate: string;
  suggestedProducts: _SuggestedProduct[];
  isBrandOnline: boolean;
  isPolicywithcheckbox: boolean;
  policyMessage: string;
  isEnduserDisplay: boolean;
}
export interface _ProductPolicy {
  storeId: number;
  brandID: number | null;
  brandName: string | null;
  isBrandOnline: boolean;
  isPolicywithcheckbox: boolean;
  policyMessage: string;
  isEnduserDisplay: boolean;
}

export interface _SuggestedProduct {
  id: number;
  name: string;
  sku: string;
  ourCost: string;
  brandName: string;
  brandId: number;
  msrp: string;
  imap: string;
  salePrice: string;
  seName: string;
  image: string;
  categoryId: number;
  storeId: number;
}

export interface _ProductSEO {
  recStatus: string;
  productId: number;
  pageUrl: null;
  seName: string;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  roiKeywords: string;
  targetedKeywords: string;
  openGraphImagePath: string;
  openGraphTitle: string;
  openGraphDescription: string;
  facebookImagePath: string;
  facebookOpenGraphTitle: string;
  facebookOpenGraphDescription: string;
  twitterImagePath: string;
  twitterOpenGraphTitle: string;
  twitterOpenGraphDescription: string;
  linkedinImagePath: string;
  linkedinOpenGraphTitle: string;
  linkedinOpenGraphDescription: string;
  pinterestImagePath: string;
  pinterestOpenGraphTitle: string;
  pinterestOpenGraphDescription: string;
}

export interface _ProductsAlike {
  id: number;
  name: string;
  msrp: number;
  seName: string;
  image: null | string;
  categoryId: number;
  getProductImageOptionList: _ProductImageOption[];
}

export interface _ProductsRecentlyViewed {
  id: number;
  customerId: number;
  productId: number;
  pageName: string;
  pageUrl: string;
  recStatus: string;
  ipAddress: string;
}
export interface _ProductsRecentlyViewedPayload {
  recentViewModel: {
    customerId: number;
    productId: number;
    pageName: string;
    pageUrl: string;
    recStatus: string;
    ipAddress: string;
  };
}
export interface _ProductsRecentlyViewedResponse {
  id: number;
  name: string;
  msrp: number;
  seName: string;
  image: string;
  categoryId: number;
  getProductImageOptionList: _ProductImageOption[];
}

export interface _FetchProductsRecentlyViewedPayload {
  productId: number;
  storeId: number;
  ipAddress: string;
  customerId: number;
  maximumItemsForFetch: number;
}
export interface _FetchTagsName {
  productId: number;
  imagename: string;
  productTagName: string;
  tagPosition: string;
}

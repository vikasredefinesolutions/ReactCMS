import { _ProductColor } from './colors.res';
import { _ProductDiscountTable } from './discountTable.res';
import { _ProductInventoryTransfomed } from './inventory.res';
import { _SizeChartTransformed } from './sizeChart.res';

export interface _ProductDetailsProps {
  details?: null | _ProductDetails | _ProductDoNotExist;
  colors?: null | _ProductColor[];
  sizes?: null | _SizeChartTransformed;
  discount?: null | _ProductDiscountTable;
  SEO?: null | _ProductSEO;
  inventory?: null | _ProductInventoryTransfomed;
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
  id: number;
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
  companionProductLink: string | null;
  companionProductImage: string | null;
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
}

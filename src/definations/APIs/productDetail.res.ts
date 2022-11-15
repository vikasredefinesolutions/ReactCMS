import { _ProductColor } from './colors.res';

export interface _FetchProductDetailsRes {
  success: boolean;
  data: _ProductDetails;
  errors: Errors;
  otherData: null;
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
}
export interface _ProductDetailsTransformed {
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
  // Mutated
  sizes: string[];
  colors: null | _ProductColor[];
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

export interface Errors {}

export interface Errors {}

export interface Welcome {
  success: boolean;
  data: _StoreDetails;
  errors: Errors;
  otherData: null;
}

export interface _StoreDetails {
  storeXPaymetnOptionListViewModels: any[];
  id: number;
  storeTypeId: number;
  storeLayout: StoreType;
  name: string;
  code: string;
  url: string;
  navCode: string;
  prefix: string;
  logoUrl: string;
  isLandingPage: boolean;
  isBlogPage: boolean;
  isReviewMaster: boolean;
  isSeoMarketing: boolean;
  isAttributeSaparateProduct: boolean;
  attributeid: number;
  isQuantityDiscount: boolean;
  isFirstLogoFree: boolean;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  isSmallRun: boolean;
  smallRunLimit: number;
  smallRunFeesCharges: number;
  isLogoSetupCharges: boolean;
  logoSetupCharges: number;
}

export interface StoreType {
  id: number;
  name: string;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: null;
  modifiedBy: null;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

export interface _FeaturedProduct {
  productId: number;
  productName: string;
  productSEName: string;
  ourCost: string;
  msrp: string;
  imap: string;
  salePrice: string;
  productDisplayOrder: number;
  imageUrl: string;
  moreImages: _FeaturedMoreImages[];
}

export interface _FeaturedMoreImages {
  id: number;
  attributeOptionID: number;
  attributeOptionName: string;
  imageUrl: string;
  displayOrder: number;
  altTag: string;
}

export interface Errors {}

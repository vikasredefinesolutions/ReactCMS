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

export interface Errors {}

export interface _CreateAccRes {
  success: boolean;
  data: _AccCreated | false;
  errors: Errors;
  otherData: null;
}

export interface _AccCreated {
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: null;
  companyName: string;
  companyId: number;
  tierId: number;
  isRegistered: boolean;
  sharedCustomerId: number;
  isLocked: boolean;
  navCustomerId: string;
  isSuperuser: boolean;
  customerType: string;
  storeId: number;
  isTaxableuser: boolean;
  storeCustomerAddress: StoreCustomerAddress[];
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: null;
  modifiedBy: null;
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

export interface StoreCustomerAddress {
  customerId: number;
  firstname: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  suite: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  fax: string;
  countryName: string;
  countryCode: string;
  addressType: string;
  isDefault: boolean;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: null;
  modifiedBy: null;
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

export interface Errors {
  'storeCustomerModel.Email': string;
  'storeCustomerModel.StoreId': string;
  'storeCustomerModel.RecStatus': string;
  'storeCustomerModel.StoreCustomerAddress[0].AddressType': string;
  'storeCustomerModel.StoreCustomerAddress[0].CountryCode': string;
}

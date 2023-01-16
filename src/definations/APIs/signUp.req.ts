export interface _SignUpPayload {
  storeCustomerModel: StoreCustomerModel;
}

export interface StoreCustomerModel {
  id: number;
  details: string;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  companyId: number;
  sharedCustomerId: number;
  customerType: string;
  storeId: number;
  isTaxableuser: boolean;
  storeCustomerAddress: StoreCustomerAddress[];
  recStatus: string;
}

export interface StoreCustomerAddress {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  customerId: number;
  firstname: string;
  lastName: string;
  email: string;
  CompanyName: string;
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
}

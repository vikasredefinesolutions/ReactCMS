export interface AddUpdateAddressRequest {
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
  isDefault: boolean;
  companyName: string;
}

export interface StoreCustomerAddressModel {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
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
}

export interface AddressAPIRequest {
  storeCustomerAddressModel: StoreCustomerAddressModel;
}

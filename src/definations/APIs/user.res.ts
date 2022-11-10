export interface CustomerAddress {
  id: number;
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
  createdDate?: any;
  createdBy?: any;
  modifiedDate?: any;
  modifiedBy?: any;
  rowVersion: string;
  location?: any;
  ipAddress?: any;
  macAddress?: any;
  companyName: string;
}

export interface UserType {
  name: string;
  storeName: string;
  createdByName?: any;
  modifiedByName?: any;
  companyName: string;
  customerAddress: CustomerAddress[];
  id: number;
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  companyId: number;
  tierId: number;
  isRegistered: number;
  storeId: number;
  sharedCustomerId: number;
  isLocked: boolean;
  navCustomerId: string;
  isSuperuser: boolean;
  customerType?: any;
  isTaxableuser: boolean;
  industryId: number;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate?: any;
  modifiedBy?: any;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

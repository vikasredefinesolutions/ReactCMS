export interface CustomerUsersObject {
  name: string;
  customerRoleName: string;
  storeName?: any;
  createdByName?: any;
  modifiedByName?: any;
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password?: any;
  customerRoleId: number;
  storeId: number;
  customerId: number;
  recStatus?: any;
  createdDate: Date;
  createdBy: number;
  modifiedDate?: any;
  modifiedBy?: any;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

export interface Errors {
  [key: string]: string;
}

export interface CustomerAddResponse {
  success: boolean;
  data: boolean | CustomerUsersObject[];
  errors: Errors;
  otherData?: any;
}

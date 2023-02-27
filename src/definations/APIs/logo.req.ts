export interface SortingOption {
  field: string;
  direction: number;
  priority: number;
}

export interface FilteringOption {
  field: string;
  operator: number;
  value: string;
}

export interface Args {
  pageIndex: number;
  pageSize: number;
  pagingStrategy: number;
  sortingOptions: SortingOption[];
  filteringOptions: FilteringOption[];
}

export interface FetchLogoPayload {
  args: Args;
  customerId: number;
  storeId: number;
}

export interface Customeradminlogodescriptionrequestmodel {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  customerId: number | null;
  customerLogoId: number;
  adminId: number;
  longDescription: string;
  logoImageName: string;
  isApproved: boolean;
  approvedDate: Date;
  logoType: number;
  isAdmin: number;
  logoSize: string;
  embroideryColor: string;
  parentId: number;
}

export interface SubmitFeedbackPayloadType {
  customeradminlogodescriptionrequestmodel: Customeradminlogodescriptionrequestmodel;
}

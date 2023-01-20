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

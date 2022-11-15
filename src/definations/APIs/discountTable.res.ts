export interface _DiscountTableRes {
  success: boolean;
  data: _ProductDiscountTable;
  errors: Errors;
  otherData: null;
}

export interface _ProductDiscountTable {
  productDiscountTemplateID: number;
  minimumUnits: number;
  minimumUnitsTotalPrice: number;
  subRows: SubRow[];
}

export interface SubRow {
  discountPrice: string;
  displayQuantity: string;
}

export interface Errors {}

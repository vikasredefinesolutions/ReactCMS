export interface Welcome {
  success: boolean;
  data: _ProductInventory[];
  errors: Errors;
  otherData: null;
}

export interface _ProductInventory {
  productId: number;
  colorAttributeOptionId: number;
  attributeOptionId: number;
  name: string;
  displayOrder: number;
  price: number;
  sku: string;
  minQuantity: number;
  upC_GTN: string;
  multipleQuantity: number;
  combinationId: number;
  varientName: string;
  varientImagePath: null;
  inventory: number;
  futureInventory: number;
  futureInventoryDate: string;
  inventoryId: number;
}

export interface _ProductInventoryTransfomed {
  sizes: {
    colorAttributeOptionId: number;
    sizeArr: string[];
  }[];
  inventory: _ProductInventory[];
}

export interface Errors {}

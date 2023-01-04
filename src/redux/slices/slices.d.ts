interface _cart_update_qty_model {
  type: 'update_qty';
  data: {
    productId: number;
    colorId: number;
    attributes: {
      size: string;
      qty: number;
    };
  };
}

interface _cart_add_item_model {
  type: 'add_item';
  data: {
    seName: string;
    colorImageURL: string;
    sku: string;
    productId: number;
    colorId: number;
    productName: string;
    colorName: string;
    productPrice: number;
    attributes: _InCart_Item_attributes_model[];
  };
}

interface _cart_remove_item_model {
  type: 'remove_item';
  data: {
    productId: number;
    colorId: number;
  };
}

export interface _Cart_update_Action {
  payload:
    | _cart_update_qty_model
    | _cart_add_item_model
    | _cart_remove_item_model;
}

interface _InCart_Item_attributes_model {
  size: string;
  qty: number;
  priceOfqty: number;
  minQtyRequired: number;
}

interface _InCart_Item_model {
  seName: string;
  productId: number;
  sku: string;
  colorId: number;
  colorImageURL: string;
  productName: string;
  colorName: string;
  productPrice: number;
  productTotalPrice: number;
  productTotalQty: number;
  attributes: _InCart_Item_attributes_model[];
}

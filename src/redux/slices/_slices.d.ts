// -------------- Cart Initials ----------------------

export interface _InCart_productAttributes_model {
  id: number;
  size: string;
  qty: number;
  priceOfqty: number;
  price: number;
  minQtyRequired: number;
  attributeOptionId: number;
}

export interface _InCart_Product_model {
  type: 'product';
  cartItemId: number;
  seName: string;
  name: string;
  productId: number;
  sku: string;
  colorId: number;
  colorImageURL: string;
  colorName: string;
  itemPrice: number;
  itemTotalPrice: number;
  itemTotalQty: number;
  attributes: _InCart_productAttributes_model[];
}

export interface _InCart_GiftCard_model {
  type: 'giftCard';
  cartItemId: number;
  seName: string;
  name: string;
  giftId: number;
  itemPrice: number;
  itemTotalPrice: number;
  itemTotalQty: number;
  giftImageURL: string;
  sender: {
    name: string;
    email: string;
  };
  recipient: {
    name: string;
    email: string;
  };
  messageForRecipient: string;
}

// ---------------- Guest  ------------------------

export interface _cart_guestLogin_model {
  type: 'guestLogin';
  data: {
    guestId: number;
    showThankYou: boolean;
    email: string;
    isCustomerExist: boolean;
    isGuestCustomer: boolean;
  };
}

export interface _cart_resetGuestStatus_model {
  type: 'noMoreAGuest';
  data: {
    isGuestCustomer: false;
  };
}

export interface _Cart_userUpdate_Action {
  payload: _cart_guestLogin_model | _cart_resetGuestStatus_model;
}

// ---------------- Product ------------------------

export interface _cart_updateProduct_qty_data {
  itemType: 'product';
  productId: number;
  colorId: number;
  attributes: {
    size: string;
    qty: number;
  };
}

export interface _cart_updateProduct_qty_model {
  type: 'update_qty';
  data: _cart_updateProduct_qty_data;
}

export interface _cart_addProduct_model {
  type: 'add_item';
  data: {
    cartItemId: number;
    itemType: 'product';
    seName: string;
    colorImageURL: string;
    sku: string;
    productId: number;
    colorId: number;
    productName: string;
    colorName: string;
    productPrice: number;
    attributes: _InCart_productAttributes_model[];
  };
}

export interface _cart_removeProduct_model {
  type: 'remove_item';
  data: {
    itemType: 'product';
    productId: number;
    colorId: number;
  };
}

export interface _Cart_updateItem_Action {
  payload:
    | _cart_addProduct_model
    | _cart_removeProduct_model
    | _cart_updateProduct_qty_model
    | _cart_updateGift_qty_model
    | _cart_addGift_model
    | _cart_removeGift_model;
}

// ---------------- GIFT ------------------------

export interface _cart_updateGift_qty_model {
  type: 'update_qty';
  data: {
    itemType: 'giftCard';
    giftId: number;
    qty: number;
  };
}

export interface _cart_addGift_model {
  type: 'add_item';
  data: {
    cartItemId: number;
    itemType: 'giftCard';
    giftId: number;
    qty: number;
    seName: string;
    giftPrice: number;
    giftImageURL: string;
    sender: {
      name: string;
      email: string;
    };
    recipient: {
      name: string;
      email: string;
    };
    messageForRecipient: string;
  };
}
export interface _cart_removeGift_model {
  type: 'remove_item';
  data: {
    itemType: 'giftCard';
    giftId: number;
  };
}

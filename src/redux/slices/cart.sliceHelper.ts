import { _Cart_Initials } from './cart.slice';
import {
  _cart_add_item_model,
  _cart_update_qty_model,
  _InCart_Item_attributes_model,
  _InCart_Item_model,
} from './slices';

export const calculatePriceNqty = (payload: _cart_add_item_model) => {
  let newTotalPrice = 0;
  let newTotalQty = 0;

  payload.data.attributes.map((att) => {
    newTotalPrice = newTotalPrice + att.qty * payload.data.productPrice;
    newTotalQty = newTotalQty + att.qty;
  });

  return {
    newTotalPrice,
    newTotalQty,
  };
};

export const emptyTheCart = (state: _Cart_Initials) => {
  return (state.corporateStoreCart.products = []);
};

export const updateProductAttributes = (
  indexToUpdate: number,
  state: _Cart_Initials,
  payload: _cart_add_item_model,
) => {
  const updatedAttributes: _InCart_Item_attributes_model[] = [
    ...state.corporateStoreCart.products[indexToUpdate].attributes,
  ];

  for (const upcomingAtt of payload.data.attributes) {
    const attIndex = updatedAttributes.findIndex(
      (currentAtt) => currentAtt.size === upcomingAtt.size,
    );
    if (attIndex > -1) {
      updatedAttributes[attIndex] = {
        ...updatedAttributes[attIndex],
        qty: upcomingAtt.qty,
        priceOfqty:
          upcomingAtt.qty *
          state.corporateStoreCart.products[indexToUpdate].productPrice,
      };
      continue;
    }
    updatedAttributes.push(upcomingAtt);
  }

  return updatedAttributes;
};

export const updateAttrPricQtyInItem = (
  item: _InCart_Item_model,
  payload: _cart_update_qty_model,
  newSubTotal: number,
) => {
  let updatedTotalPrice = 0;
  let updatedTotalQty = 0;
  const updatedAttributes: _InCart_Item_attributes_model[] =
    item.attributes.map((att) => {
      if (att.size === payload.data.attributes.size) {
        updatedTotalPrice =
          updatedTotalPrice + payload.data.attributes.qty * item.productPrice;
        updatedTotalQty = updatedTotalQty + payload.data.attributes.qty;
        return {
          ...att,
          qty: payload.data.attributes.qty,
          priceOfqty: payload.data.attributes.qty * item.productPrice,
        };
      }

      updatedTotalPrice = updatedTotalPrice + att.qty * item.productPrice;
      updatedTotalQty = updatedTotalQty + att.qty;

      return att;
    });

  return {
    updatedItem: {
      ...item,
      productTotalPrice: updatedTotalPrice,
      productTotalQty: updatedTotalQty,
      attributes: updatedAttributes,
    },
    subTotal: newSubTotal + updatedTotalPrice,
  };
};

export const removeSizeFromProducts = (
  item: _InCart_Item_model,
  payload: _cart_update_qty_model,
  newSubTotal: number,
) => {
  const updatedAttributes = item.attributes.filter(
    (att) => att.size !== payload.data.attributes.size,
  );

  const updatedTotalPrice = updatedAttributes.reduce(
    (total, upt) => total + upt.priceOfqty,
    0,
  );
  const updatedTotalQty = updatedAttributes.reduce(
    (total, upt) => total + upt.qty,
    0,
  );
  return {
    updatedItem: {
      ...item,
      productTotalPrice: updatedTotalPrice,
      productTotalQty: updatedTotalQty,
      attributes: updatedAttributes,
    },
    subTotal: newSubTotal + updatedTotalPrice,
  };
};

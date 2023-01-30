import { _Cart_Initials } from './cart.slice';
import {
  _cart_addGift_model,
  _cart_addProduct_model,
  _cart_updateProduct_qty_data,
  _InCart_productAttributes_model,
  _InCart_Product_model
} from './_slices';

import {
  _cart_removeGift_model,
  _cart_removeProduct_model,
  _cart_updateGift_qty_model,
  _cart_updateProduct_qty_model,
  _InCart_GiftCard_model
} from './_slices';

export const calculatePriceNqty = (
  payload: _cart_addProduct_model | _cart_addGift_model,
) => {
  let newTotalPrice = 0;
  let newTotalQty = 0;

  if (payload.data.itemType === 'product') {
    const product = { ...payload.data };

    payload.data.attributes.map((att) => {
      newTotalPrice = newTotalPrice + att.qty * product.productPrice;
      newTotalQty = newTotalQty + att.qty;
    });
  }

  if (payload.data.itemType === 'giftCard') {
    const gift = { ...payload.data };

    newTotalPrice = gift.giftPrice * gift.qty;
    newTotalQty = gift.qty;
  }

  return {
    newTotalPrice,
    newTotalQty,
  };
};

export const emptyTheCart = (state: _Cart_Initials) => {
  return (state.corporateStoreCart.items = []);
};

export const updateAttrPricQty_product = (
  item: _InCart_Product_model,
  product: _cart_updateProduct_qty_data,
) => {
  let updatedTotalPrice = 0;
  let updatedTotalQty = 0;
  const updatedAttributes: _InCart_productAttributes_model[] =
    item.attributes.map((att) => {
      if (att.size === product.attributes.size) {
        updatedTotalPrice =
          updatedTotalPrice + product.attributes.qty * item.itemPrice;
        updatedTotalQty = updatedTotalQty + product.attributes.qty;
        return {
          ...att,
          qty: product.attributes.qty,
          priceOfqty: product.attributes.qty * item.itemPrice,
        };
      }

      updatedTotalPrice = updatedTotalPrice + att.qty * item.itemPrice;
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
    subTotal: updatedTotalPrice,
  };
};

export const removeSizefrom_products = (
  item: _InCart_Product_model,
  product: _cart_updateProduct_qty_data,
) => {
  const updatedAttributes = item.attributes.filter(
    (att) => att.size !== product.attributes.size,
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
    subTotal: updatedTotalPrice,
  };
};

export const findIndexOfItemInCart = (
  state: _Cart_Initials,
  payload:
    | _cart_removeProduct_model
    | _cart_removeGift_model
    | _cart_addProduct_model
    | _cart_addGift_model
    | _cart_updateProduct_qty_model
    | _cart_updateGift_qty_model,
) => {
  return state.corporateStoreCart.items.findIndex((item) => {
    if (item.type === 'product' && payload.data.itemType === 'product') {
      const product = payload.data;
      return (
        item.productId === product.productId && item.colorId === product.colorId
      );
    }

    if (item.type === 'giftCard' && payload.data.itemType === 'giftCard') {
      const gift = payload.data;
      return item.giftId === gift.giftId;
    }

    return false;
  });
};

export const addItemToCart = (
  payload: _cart_addProduct_model | _cart_addGift_model,
): {
  itemToAdd: _InCart_Product_model | _InCart_GiftCard_model;
  subTotal: number;
} => {
  const { newTotalPrice, newTotalQty } = calculatePriceNqty(payload);
  let item: _InCart_GiftCard_model | _InCart_Product_model;
  if (payload.data.itemType === 'product') {
    item = {
      type: 'product',
      cartItemId: payload.data.cartItemId,
      seName: payload.data.seName,
      name: payload.data.productName,
      productId: payload.data.productId,
      sku: payload.data.sku,
      colorId: payload.data.colorId,
      colorImageURL: payload.data.colorImageURL,
      colorName: payload.data.colorName,
      itemPrice: payload.data.productPrice,
      itemTotalPrice: newTotalPrice,
      itemTotalQty: newTotalQty,
      attributes: payload.data.attributes,
    };
  }

  if (payload.data.itemType === 'giftCard') {
    item = {
      type: 'giftCard',
      cartItemId: payload.data.cartItemId,
      seName: payload.data.seName,
      name: payload.data.seName,
      giftId: payload.data.giftId,
      giftImageURL: payload.data.giftImageURL,
      recipient: payload.data.recipient,
      sender: payload.data.sender,
      messageForRecipient: payload.data.messageForRecipient,
      itemPrice: payload.data.giftPrice,
      itemTotalPrice: newTotalPrice,
      itemTotalQty: newTotalQty,
    };
  }

  return {
    itemToAdd: item!,
    subTotal: newTotalPrice,
  };
};

export const updateItemToCart = (
  state: _Cart_Initials,
  payload: _cart_addProduct_model | _cart_addGift_model,
  indexToUpdate: number,
): _InCart_Product_model | _InCart_GiftCard_model => {
  let itemToUpdate = state.corporateStoreCart.items[indexToUpdate];

  if (
    payload.data.itemType === 'giftCard' &&
    itemToUpdate.type === 'giftCard'
  ) {
    itemToUpdate = {
      ...itemToUpdate,
      itemTotalQty: payload.data.qty + itemToUpdate.itemTotalQty,
      itemTotalPrice:
        (payload.data.qty + itemToUpdate.itemTotalQty) * itemToUpdate.itemPrice,
    };
  }

  if (payload.data.itemType === 'product' && itemToUpdate.type === 'product') {
    let productTotalQty = 0;

    const updatedAttributes: _InCart_productAttributes_model[] = [
      ...itemToUpdate.attributes,
    ];

    for (const upcomingAtt of payload.data.attributes) {
      const attIndex = updatedAttributes.findIndex(
        (currentAtt) => currentAtt.size === upcomingAtt.size,
      );
      if (attIndex > -1) {
        updatedAttributes[attIndex] = {
          ...updatedAttributes[attIndex],
          qty: upcomingAtt.qty,
          priceOfqty: upcomingAtt.qty * itemToUpdate.itemPrice,
        };
        productTotalQty += upcomingAtt.qty;
        continue;
      }
      productTotalQty += upcomingAtt.qty;
      updatedAttributes.push(upcomingAtt);
    }

    itemToUpdate = {
      ...itemToUpdate,
      attributes: updatedAttributes,
      itemTotalQty: productTotalQty,
      itemTotalPrice: productTotalQty * itemToUpdate.itemPrice,
    };
  }

  return itemToUpdate;
};

export const updateItemPriceNqty = (
  state: _Cart_Initials,
  payload: _cart_updateProduct_qty_model | _cart_updateGift_qty_model,
  indexOfExistingItem: number,
) => {
  let subTotal = 0;
  const itemsWithUpdatedQty_n_Price = state.corporateStoreCart.items.map(
    (item, index) => {
      if (index === indexOfExistingItem) {
        if (item.type === 'product' && payload.data.itemType === 'product') {
          const product = payload.data;
          if (product.attributes.qty === 0) {
            const { subTotal: productTotal, updatedItem } =
              removeSizefrom_products(item, product);
            subTotal += productTotal;
            return updatedItem;
          }

          const { subTotal: productTotal, updatedItem } =
            updateAttrPricQty_product(item, product);
          subTotal += productTotal;
          return updatedItem;
        }

        if (item.type === 'giftCard' && payload.data.itemType === 'giftCard') {
          const gift = payload.data;
          subTotal += gift.qty * item.itemPrice;
          return {
            ...item,
            itemTotalPrice: gift.qty * item.itemPrice,
            itemTotalQty: gift.qty,
          };
        }
      }

      subTotal += item.itemTotalPrice;
      return item;
    },
  );

  return { items: itemsWithUpdatedQty_n_Price, subTotal };
};

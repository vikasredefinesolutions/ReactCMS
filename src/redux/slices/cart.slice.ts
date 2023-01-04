import { createSlice } from '@reduxjs/toolkit';
import { _CartItem } from '@type/APIs/cart.res';
import { fetchCartDetails } from 'redux/asyncActions/cart.async';
import {
  calculatePriceNqty,
  emptyTheCart,
  removeSizeFromProducts,
  updateAttrPricQtyInItem,
  updateProductAttributes,
} from './cart.sliceHelper';
import { _Cart_update_Action, _InCart_Item_model } from './slices';

export interface _Cart_Initials {
  cart: _CartItem[] | null;
  corporateStoreCart: {
    products: _InCart_Item_model[];
    order: {
      tax: number;
      subTotal: number;
      shipping: number;
      total: number;
      qty: number;
    };
  };
}

const initialState: _Cart_Initials = {
  cart: [],
  corporateStoreCart: {
    products: [],
    order: {
      qty: 0,
      tax: 0,
      subTotal: 0,
      shipping: 0,
      total: 0,
    },
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_update: (state, { payload }: _Cart_update_Action) => {
      if (payload.type === 'add_item') {
        if (state.corporateStoreCart.products.length === 0) {
          const { newTotalPrice, newTotalQty } = calculatePriceNqty(payload);

          state.corporateStoreCart.products = [
            {
              ...payload.data,
              productTotalQty: newTotalQty,
              productTotalPrice: newTotalPrice,
            },
          ];
          state.corporateStoreCart.order.subTotal = newTotalPrice;
          state.corporateStoreCart.order.total =
            newTotalPrice +
            state.corporateStoreCart.order.tax +
            state.corporateStoreCart.order.shipping;
          return;
        }

        const itemAlreadyExistsIndex =
          state.corporateStoreCart.products.findIndex(
            (item) =>
              item.productId === payload.data?.productId &&
              item.colorId === payload.data.colorId,
          );

        if (itemAlreadyExistsIndex > -1) {
          const newTotalPrice = state.corporateStoreCart.products.reduce(
            (total, item) => total + item.productTotalPrice,
            0,
          );

          let itemToUpdate =
            state.corporateStoreCart.products[itemAlreadyExistsIndex];

          itemToUpdate = {
            ...itemToUpdate,
            attributes: updateProductAttributes(
              itemAlreadyExistsIndex,
              state,
              payload,
            ),
          };

          state.corporateStoreCart.order.subTotal = newTotalPrice;
          state.corporateStoreCart.order.total =
            newTotalPrice +
            state.corporateStoreCart.order.tax +
            state.corporateStoreCart.order.shipping;

          return;
        }

        // If item do not exist, added it to the products list
        const { newTotalPrice, newTotalQty } = calculatePriceNqty(payload);

        state.corporateStoreCart.products.push({
          ...payload.data,
          productTotalPrice: newTotalPrice,
          productTotalQty: newTotalQty,
        });
        state.corporateStoreCart.order.subTotal = newTotalPrice;
        state.corporateStoreCart.order.total =
          newTotalPrice +
          state.corporateStoreCart.order.tax +
          state.corporateStoreCart.order.shipping;

        return;
      }

      if (!state.corporateStoreCart?.products) {
        return; // Don't proceed further if Items in Cart are empty.
      }

      if (payload.type === 'remove_item') {
        const itemIndex = state.corporateStoreCart.products.findIndex(
          (item) =>
            item.productId === payload.data?.productId &&
            item.colorId === payload.data.colorId,
        );

        if (itemIndex > -1) {
          const productsArrWithRemovedItem: _InCart_Item_model[] =
            state.corporateStoreCart.products.filter(
              (item, index) => index !== itemIndex,
            );

          if (productsArrWithRemovedItem.length === 0) {
            emptyTheCart(state);
            return;
          }

          const newSubTotal = productsArrWithRemovedItem.reduce(
            (total, item) => total + item.productTotalPrice,
            0,
          );

          state.corporateStoreCart.order.subTotal = newSubTotal;
          state.corporateStoreCart.order.total =
            newSubTotal +
            state.corporateStoreCart.order.tax +
            state.corporateStoreCart.order.shipping;
          state.corporateStoreCart.products = productsArrWithRemovedItem;
        }

        return;
      }

      if (payload.type === 'update_qty') {
        const itemIndex = state.corporateStoreCart.products.findIndex(
          (item) =>
            item.productId === payload.data?.productId &&
            item.colorId === payload.data.colorId,
        );

        if (itemIndex > -1) {
          let newSubTotal = 0;
          const productsWithUpdatedQty_n_Price: _InCart_Item_model[] =
            state.corporateStoreCart.products.map((item, index) => {
              if (index === itemIndex) {
                if (payload.data.attributes.qty === 0) {
                  const { subTotal, updatedItem } = removeSizeFromProducts(
                    item,
                    payload,
                    newSubTotal,
                  );
                  newSubTotal = subTotal;
                  return updatedItem;
                }

                const { subTotal, updatedItem } = updateAttrPricQtyInItem(
                  item,
                  payload,
                  newSubTotal,
                );
                newSubTotal = subTotal;
                return updatedItem;
              }

              newSubTotal = newSubTotal + item.productTotalPrice;
              return item;
            });

          state.corporateStoreCart.order.subTotal = newSubTotal;
          state.corporateStoreCart.order.total =
            newSubTotal +
            state.corporateStoreCart.order.tax +
            state.corporateStoreCart.order.shipping;
          state.corporateStoreCart.products = productsWithUpdatedQty_n_Price;
        }

        return;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartDetails.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;

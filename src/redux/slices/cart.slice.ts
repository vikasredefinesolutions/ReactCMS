import { createSlice } from '@reduxjs/toolkit';
import { _CartItem } from '@type/APIs/cart.res';
import { fetchCartDetails } from 'redux/asyncActions/cart.async';
import {
  addItemToCart,
  emptyTheCart,
  findIndexOfItemInCart,
  updateItemPriceNqty,
  updateItemToCart,
} from './cart.sliceHelper';
import {
  _Cart_updateItem_Action,
  _Cart_userUpdate_Action,
  _InCart_GiftCard_model,
  _InCart_Product_model,
} from './_slices';

export interface _Cart_Initials {
  cart: _CartItem[] | null;
  corporateStoreCart: {
    items: Array<_InCart_Product_model | _InCart_GiftCard_model>;
    order: {
      tax: number;
      subTotal: number;
      shipping: number;
      total: number;
      qty: number;
    };
    products?: {
      seName: string;
      colorImageURL: string;
      productTotalQty: number;
      productTotalPrice: number;
      productName: string;
    }[];
  };
  guestId: number;
  email: string;
  showThankYou: boolean;
  isCustomerExist: boolean;
  isGuestCustomer: boolean;
  discount: {
    coupon: null | string;
    amount: null | number;
    percentage: null | number;
  } | null;
  userCreditBalance: {
    useBalance: boolean;
    allowedBalance: number;
  };
}

const corporateStoreCartInitial = {
  items: [],
  order: {
    qty: 0,
    tax: 0,
    subTotal: 0,
    shipping: 0,
    total: 0,
  },
};

const initialState: _Cart_Initials = {
  cart: [],
  corporateStoreCart: corporateStoreCartInitial,
  guestId: 0,
  email: '',
  isCustomerExist: false,
  showThankYou: false,
  isGuestCustomer: false,
  discount: null,
  userCreditBalance: {
    useBalance: false,
    allowedBalance: 0,
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_userUpdate: (state, { payload }: _Cart_userUpdate_Action) => {
      if (payload.type === 'noMoreAGuest') {
        state.isGuestCustomer = payload.data.isGuestCustomer;
      }

      if (payload.type === 'guestLogin') {
        state.isCustomerExist = payload.data.isCustomerExist;
        state.guestId = payload.data.guestId;
        state.email = payload.data.email;
        state.showThankYou = payload.data.showThankYou;
        state.isGuestCustomer = payload.data.isGuestCustomer;
      }
    },

    cart_update_item: (state, { payload }: _Cart_updateItem_Action) => {
      const orderTax = state.corporateStoreCart.order.tax;
      const orderShipping = state.corporateStoreCart.order.shipping;

      if (payload.type === 'add_item') {
        if (state.corporateStoreCart.items.length === 0) {
          const { subTotal, itemToAdd } = addItemToCart(payload);

          state.corporateStoreCart.items = [itemToAdd];
          state.corporateStoreCart.order.subTotal = subTotal;
          state.corporateStoreCart.order.total =
            subTotal + orderTax + orderShipping;
          return;
        }

        const itemAlreadyExistsIndex = findIndexOfItemInCart(state, payload);

        if (itemAlreadyExistsIndex > -1) {
          const itemToUpdate = updateItemToCart(
            state,
            payload,
            itemAlreadyExistsIndex,
          );

          state.corporateStoreCart.items[itemAlreadyExistsIndex] = itemToUpdate;

          // Here item must be updated first then total must be done.
          const newSubTotal = state.corporateStoreCart.items.reduce(
            (total, item) => total + item.itemTotalPrice,
            0,
          );

          state.corporateStoreCart.order.subTotal = newSubTotal;
          state.corporateStoreCart.order.total =
            newSubTotal + orderTax + orderShipping;
          return;
        }

        // If item do not exist, added it to the products list
        const { subTotal, itemToAdd } = addItemToCart(payload);

        state.corporateStoreCart.items.push(itemToAdd);
        state.corporateStoreCart.order.subTotal = subTotal;
        state.corporateStoreCart.order.total =
          subTotal + orderTax + orderShipping;

        return;
      }

      if (!state.corporateStoreCart.items) {
        return; // Don't proceed further if Items in Cart are empty.
      }

      if (payload.type === 'remove_item') {
        const itemIndex = findIndexOfItemInCart(state, payload);

        if (itemIndex > -1) {
          const remainingItems = state.corporateStoreCart.items.filter(
            (item, index) => index !== itemIndex,
          );

          if (remainingItems.length === 0) {
            emptyTheCart(state);
            return;
          }

          const newSubTotal = remainingItems.reduce(
            (total, item) => total + item.itemTotalPrice,
            0,
          );

          state.corporateStoreCart.items = remainingItems;
          state.corporateStoreCart.order.subTotal = newSubTotal;
          state.corporateStoreCart.order.total =
            newSubTotal + orderTax + orderShipping;
        }

        return;
      }

      if (payload.type === 'update_qty') {
        const indexOfExistingItem = findIndexOfItemInCart(state, payload);

        if (indexOfExistingItem > -1) {
          const { subTotal, items } = updateItemPriceNqty(
            state,
            payload,
            indexOfExistingItem,
          );

          state.corporateStoreCart.order.subTotal = subTotal;
          state.corporateStoreCart.order.total =
            subTotal + orderTax + orderShipping;
          state.corporateStoreCart.items = items;
        }

        return;
      }
    },
    applyCoupon: (state, { payload }) => {
      state.discount = payload;
    },
    employeePriceQtyUpdate: (state, { payload }) => {
      state.cart = payload;
    },
    logoutClearCart: (state) => {
      state.cart = null;
      state.corporateStoreCart = corporateStoreCartInitial;
      state.guestId = 0;
      state.email = '';
      state.isCustomerExist = false;
      state.showThankYou = false;
      state.isGuestCustomer = false;
      state.discount = null;
    },
    customerCreditBalanceUpdate: (state, { payload }) => {
      state.userCreditBalance = payload;
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

import { createSlice } from '@reduxjs/toolkit';
import { CartProducts } from '@type/APIs/cart.res';
import { fetchCartDetails } from '../asyncActions/cart.async';

export interface CartSliceType {
  cart: CartProducts;
}

const initialState: CartSliceType = {
  cart: [],
};

export const storeSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartDetails.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export const storeActions = storeSlice.actions;

export default storeSlice.reducer;

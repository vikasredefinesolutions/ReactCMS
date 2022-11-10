import { createSlice } from '@reduxjs/toolkit';
import { fetchCartDetails } from '../asyncActions/cart.async';

export interface CartSliceType {
  cart: Array<string>;
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

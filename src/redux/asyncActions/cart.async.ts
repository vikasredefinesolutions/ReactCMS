import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartReq } from 'definations/APIs/cart.req';
import { addToCart, FetchCartDetails } from 'services/cart.service';

export const fetchCartDetails = createAsyncThunk(
  'cart/details',
  async (customerId: number) => {
    try {
      const cart = await FetchCartDetails(customerId);
      return cart;
    } catch (error) {
      throw new Error('No Details found!!!');
    }
  },
);

export const AddToCart = async (payload: CartReq) => {
  try {
    const cart = await addToCart(payload);
    return cart;
  } catch (error) {
    throw new Error('Try Again!!!');
  }
};

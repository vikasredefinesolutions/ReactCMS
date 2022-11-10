import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartReq } from '../../defination/APIs/cart.req';
import { addToCart, fetchCart } from '../../services/cart.service';

export const fetchCartDetails = createAsyncThunk(
  'cart/details',
  async (customerId: number) => {
    try {
      const cart = await fetchCart(customerId);
      return cart;
    } catch (error) {
      throw new Error('No Details found!!!');
    }
  },
);

export const AddToCart = createAsyncThunk(
  'addToCart',
  async (payload: CartReq) => {
    try {
      const cart = await addToCart(payload);
      return cart;
    } catch (error) {
      throw new Error('Try Again!!!');
    }
  },
);

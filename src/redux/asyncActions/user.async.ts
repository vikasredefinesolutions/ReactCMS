import { getStoreCustomer as getCustomer } from '../../services/user.service';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStoreCustomer = createAsyncThunk(
  'user/details',
  async (customerId: number) => {
    try {
      const customer = await getCustomer(customerId);
      return customer;
    } catch (error) {
      throw new Error('No store found!!!');
    }
  },
);

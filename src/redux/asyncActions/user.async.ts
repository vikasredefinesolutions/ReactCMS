import { GetStoreCustomer } from 'services/user.service';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStoreCustomer = createAsyncThunk(
  'user/details',
  async (customerId: number) => {
    try {
      const customer = await GetStoreCustomer(customerId);
      return customer;
    } catch (error) {
      throw new Error('No store found!!!');
    }
  },
);

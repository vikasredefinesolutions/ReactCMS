import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchBrands } from 'services/brand.service';

export const fetchBrandList = createAsyncThunk(
  'brand/details',
  async (storeId: string) => {
    try {
      const brand = await FetchBrands(storeId);
      return brand;
    } catch (error) {
      throw new Error('No store found!!!');
    }
  },
);

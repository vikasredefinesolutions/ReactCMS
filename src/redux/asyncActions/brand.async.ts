import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBrands } from 'services/brand.service';

export const fetchBrandList = createAsyncThunk(
  'brand/details',
  async (storeId: string) => {
    try {
      const brand = await fetchBrands(storeId);
      return brand;
    } catch (error) {
      throw new Error('No store found!!!');
    }
  },
);

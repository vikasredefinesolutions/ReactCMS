import { createAsyncThunk } from '@reduxjs/toolkit';
import { PageResponseType } from '../../defination/app.type';
import { GetStoreID } from '../../services/home.service';

export const FetchStoreDetails = createAsyncThunk(
  'redefineStore/details',
  async (payload: { domain: string }) => {
    try {
      const store = await GetStoreID(payload.domain);

      return store;
    } catch (error) {
      throw new Error('No store found!!!');
    }
  },
);

export const SetPageType = createAsyncThunk(
  'pageType/details',
  (payload: PageResponseType) => {
    return { payload };
  },
);

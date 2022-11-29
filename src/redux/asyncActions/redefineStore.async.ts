import { createAsyncThunk } from '@reduxjs/toolkit';
import { PageResponseType } from 'definations/app.type';

export const SetPageType = createAsyncThunk(
  'pageType/details',
  (payload: PageResponseType) => {
    return { payload };
  },
);

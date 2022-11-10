import { createSlice } from '@reduxjs/toolkit';
import { _SeName } from 'constants/store.constant';
import { PageResponseType, _Show } from 'definations/app.type';
import { showComponents } from 'mock/store.mock';
import { __domain } from '../../page.config';
import {
  FetchStoreDetails,
  SetPageType,
} from '../asyncActions/redefineStore.async';

// Define a type for the slice state
export interface _RedesignStore {
  id: number | null;
  layout: null | string;
  storeTypeId: number | null;
  display: _Show;
  companyName: string;
  currency: string;
  seName: string;
  pageType: PageResponseType;
}

// Define the initial state using that type
const initialState: _RedesignStore = {
  id: null,
  layout: null,
  storeTypeId: null,
  display: showComponents,
  companyName: '',
  currency: '$',
  seName: _SeName.nike,
  pageType: {} as PageResponseType,
};

export const storeSlice = createSlice({
  name: 'redesignStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchStoreDetails.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.layout = __domain.layout;
    });
    builder.addCase(SetPageType.fulfilled, (state, action) => {
      state.pageType = action.payload.payload;
    });
  },
});

export const redefineStoreActions = storeSlice.actions;

export default storeSlice.reducer;

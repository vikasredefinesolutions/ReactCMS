import { createSlice } from '@reduxjs/toolkit';
import { _SeName } from 'constants/store.constant';
import { _StoreMenu } from 'definations/APIs/header.res';
import { PageResponseType, _Show } from 'definations/app.type';
import { _StoreReturnType } from 'definations/store.type';
import { showComponents } from 'mock/store.mock';
import { __domain } from 'page.config';
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
  pathName: string;
  companyName: string;
  currency: string;
  seName: string;
  pageType: PageResponseType;
  view: 'DESKTOP' | 'MOBILE';
  menuItems: _StoreMenu[] | null;
}

// Define the initial state using that type
const initialState: _RedesignStore = {
  id: null,
  layout: null,
  storeTypeId: null,
  display: showComponents,
  pathName: '',
  companyName: '',
  currency: '$',
  seName: _SeName.nike,
  pageType: {} as PageResponseType,
  view: 'DESKTOP',
  menuItems: null,
};

export const storeSlice = createSlice({
  name: 'redesignStore',
  initialState,
  reducers: {
    store_storeDetails: (
      state,
      action: {
        payload: {
          store: _StoreReturnType;
          menuItems: _StoreMenu[] | null;
        };
      },
    ) => {
      const store = action.payload.store;

      state.id = store.storeId;
      state.layout = store.layout;
      state.pathName = store.pathName;

      // state.pageType = store.pageType;
      state.menuItems = action.payload.menuItems;
    },

    setView: (
      state,
      action: {
        payload: 'DESKTOP' | 'MOBILE';
      },
    ) => {
      state.view = action.payload;
    },
  },
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

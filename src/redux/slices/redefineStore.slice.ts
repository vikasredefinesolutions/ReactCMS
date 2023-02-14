import { StoreLayout } from '@constants/enum';
import { createSlice } from '@reduxjs/toolkit';
import { PageResponseType, _Show } from 'definations/app.type';
import { CartCharges, _StoreReturnType } from 'definations/store.type';
import { layoutToShow } from 'helpers/common.helper';
import { showComponents } from 'mock/store.mock';
import { __domain } from 'page.config';
import { SetPageType } from '../asyncActions/redefineStore.async';

// Define a type for the slice state
export interface _RedesignStore {
  id: number | null;
  layout: null | string;
  storeTypeId: number | null;
  storeName: string | null;
  display: _Show;
  pathName: string;
  companyName: string;
  currency: string;
  pageType: PageResponseType;
  view: 'DESKTOP' | 'MOBILE';
  isAttributeSaparateProduct: boolean;
  cartCharges: null | CartCharges;
  logoAlt: string | null;
  logoUrl: string | null;
}

// Define the initial state using that type
const initialState: _RedesignStore = {
  id: null,
  isAttributeSaparateProduct: false,
  layout: null,
  storeTypeId: StoreLayout.StoreBuilderStore,
  storeName: '',
  display: showComponents,
  pathName: '',
  companyName: '',
  currency: '$',
  pageType: {} as PageResponseType,
  view: 'DESKTOP',
  cartCharges: null,
  logoAlt: null,
  logoUrl: null,
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
        };
      },
    ) => {
      const store = action.payload.store;

      //--------------------------------------------------------
      state.id = store.storeId;
      state.pathName = store.pathName;
      state.isAttributeSaparateProduct =
        action.payload.store.isAttributeSaparateProduct;
      state.layout = layoutToShow({
        layout: action.payload.store.code,
        showProd: __domain.isSiteLive,
      });
      state.cartCharges = store.cartCharges;
      state.storeTypeId = store.storeTypeId;
      state.storeName = store.storeName;
    },

    change_Layout: (
      state,
      action: {
        payload: string;
      },
    ) => {
      state.layout = action.payload;
    },

    store_setAppView: (
      state,
      action: {
        payload: 'DESKTOP' | 'MOBILE';
      },
    ) => {
      state.view = action.payload;
    },

    updatePageType: (state, { payload }) => {
      state.pageType = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SetPageType.fulfilled, (state, action) => {
      state.pageType = action.payload.payload;
    });
  },
});

export const redefineStoreActions = storeSlice.actions;

export default storeSlice.reducer;

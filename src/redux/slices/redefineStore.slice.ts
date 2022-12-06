import { createSlice } from '@reduxjs/toolkit';
import { _SeName } from 'constants/store.constant';
import { _Brands, _StoreMenu, _TransformedThemeConfig } from 'definations/APIs/header.res';
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
  display: _Show;
  pathName: string;
  companyName: string;
  currency: string;
  seName: string;
  pageType: PageResponseType;
  view: 'DESKTOP' | 'MOBILE';
  menuItems: _StoreMenu[] | null;
  brands: _Brands[] | null;
  isAttributeSaparateProduct: boolean;
  cartCharges: null | CartCharges;
  configs: null | _TransformedThemeConfig;
}

// Define the initial state using that type
const initialState: _RedesignStore = {
  id: null,
  isAttributeSaparateProduct: false,
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
  brands: null,
  cartCharges: null,
  configs: null,
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
          brands: _Brands[] | null;
          configs: _TransformedThemeConfig | null;
        };
      },
    ) => {
      const store = action.payload.store;
      state.id = store.storeId;
      state.layout = store.layout;
      state.pathName = store.pathName;
      state.brands = action.payload.brands;
      state.isAttributeSaparateProduct =
        action.payload.store.isAttributeSaparateProduct;
      state.layout = layoutToShow({
        layout: action.payload.store.code,
        showProd: __domain.isSiteLive,
      });
      state.cartCharges = store.cartCharges;
      // state.pageType = store.pageType;
      state.menuItems = action.payload.menuItems;
      state.configs = action.payload.configs;
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
    builder.addCase(SetPageType.fulfilled, (state, action) => {
      state.pageType = action.payload.payload;
    });
  },
});

export const redefineStoreActions = storeSlice.actions;

export default storeSlice.reducer;

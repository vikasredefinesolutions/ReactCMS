import { createSlice } from '@reduxjs/toolkit';
import { _TransformedThemeConfig } from 'definations/APIs/header.res';
import { PageResponseType, _Show } from 'definations/app.type';
import { CartCharges, _StoreReturnType } from 'definations/store.type';
import { layoutToShow } from 'helpers/common.helper';
import { showComponents } from 'mock/store.mock';
import { __domain } from 'page.config';
import { _MenuItems } from 'show.type';
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
  pageType: PageResponseType;
  view: 'DESKTOP' | 'MOBILE';
  menuItems: _MenuItems | null;
  isAttributeSaparateProduct: boolean;
  cartCharges: null | CartCharges;
  configs: {
    header: _TransformedThemeConfig | null;
  };
}

// Define the initial state using that type
const initialState: _RedesignStore = {
  id: null,
  isAttributeSaparateProduct: false,
  layout: 'cg',
  storeTypeId: 2,
  display: showComponents,
  pathName: '',
  companyName: '',
  currency: '$',
  pageType: {} as PageResponseType,
  view: 'DESKTOP',
  menuItems: null,
  cartCharges: null,
  configs: {
    header: null,
  },
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
          menuItems: _MenuItems | null;
          configs: {
            header: _TransformedThemeConfig | null;
          };
        };
      },
    ) => {
      const store = action.payload.store;

      //--------------------------------------------------------
      state.id = store.storeId;
      state.layout = store.layout;
      state.pathName = store.pathName;
      state.isAttributeSaparateProduct =
        action.payload.store.isAttributeSaparateProduct;
      state.layout = layoutToShow({
        layout: action.payload.store.code,
        showProd: __domain.isSiteLive,
      });
      state.cartCharges = store.cartCharges;
      state.menuItems = action.payload.menuItems;
      state.configs = action.payload.configs;
      state.storeTypeId = store.storeTypeId;
    },

    change_Layout: (
      state,
      action: {
        payload: string;
      },
    ) => {
      state.layout = action.payload;
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

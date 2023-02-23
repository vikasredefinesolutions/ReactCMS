import { createSlice } from '@reduxjs/toolkit';
import { GetlAllProductList } from '@type/productList.type';

export interface _wishList {
  cacheData: { [x: string]: GetlAllProductList[] | [] };
}

const initialState: _wishList = {
  cacheData: { i: [] },
};

const cacheSlice = createSlice({
  name: 'cacheSlice',
  initialState,
  reducers: {
    storeData: (
      state,
      action: {
        payload: { [x: string]: GetlAllProductList[] };
      },
    ) => {
      state.cacheData = { ...state.cacheData, ...action.payload };
    },
  },
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice.reducer;

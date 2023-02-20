import { createSlice } from '@reduxjs/toolkit';
import { WishlistType } from '@type/wishlist.type';

export interface _wishList {
  wishListData: WishlistType | [];
  brandId: number | null;
}

const initialState: _wishList = {
  wishListData: [],
  brandId: null,
};

const wishListSlice = createSlice({
  name: 'wishListSlice',
  initialState,
  reducers: {
    updateWishListData: (
      state,
      action: {
        payload: WishlistType;
      },
    ) => {
      state.wishListData = action.payload;
    },
    addWishList: (
      state,
      action: {
        payload: {
          id: number;
          customerId: number;
          productId: number;
          quantity: number;
          productName: string;
          color: string;
          price: number;
          colorLogoUrl: string;
          seName: string;
        };
      },
    ) => {
      state.wishListData = [...state.wishListData, action.payload];
    },
    removeWishListById: (
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) => {
      let data = state.wishListData.filter((wishList) => {
        if (wishList.id !== action.payload.id) {
          return wishList;
        }
      });
      state.wishListData = data;
    },
    updateBrandId: (
      state,
      action: {
        payload: {
          brandId: number;
        };
      },
    ) => {
      if (action.payload && action.payload.brandId) {
        state.brandId = action.payload.brandId;
      }
    },
  },
});

export const wishlistActions = wishListSlice.actions;

export default wishListSlice.reducer;

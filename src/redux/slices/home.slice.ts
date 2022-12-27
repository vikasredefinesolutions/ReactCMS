import { createSlice } from '@reduxjs/toolkit';
import { _FeaturedMoreImages } from '@type/APIs/storeDetails.res';

// Define a type for the slice state
export interface _HomeState {
  selected: {
    image: _FeaturedMoreImages[] | null;
    uImgIndex: string[];
  };
}

// Define the initial state using that type
const initialState: _HomeState = {
  selected: {
    image: null,
    uImgIndex: ['0-0-0'],
  },
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    showFeaturedImage: (
      state,
      action: {
        payload: {
          imageDetails: _FeaturedMoreImages;
          productIndex: number;
          uImgIndex: string;
        };
      },
    ) => {
      const productIndex = action.payload.productIndex;
      if (state.selected.image === null) {
        state.selected.image = [action.payload.imageDetails];
        state.selected.uImgIndex = [action.payload.uImgIndex];
        return;
      }
      state.selected.image[productIndex] = action.payload.imageDetails;
      state.selected.uImgIndex[productIndex] = action.payload.uImgIndex;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;

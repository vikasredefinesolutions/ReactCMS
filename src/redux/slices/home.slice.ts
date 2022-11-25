import { createSlice } from '@reduxjs/toolkit';
import { _FeaturedMoreImages } from '@type/APIs/storeDetails.res';

// Define a type for the slice state
export interface _HomeState {
  selected: {
    image: _FeaturedMoreImages[] | null;
  };
}

// Define the initial state using that type
const initialState: _HomeState = {
  selected: {
    image: null,
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
        };
      },
    ) => {
      const productIndex = action.payload.productIndex;
      if (state.selected.image === null) {
        state.selected.image = [action.payload.imageDetails];
      }
      state.selected.image[productIndex] = action.payload.imageDetails;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;

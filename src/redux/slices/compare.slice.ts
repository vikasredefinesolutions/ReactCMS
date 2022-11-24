import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  selectedImages:
    | {
        attibuteOptionId: number;
        label: string;
        url: string;
        index: number;
        seName: string;
      }[]
    | null;
}

// Define the initial state using that type
const initialState: _ModalState = {
  selectedImages: null,
};

export const compareSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showCompareImage: (
      state,
      action: {
        payload: {
          label: string;
          url: string;
          index: number;
          attibuteOptionId: number;
          seName: string;
        };
      },
    ) => {
      const image = action.payload;
      if (state.selectedImages === null) {
        state.selectedImages = [image];
      }
      if (state.selectedImages !== null) {
        state.selectedImages[image.index] = image;
      }
    },
  },
});

export const compareActions = compareSlice.actions;

export default compareSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  selectedImages: { label: string; url: string; index: number }[] | null;
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

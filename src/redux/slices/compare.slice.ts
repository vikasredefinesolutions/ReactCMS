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

interface _AddDisplayImage {
  type: 'ADD';
  data: {
    label: string;
    url: string;
    index: number;
    attibuteOptionId: number;
    seName: string;
  };
}

interface _RemoveDisplayImage {
  type: 'REMOVE';
  data: {
    index: number;
  };
}

interface _UpdateCompareDisplayImage_Action {
  payload: _AddDisplayImage | _RemoveDisplayImage;
}

export const compareSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    updateCompareDisplayImage: (
      state,
      { payload }: _UpdateCompareDisplayImage_Action,
    ) => {
      if (payload.type === 'ADD') {
        const indexToAdd = payload.data.index;
        if (state.selectedImages === null) {
          state.selectedImages = [payload.data];
          return;
        }
        if (state.selectedImages !== null) {
          state.selectedImages[indexToAdd] = payload.data;
          return;
        }
      }

      if (payload.type === 'REMOVE') {
        const itemToRemove = payload.data.index;
        if (state.selectedImages === null) {
          return;
        }
        if (state.selectedImages !== null) {
          state.selectedImages = state.selectedImages.filter(
            (image, index) => index !== itemToRemove,
          );
        }
      }
    },
  },
});

export const compareActions = compareSlice.actions;

export default compareSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  showModal: boolean;
  title: string;
  message: string;
}

// Define the initial state using that type
const initialState: _ModalState = {
  showModal: false,
  title: '',
  message: '',
};

export const successSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (
      state,
      action: {
        payload: {
          message: string;
          title: string;
        };
      },
    ) => {
      state.showModal = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },

    hideModal: (state) => {
      state.showModal = false;
      state.title = '';
      state.message = '';
    },
  },
});

export const successActions = successSlice.actions;

export default successSlice.reducer;

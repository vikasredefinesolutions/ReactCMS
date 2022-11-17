import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  showModal: boolean;
  type: string;
  message: string;
}

// Define the initial state using that type
const initialState: _ModalState = {
  showModal: false,
  type: '',
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
          type: string;
        };
      },
    ) => {
      state.showModal = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideModal: (
        state,
        action: {},
      ) => {
        state.showModal = false;
        state.type = '';
        state.message = '';
      }
  },
});

export const successActions = successSlice.actions;

export default successSlice.reducer;

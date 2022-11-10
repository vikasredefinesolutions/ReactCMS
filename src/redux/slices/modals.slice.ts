import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  sideMenu: boolean;
}

// Define the initial state using that type
const initialState: _ModalState = {
  sideMenu: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleSideMenu: (
      state,
      action: {
        payload: boolean;
      },
    ) => {
      state.sideMenu = action.payload;
    },
  },
});

export const modalActions = modalsSlice.actions;

export default modalsSlice.reducer;

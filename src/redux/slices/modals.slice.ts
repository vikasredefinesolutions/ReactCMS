import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface _ModalState {
  sideMenu: 'OPEN' | 'CLOSE';
}

// Define the initial state using that type
const initialState: _ModalState = {
  sideMenu: 'CLOSE',
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleSideMenu: (
      state,
      action: {
        payload: 'OPEN' | 'CLOSE';
      },
    ) => {
      state.sideMenu = action.payload;
    },
  },
});

export const modalActions = modalsSlice.actions;

export default modalsSlice.reducer;

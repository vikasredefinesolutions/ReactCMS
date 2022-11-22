import { createSlice } from '@reduxjs/toolkit';
import { UserType } from 'definations/APIs/user.res';
import { getStoreCustomer } from '../asyncActions/user.async';

// Define a type for the slice state
export interface _UserState {
  id: number | null;
  customer: UserType;
}

// Define the initial state using that type
const initialState: _UserState = {
  id: null,
  customer: {} as UserType,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    updateUserDetails: (
      state,
      action: {
        payload: {
          id: number;
        };
      },
    ) => {
      state.id = action.payload.id;
    },
    updateCustomer: (
      state,
      action: {
        payload: {
          customer: UserType;
        };
      },
    ) => {
      state.customer = action.payload.customer;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStoreCustomer.fulfilled, (state, action) => {
      state.customer = action.payload;
    });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

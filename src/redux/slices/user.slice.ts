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
  customer: {
    firstname: 'Husain',
    lastName: 'Think',
    email: 'husain@redefineindia.com',
    password: '12345678',
    confirmPassword: null,
    companyName: 'Redefine',
    companyId: 30,
    tierId: 0,
    isRegistered: false,
    sharedCustomerId: 0,
    isLocked: false,
    navCustomerId: '',
    isSuperuser: false,
    customerType: 'string',
    storeId: 4,
    isTaxableuser: false,
    storeCustomerAddress: [
      {
        customerId: 123,
        firstname: 'string',
        lastName: 'string',
        companyName: 'string',
        email: 'string',
        address1: 'string',
        address2: 'string',
        suite: 'string',
        city: 'string',
        state: 'string',
        postalCode: 'string',
        phone: 'string',
        fax: 'string',
        countryName: 'string',
        countryCode: '1',
        addressType: 'R',
        isDefault: false,
        recStatus: 'A',
        createdDate: '2022-11-24T14:34:58.4113161+00:00',
        createdBy: 0,
        modifiedDate: null,
        modifiedBy: null,
        id: 268,
        rowVersion: 'BHMFECnO2gg=',
        location: 'string',
        ipAddress: '192.168.1.1',
        macAddress: '00-00-00-00-00-00',
      },
    ],
    recStatus: 'A',
    createdDate: '2022-11-24T14:34:56.7734226+00:00',
    createdBy: 0,
    modifiedDate: null,
    modifiedBy: null,
    industryId: 0,
    id: 123,
    rowVersion: 'lJQXDynO2gg=',
    location: 'string',
    ipAddress: '192.168.1.1',
    macAddress: '00-00-00-00-00-00',
  } as unknown as UserType,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    logInUser: (
      state,
      action: {
        payload: {
          id: number | null;
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

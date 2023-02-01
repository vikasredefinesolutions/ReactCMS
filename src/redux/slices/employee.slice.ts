import { createSlice } from '@reduxjs/toolkit';
import { EmployeeType } from '@type/APIs/user.res';

export interface _EmployeeState {
  empId: number | null;
  employee: EmployeeType | null;
  loggedIn: boolean;
}

const initialState: _EmployeeState = {
  empId: null,
  employee: null,
  loggedIn: false,
};

export const employeeSlice = createSlice({
  name: 'employeeDetails',
  initialState,
  reducers: {
    updateEmployeeV2: (
      state,
      action: {
        payload: {
          employee: EmployeeType;
          empId: number;
        };
      },
    ) => {
      state.employee = action.payload.employee;
      state.empId = action.payload.empId;
      state.loggedIn = true;
    },
    clearEmployeeDetails: (
      state,
      action: {
        payload: {};
      },
    ) => {
      state.employee = null;
      state.empId = null;
      state.loggedIn = false;
    },
  },
});

export const employeeActions = employeeSlice.actions;
export default employeeSlice.reducer;

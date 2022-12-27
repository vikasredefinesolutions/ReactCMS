// eslint-disable-next-line import/named
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers.redux';

export const reduxStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof reduxStore>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const reduxWrapper = createWrapper<AppStore>(reduxStore);

import { bindActionCreators } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allActions from '../redux/actions.redux';
import type { AppState } from '../redux/store.redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slices/cart.slice';
import compareReducer from './slices/compare.slice';
import modalsReducer from './slices/modals.slice';
import productReducer from './slices/product.slice';
import redefineStoreReducer from './slices/redefineStore.slice';
import userReducer from './slices/user.slice';
import loaderReducer from './slices/loader.slice';

const rootReducer = combineReducers({
  store: redefineStoreReducer,
  product: productReducer,
  user: userReducer,
  cart: cartReducer,
  modals: modalsReducer,
  compare: compareReducer,
  loader: loaderReducer
});

export default rootReducer;

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

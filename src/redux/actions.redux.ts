import { allAsyncActions } from './asyncActions';
import { storeActions } from './slices/cart.slice';
import { compareActions } from './slices/compare.slice';
import { modalActions } from './slices/modals.slice';
import { productActions } from './slices/product.slice';
import { redefineStoreActions } from './slices/redefineStore.slice';
import { userActions } from './slices/user.slice';
import { loaderActions } from './slices/loader.slice';

const actions = {
  ...redefineStoreActions,
  ...productActions,
  ...allAsyncActions,
  ...userActions,
  ...storeActions,
  ...modalActions,
  ...compareActions,
  ...loaderActions,
};

export default actions;

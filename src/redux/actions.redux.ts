import { allAsyncActions } from './asyncActions';
import { CartActions } from './slices/cart.slice';
import { compareActions } from './slices/compare.slice';
import { homeActions } from './slices/home.slice';
import { loaderActions } from './slices/loader.slice';
import { modalActions } from './slices/modals.slice';
import { productActions } from './slices/product.slice';
import { redefineStoreActions } from './slices/redefineStore.slice';
import { successActions } from './slices/success.slice';
import { userActions } from './slices/user.slice';

const actions = {
  ...redefineStoreActions,
  ...productActions,
  ...allAsyncActions,
  ...userActions,
  ...CartActions,
  ...modalActions,
  ...compareActions,
  ...loaderActions,
  ...successActions,
  ...homeActions,
};

export default actions;

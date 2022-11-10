import * as asyncBrandReqs from './brand.async';
import * as asyncCartReqs from './cart.async';
import * as asyncStoreReqs from './redefineStore.async';
import * as asyncUserReqs from './user.async';

export const allAsyncActions = {
  ...asyncStoreReqs,
  ...asyncBrandReqs,
  ...asyncUserReqs,
  ...asyncCartReqs,
};

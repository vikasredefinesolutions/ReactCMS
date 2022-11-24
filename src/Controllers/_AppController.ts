import { _StoreReturnType } from 'definations/store.type';
import { highLightError } from 'helpers/common.helper';
import { conditionalLog } from 'helpers/global.console';
import { __domain } from 'page.config';
import * as HeaderService from 'services/header.service';
import * as HomeService from 'services/home.service';
import { _showConsoles, __fileNames } from 'show.config';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchBrands = async (storeId: number) => {
  return HeaderService.FetchBrands({ storeId });
};

export const FetchMenuItems = async (storeId: number) => {
  return [];

  // HeaderService.FetchStoreMenu({ storeId });
};

export const FetchStoreDetails = async (domain: string, pathName: string) => {
  const store: _StoreReturnType = {
    storeId: null,
    layout: null,
    pageType: '',
    pathName: '',
    isAttributeSaparateProduct: false,
  };

  try {
    await HomeService.GetStoreID(domain).then((res) => {
      store.storeId = res.id;
      store.layout = __domain.layout;
      store.pathName = pathName;
      store.isAttributeSaparateProduct = res.isAttributeSaparateProduct;
      return res.id;
    });
  } catch (error) {
    highLightError({ error, component: '_app Controller' });
  }
  conditionalLog({
    data: store,
    type: 'CONTROLLER',
    name: __fileNames._app,
    show: _showConsoles._app,
  });
  return store;
};

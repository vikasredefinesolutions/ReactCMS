import { _StoreReturnType } from 'definations/store.type';
import { conditionalLog, highLightError } from 'helpers/global.console';
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

export const FetchStoreDetails = async (
  domain: string,
  pathName: string,
): Promise<_StoreReturnType | null> => {
  const store: _StoreReturnType = {
    storeId: null,
    layout: null,
    pageType: '',
    pathName: '',
    code: '',
    isAttributeSaparateProduct: false,
  };
  try {
    const res = await HomeService.GetStoreID(domain);

    if (res) {
      store.storeId = res.id;
      store.layout = res.code;
      store.pathName = pathName;
      store.code = res.code;
      store.isAttributeSaparateProduct = res.isAttributeSaparateProduct;
      return store;
    }
    conditionalLog({
      data: store,
      type: 'CONTROLLER',
      name: __fileNames._app,
      show: _showConsoles._app,
    });
    return null;
  } catch (error) {
    highLightError({ error, component: '_app Controller' });
    return null;
  }
};

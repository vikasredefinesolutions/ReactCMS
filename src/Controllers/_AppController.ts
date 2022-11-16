import { _StoreReturnType } from 'definations/store.type';
import { __domain } from 'page.config';
import * as HeaderService from 'services/header.service';
import * as HomeService from 'services/home.service';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchStoreDetails = async (domain: string, pathName: string) => {
  const store: _StoreReturnType = {
    storeId: null,
    layout: null,
    pageType: '',
    pathName: '',
  };

  try {
    await HomeService.GetStoreID(domain).then((res) => {
      store.storeId = res.id;
      store.layout = __domain.layout;
      store.pathName = pathName;
      return res.id;
    });
  } catch (error) {
    console.log('Error: _app Controller => ', error);
  }

  return store;
};

export const FetchMenuItems = async (storeId: number) => {
  return HeaderService.FetchStoreMenu({ storeId });
};

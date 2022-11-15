import { storeReturnType } from 'definations/store.type';
import { __domain } from 'page.config';
import * as HeaderService from 'services/header.service';
import * as HomeService from 'services/home.service';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchStoreDetails = async (domain: string, pathName: string) => {
  const store: storeReturnType = {
    storeId: null,
    layout: null,
    pageType: '',
    pathName: '',
  };

  await HomeService.GetStoreID(domain)
    .then((res) => {
      store.storeId = res.id;
      store.layout = __domain.layout;
      store.pathName = pathName;
      return res.id;
    })
    .then((storeId) => 'Page Type API, Call Here, Husain');

  return store;
};

export const FetchMenuItems = async (storeId: number) => {
  return HeaderService.FetchStoreMenu({ storeId });
};

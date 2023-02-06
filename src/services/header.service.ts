import { _BannerRes } from 'definations/APIs/banner.res';
import {
  _Brands,
  _MenuCategory,
  _StoreMenu,
  _t_Brands,
  _t_MenuCategory,
} from 'definations/APIs/header.res';

import { CallAPI, CallCmsAPI } from 'helpers/common.helper';

export type _HeaderAPIs =
  | 'FetchBrands'
  | 'FetchBannerDetails'
  | 'FetchStoreMenu'
  | 'FetchMenuTopics'
  | 'FetchMenuCategories';

export type _HeaderServices = {
  service: 'header';
  api: _HeaderAPIs;
};

export const FetchBrands = async ({
  storeId,
}: {
  storeId: number;
}): Promise<_t_Brands | null> => {
  const url = `Brand/getbrandbystoreid/${storeId}.json`;

  const response = await CallAPI<_Brands[]>({
    name: {
      api: 'FetchBrands',
      service: 'header',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  const transformed: _t_Brands = {
    brands: response,
    dataType: 'BRANDS',
  };

  return transformed;
};

export const FetchBannerDetails = async (payload: {
  storeId: number;
  isBrand: boolean;
  sename: string;
}): Promise<_BannerRes[] | null> => {
  const url = `Brand/getbannerdeatilsbystoreid.json?isbrand=${payload.isBrand}&storeid=${payload.storeId}&sename=${payload.sename}`;

  const response = await CallAPI<_BannerRes[]>({
    name: {
      api: 'FetchBannerDetails',
      service: 'header',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const FetchStoreMenu = async (payload: {
  storeId: number;
}): Promise<_StoreMenu[] | null> => {
  const url = `CmsStoreThemeConfigs/getMenuConfig`;

  const response = await CallAPI<_StoreMenu[]>({
    name: {
      api: 'FetchStoreMenu',
      service: 'header',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const FetchMenuCategories = async (payload: {
  storeId: number;
  categoryId: number;
}): Promise<_t_MenuCategory | null> => {
  const url = `Category/getcategorysbyparentid/${payload.categoryId}/${payload.storeId}.json`;

  const response = await CallCmsAPI<_MenuCategory[]>({
    name: {
      api: 'FetchMenuCategories',
      service: 'header',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  const transformed: _t_MenuCategory = {
    categories: response,
    dataType: 'CATEGORIES',
  };

  return transformed;
};

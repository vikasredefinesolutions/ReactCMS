import { _BannerRes } from 'definations/APIs/banner.res';
import {
  _MenuCategory,
  _MenuTopic,
  _StoreMenu,
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
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

  const response = await CallAPI<_t_Brands>({
    name: {
      api: 'FetchBrands',
      service: 'header',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
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
  const url = `API/api/store-menu/${payload.storeId}`;

  const response = await CallCmsAPI<_StoreMenu[]>({
    name: {
      api: 'FetchStoreMenu',
      service: 'header',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const FetchMenuTopics = async (payload: {
  topicId: number;
}): Promise<_t_MenuTopic | null> => {
  const url = `API/api/topics/${payload.topicId}`;

  const response = await CallCmsAPI<_MenuTopic>({
    name: {
      api: 'FetchMenuTopics',
      service: 'header',
    },
    request: {
      url: url,
      method: 'POST',
    },
  });

  const transformed: _t_MenuTopic = {
    topic: response,
    dataType: 'TOPIC',
  };

  return transformed;
};

export const FetchMenuCategories = async (payload: {
  storeId: number;
  categoryId: number;
}): Promise<_t_MenuCategory | null> => {
  const url = `API/Category/getcategorysbyparentid/${payload.categoryId}/${payload.storeId}.json`;

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

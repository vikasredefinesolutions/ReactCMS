import config from 'api.config';
import { _BannerRes } from 'definations/APIs/banner.res';
import {
  _MenuCategory,
  _MenuTopic,
  _StoreMenu,
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from 'definations/APIs/header.res';
import { _Header } from 'definations/header.type';
import { CallAPI } from 'helpers/common.helper';
import { headerInfo } from '../mock/header.mock';

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

// eslint-disable-next-line no-unused-vars
export const SearchFor = async (payload: { text: string }) => {
  // const url = `/front/get-page-type?store_id=${payload.storeId}&slug=${payload.slug}`;

  // await SendAsyncV2<AxiosRequestConfig>({
  //   url: url,
  //   method: 'POST',
  //   data: {},
  // });

  return headerInfo as _Header;
};

export const FetchBrands = async ({
  storeId,
}: {
  storeId: number;
}): Promise<_t_Brands | null> => {
  const url = `/Brand/getbrandbystoreid/${storeId}.json`;

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
  const url = `${config.CMS}/api/store-menu/${payload.storeId}`;

  const response = await CallAPI<_StoreMenu[]>({
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
  const url = `${config.CMS}/api/topics/${payload.topicId}`;

  const response = await CallAPI<_MenuTopic>({
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
  const url = `${config.api.URL}Category/getcategorysbyparentid/${payload.categoryId}/${payload.storeId}.json`;

  const response = await CallAPI<_MenuCategory[]>({
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

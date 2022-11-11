import { _BannerRes } from 'definations/APIs/banner.res';
import {
  _StoreMenu,
  _MenuTopic,
  _MenuCategory,
} from 'definations/APIs/header.res';
import { _Header } from 'definations/header.type';
import config from 'api.config';
import { headerInfo } from '../mock/header.mock';
import { SendAsyncV2 } from '../utils/axios.util';

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

export const FetchBannerDetails = async (payload: {
  storeId: number;
  isBrand: boolean;
  sename: string;
}): Promise<_BannerRes[]> => {
  const url = `https://redefine-front-dev.azurewebsites.net/Brand/getbannerdeatilsbystoreid.json?isbrand=${payload.isBrand}&storeid=${payload.storeId}&sename=${payload.sename}`;

  const res = await SendAsyncV2<_BannerRes[]>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const FetchStoreMenu = async (payload: {
  storeId: number;
}): Promise<_StoreMenu[]> => {
  const url = `${config.CMS}/api/store-menu/${payload.storeId}`;

  const res = await SendAsyncV2<_StoreMenu[]>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const FetchMenuTopics = async (payload: {
  topicId: number;
}): Promise<_MenuTopic> => {
  const url = `${config.CMS}/api/topics/${payload.topicId}`;

  const res = await SendAsyncV2<_MenuTopic>({
    url: url,
    method: 'POST',
  });

  return res.data;
};

export const FetchMenuCategories = async (payload: {
  storeId: number;
  categoryId: number;
}): Promise<_MenuCategory[]> => {
  const url = `${config.api.URL}Category/getcategorysbyparentid/${payload.categoryId}/${payload.storeId}.json`;

  const res = await SendAsyncV2<_MenuCategory[]>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

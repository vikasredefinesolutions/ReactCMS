import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { SendAsyncV2 } from '../utils/axios.util';

interface brandType {
  brandId?: number | string;
  storeId: number | null;
  maximumItemsForFetch: number | string;
  tagName: string;
}

export const FetchBrands = async (storeId: string | number) => {
  const url = `/Brand/getbrandbystoreid/${storeId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res;
};

export const FetchDataByBrand = async (body: brandType) => {
  const url = '/StoreProduct/getfeaturedproductitemsbytagname.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: { ...body },
  });
  return res;
};

// for sitemap categories
export const FetchSiteMapCategories = async (id: number) => {
  const url = `/Category/getcategorytreeviewlist/${id}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res;
};

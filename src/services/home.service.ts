import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  _FeaturedProduct,
  _StoreDetails,
} from 'definations/APIs/storeDetails.res';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';
import { SendAsyncV2 } from '../utils/axios.util';

export const FetchFeaturedProducts = async (payload: {
  storeId: number;
  brandId: number;
  maximumItemsForFetch: number;
}): Promise<_FeaturedProduct[] | null> => {
  const url = '/StoreProduct/getfeaturedproductitems.json';

  try {
    const res = await SendAsyncV2<_FeaturedProduct[] | null>({
      url: url,
      method: 'POST',
      data: payload,
    });

    conditionalLog({
      data: res.data,
      name: 'FetchProductsBySKUs',
      type: 'API',
      show: res.data === null || res.data.length === 0,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchProductsBySKUs',
      type: 'API',
      show: _showConsoles.services.compareProducts,
      error: true,
    });

    return null;
  }
};

export const fetchProducts = async () => {
  const url = '/home';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const fetchProductById = async () => {
  const url = '/product/';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res.data;
};

export const GetStoreID = async (
  domain: string,
): Promise<_StoreDetails | null> => {
  const url = `Store/getstorebydomain.json`;

  try {
    const res = await SendAsyncV2<_StoreDetails>({
      url: url,
      method: 'POST',
      data: {
        url: domain,
      },
    });

    conditionalLog({
      data: res,
      name: 'GetStoreID',
      type: 'API',
      show: res.data === null,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      type: 'API',
      show: true,
      name: 'GetStoreID',
      error: true,
    });

    return null;
  }
};

export const FetchPageType = async (payload: {
  slug: string;
  storeId: number;
}) => {
  const url = `/front/get-page-type?store_id=${payload.storeId}&slug=${payload.slug}`;

  try {
    const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
      url: url,
      method: 'POST',
      data: {},
    });

    conditionalLog({
      data: res.data,
      name: 'FetchPageType',
      type: 'API',
      show: res.data === null,
    });

    return res;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchPageType',
      type: 'API',
      show: _showConsoles.services.compareProducts,
      error: true,
    });

    const res = {
      data: null,
    };
    return res;
  }
};

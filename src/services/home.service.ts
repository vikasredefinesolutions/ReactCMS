import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _StoreDetails } from 'definations/APIs/storeDetails.res';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';
import { SendAsyncV2 } from '../utils/axios.util';

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

export const GetStoreID = async (domain: string): Promise<_StoreDetails> => {
  const url = `Store/getstorebydomain.json`;

  const res = await SendAsyncV2<_StoreDetails>({
    url: url,
    method: 'POST',
    data: {
      url: domain,
    },
  });

  return res.data;
};

export const FetchPageType = async (payload: {
  slug: string;
  storeId: number;
}) => {
  const url = `/front/get-page-type?store_id=${payload.storeId}&slug=${payload.slug}`;
  console.log(url);
  try {
    const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
      url: url,
      method: 'POST',
      data: {},
    });

        return res;
  } catch (error) {
    return null;
  }
};



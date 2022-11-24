import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { SendAsyncV2 } from '../utils/axios.util';

export const FetchBrands = async (storeId: string) => {
  const url = `/Brand/getbrandbystoreid/${storeId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res;
};

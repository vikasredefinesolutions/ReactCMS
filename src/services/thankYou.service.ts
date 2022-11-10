import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SendAsyncV2 } from '../utils/axios.util';

export const FetchPlacedOrderDetails = async () => {
  const url = '/placeOrderDetails';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { SendAsyncV2 } from '../utils/axios.util';

interface brandType {
  brandId?: number | string;
  storeId?: number | null;
  maximumItemsForFetch?: number | string;
  tagName?: string;
}

export const TrackFile = async (body: any) => {
  const url =
    '/MarketingVariableTracking/createmarketingvariabletrackingfile.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: { ...body },
  });
  return res;
};

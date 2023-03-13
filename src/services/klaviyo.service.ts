import config from 'api.config';
import axios from 'axios';
import { CallAPI } from 'helpers/common.helper';

interface _cAxiosResponse<T> {
  success: boolean;
  data: T;
  errors: any;
}

export type _KlaviyoAPIs = 'Klaviyo_PlaceOrder' | 'Klaviyo_BackInStock';

export interface _KlaviyoServices {
  service: 'Klaviyo';
  api: _KlaviyoAPIs;
}

export const Klaviyo_PlaceOrder = async (payload: { orderNumber: string }) => {
  const url = 'Klaviyo/KlaviyoPlaceOrder.json';

  const response = await CallAPI<boolean>({
    name: {
      service: 'Klaviyo',
      api: 'Klaviyo_PlaceOrder',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const Klaviyo_BackInStock = async (payload: {
  a: string;
  email: string;
  variant: string;
  platform: 'api';
}) => {
  const url = `
  ${config.baseUrl.klaviyo2}onsite/components/back-in-stock/subscribe`;

  const res = await axios.post<_cAxiosResponse<any>>(url, payload);
  return res;
};

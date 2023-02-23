import { CartProducts } from '@type/APIs/cart.res';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CartReq, CouponReq } from 'definations/APIs/cart.req';
import { CallAPI } from 'helpers/common.helper';

import { conditionalLog } from 'helpers/global.console';
import { SendAsyncV2 } from '../utils/axios.util';
import { _AddToCart_Payload } from './product.service.type';

export type _ShoppingCartAPIs = 'FetchCartDetails';

export type _ShoppingCartService = {
  service: 'ShoppingCart';
  api: _ShoppingCartAPIs;
};

export const FetchCartDetails = async ({
  customerId,
  isEmployeeLoggedIn,
}: {
  customerId: number | string;
  isEmployeeLoggedIn: boolean;
}): Promise<CartProducts | null> => {
  const url = `/Store/GetShoppingCartItemsDetail/${customerId}/${isEmployeeLoggedIn}.json`;

  const response = await CallAPI<CartProducts>({
    name: {
      service: 'ShoppingCart',
      api: 'FetchCartDetails',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const addToCart = async (payload: CartReq) => {
  const url = `/Store/addtocart.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });
  return res.data;
};

export const AddItemsToTheCart = async (payload: _AddToCart_Payload) => {
  const url = `/Store/addtocart.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });
  return res.data;
};

export const checkCoupon = async (payload: CouponReq) => {
  const url = `Store/CouponCode/GetCouponDetails.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });
  return res;
};

export const deleteItemCart = async (cartItemId: number) => {
  const url = `/Store/RemoveRegisterCart/${cartItemId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res;
};

interface _CheckCustomerAlreadyExist {
  id: number;
  isCustomerExist: boolean;
  isGuestCustomer: boolean;
}

export const updateCartByNewUserId = async (
  oldCustomerId: number,
  newCustomerId: number,
) => {
  const url = `/Store/MoveRegisterCart/${newCustomerId}/${oldCustomerId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res;
};

export const checkCustomerAlreadyExist = async (
  email: string,
  storeId: number,
): Promise<_CheckCustomerAlreadyExist | null> => {
  try {
    const url = `/StoreCustomer/checkstorecustomerguest.json`;
    const res = await SendAsyncV2<_CheckCustomerAlreadyExist | null>({
      url: url,
      method: 'POST',
      data: {
        email: email,
        storeId: storeId,
      },
    });
    conditionalLog({
      data: res.data,
      name: 'getThemeConfigs',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getThemeConfigs',
      type: 'API',
      show: true,
    });

    return null;
  }
};

export const placeOrder = async (orderObject: any) => {
  try {
    const url = `/Order/addorder.json`;
    const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
      url: url,
      method: 'POST',
      data: orderObject,
    });
    conditionalLog({
      data: res.data,
      name: 'placeOrder',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'placeOrder',
      type: 'API',
      show: true,
    });

    return null;
  }
};

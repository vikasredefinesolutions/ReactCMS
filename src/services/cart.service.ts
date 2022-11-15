import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CartReq, CouponReq } from 'definations/APIs/cart.req';
import { SendAsyncV2 } from '../utils/axios.util';

export const fetchCart = async (customerId: number) => {
  const url = `/Store/GetShoppingCartItemsDetail/${customerId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res.data;
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

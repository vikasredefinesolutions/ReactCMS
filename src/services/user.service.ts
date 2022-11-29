import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _SignUpPayload } from 'definations/APIs/signUp.req';
import { _AccCreated } from 'definations/APIs/signUp.res';
import { _SignIn } from 'definations/user.type';
import { SendAsyncV2 } from '../utils/axios.util';

export const signInUser = async (payload: _SignIn) => {
  const url = `StoreCustomer/customerlogin.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const GetCountriesList = async () => {
  const url = `StoreCustomer/getcustomercountry.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
  });

  return res.data;
};
export const GetStatesList = async (id: number) => {
  const url = `StoreCustomer/getcustomerstatebycountryid/${id}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const GetIndustriesList = async () => {
  const url = `StoreCustomer/getcustomerindustry.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
  });

  return res.data;
};

export const UpdateWishList = async (productId: number) => {
  const url = '/like';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
    data: productId,
  });

  return res.data;
};

export const SubscribeToNewsLetter = async (payload: { email: string }) => {
  const url = '/subscribe';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const CreateNewAccount = async (
  payload: _SignUpPayload,
): Promise<_AccCreated> => {
  const url = 'StoreCustomer/storecustomercreate.json';

  const res: AxiosResponse = await SendAsyncV2<_AccCreated>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const AddToCart = async (payload: { note: string }) => {
  const url = '/addToCart';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const getStoreCustomer = async (customerId: number) => {
  const url = `/StoreCustomer/get/${customerId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
    data: customerId,
  });
  return res.data;
};

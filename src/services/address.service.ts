import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AddressAPIRequest } from 'definations/APIs/address.req';

import { SendAsyncV2 } from '../utils/axios.util';

export const CreateUserAddress = async (request: AddressAPIRequest) => {
  const url = `/StoreCustomer/storecustomercreateaddress.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: request,
  });
  return res;
};

export const getCountryList = async () => {
  const url = '/StoreCustomer/getcustomercountry.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
  });
  return res.data;
};

export const getStatesList = async (id: number) => {
  const url = `/StoreCustomer/getcustomerstatebycountryid/${id}.json`;
  const res = await SendAsyncV2<Array<{ id: number; name: string }>>({
    url: url,
    method: 'GET',
  });
  return res.data;
};

export const udpateIsDefaultAddress = async (payload: {
  isDefault: boolean;
  addressId: number;
  customerId: number;
  addressType: string;
}) => {
  const url = '/StoreCustomer/setcustomeraddressdefault.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });
  return res.data;
};

export const UpdateUserAddress = async (request: AddressAPIRequest) => {
  const url = `/StoreCustomer/updatestorecustomeraddress.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: request,
  });
  return res;
};

export const deleteCustomerAddress = async (request: any) => {
  const url = '/StoreCustomer/deletestorecustomeraddress.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: request,
  });
  return res;
};

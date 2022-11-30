import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _SignUpPayload } from 'definations/APIs/signUp.req';
import { _AccCreated } from 'definations/APIs/signUp.res';
import { _signIn } from 'definations/user.type';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';
import { SendAsyncV2 } from '../utils/axios.util';

export const signInUser = async (payload: _signIn): Promise<number | null> => {
  const url = `StoreCustomer/customerlogin.json`;

  try {
    const res = await SendAsyncV2<number>({
      url: url,
      method: 'POST',
      data: payload,
    });

    conditionalLog({
      data: res.data,
      name: 'signInUser',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'signInUser',
      type: 'API',
      show: _showConsoles.services.compareProducts,
      error: true,
    });
    return null;
  }
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

export const FetchOrderIds = async (payload: {
  storeId: number;
  userId: number;
}): Promise<number[] | null> => {
  const url = `Order/GetAllOrdernumberByCustomerId/${payload.userId}/${payload.storeId}.json`;

  try {
    const res = await SendAsyncV2<number[]>({
      url: url,
      method: 'GET',
    });

    conditionalLog({
      data: res.data,
      name: 'FetchOrderIds',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchOrderIds',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

const OrderedBillingDetails = async (
  orderId: number,
): Promise<_MyAcc_OrderBillingDetails | null> => {
  const orderBillingDetailsURL = `Order/GetById/${orderId}.json`;

  try {
    const res = await SendAsyncV2<_MyAcc_OrderBillingDetails>({
      url: orderBillingDetailsURL,
      method: 'GET',
    });

    conditionalLog({
      data: res.data,
      name: 'OrderedBillingDetails',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'OrderedBillingDetails',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

const OrderedProductDetails = async (
  orderId: number,
): Promise<_MyAcc_OrderProductDetails[] | null> => {
  const orderProductDetailsURL = `Order/GetOrderedShoppingCartItemsDetail/${orderId}.json`;

  try {
    const res = await SendAsyncV2<_MyAcc_OrderProductDetails[]>({
      url: orderProductDetailsURL,
      method: 'GET',
    });
    conditionalLog({
      data: res.data,
      name: 'OrderedProductDetails',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'OrderedProductDetails',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const FetchOrderDetails = async ({
  orderId,
}: {
  orderId: number;
}): Promise<{
  billing: _MyAcc_OrderBillingDetails | null;
  product: _MyAcc_OrderProductDetails[] | null;
}> => {
  let billingDetails: null | _MyAcc_OrderBillingDetails = null;
  let productDetails: null | _MyAcc_OrderProductDetails[] = null;

  try {
    await Promise.allSettled([
      OrderedBillingDetails(orderId),
      OrderedProductDetails(orderId),
    ]).then((values) => {
      billingDetails =
        values[0].status === 'fulfilled' ? values[0].value : null;
      productDetails =
        values[1].status === 'fulfilled' ? values[1].value : null;
    });

    return {
      product: productDetails,
      billing: billingDetails,
    };
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchOrderDetails',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return {
      product: null,
      billing: null,
    };
  }
};

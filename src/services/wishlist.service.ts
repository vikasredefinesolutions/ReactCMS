import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WishlistRequest } from 'definations/wishlist.type';
import { SendAsyncV2 } from '../utils/axios.util';

export const AddToWishlist = async (payload: WishlistRequest) => {
  const url = '/StoreProductWishList/createstoreproductwishlist.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const getWishlist = async (customerId: number) => {
  const url = `/StoreProductWishList/getwishlistbycustomerid/${customerId}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const removeWishlist = async (wishlistId: number) => {
  const url = '/StoreProductWishList/deletewishlistbyid.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: { wishlistId },
  });

  return res.data;
};

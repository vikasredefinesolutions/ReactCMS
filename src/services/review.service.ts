import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ProductReviewType } from 'definations/APIs/review.res';
import { SendAsyncV2 } from '../utils/axios.util';

export const AddProductReview = async (payload: ProductReviewType) => {
  const url = `/StoreProduct/createproductreview.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};
export const FetchProductReview = async (payload: number) => {
  const url = `/StoreProduct/getproductreviews/${payload}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res.data;
};

export const FetchProductReviewDetails = async (payload: number) => {
  const url = `/StoreProduct/getproductreviewsdetail/${payload}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });
  return res.data;
};


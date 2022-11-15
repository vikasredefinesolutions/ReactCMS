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

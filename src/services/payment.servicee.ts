import { SendAsyncV2 } from '@utils/axios.util';

export const getPaymentOption = async (request: { storeId: number }) => {
  const url = '/StorePaymentOptions/getpaymentoption.json';
  const res = await SendAsyncV2({
    url: url,
    method: 'POST',
    data: request,
  });
  return res.data;
};

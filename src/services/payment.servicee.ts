import { PaymentOptions } from '@type/APIs/cart.req';
import { SendAsyncV2 } from '@utils/axios.util';

export const getPaymentOption = async (request: {
  storeId: number;
}): Promise<PaymentOptions> => {
  const url = '/StorePaymentOptions/getpaymentoption.json';
  const res = await SendAsyncV2<PaymentOptions>({
    url: url,
    method: 'POST',
    data: request,
  });
  return res.data;
};

export const getCustomerAllowBalance = async (
  customerId: number,
): Promise<number> => {
  const url = `/StoreCustomer/getcustomercredit/${customerId}.json`;
  const res = await SendAsyncV2<number>({
    url: url,
    method: 'GET',
  });
  return +res.data;
};

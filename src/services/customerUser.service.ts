import { CustomerUsersObject } from '@type/APIs/customerUser.res';
import { SendAsyncV2 } from '@utils/axios.util';
import { AxiosResponse } from 'axios';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export const AddCustomerUser = async (
  payload: any,
): Promise<AxiosResponse | null> => {
  try {
    const url = '/StoreCustomerUsers/createstorecustomerusers.json';
    const res: AxiosResponse = await SendAsyncV2({
      url: url,
      method: 'POST',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'AddCustomerUser',
      type: 'API',
      show: true,
    });
    return res;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'AddCustomerUser',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const getCustomerUserList = async (
  customerId: number,
): Promise<CustomerUsersObject[] | null> => {
  try {
    const url = `/StoreCustomerUsers/getcustomeruserslist/${customerId}.json`;
    const res = await SendAsyncV2<CustomerUsersObject[]>({
      url: url,
      method: 'POST',
    });
    conditionalLog({
      data: res.data,
      name: 'getCustomerUserList',
      type: 'API',
      show: true,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getCustomerUserList',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const deleteCustomerUserList = async (
  customerId: number,
): Promise<CustomerUsersObject[] | null> => {
  try {
    const url = `/StoreCustomerUsers/deletecustomerusersbyid/${customerId}.json`;
    const res = await SendAsyncV2<CustomerUsersObject[]>({
      url: url,
      method: 'POST',
    });
    conditionalLog({
      data: res.data,
      name: 'deleteCustomerUserList',
      type: 'API',
      show: true,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'deleteCustomerUserList',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const UpdateCustomerUser = async (
  payload: any,
): Promise<AxiosResponse | null> => {
  try {
    const url = '/StoreCustomerUsers/updatestorecustomerusers.json';
    const res: AxiosResponse = await SendAsyncV2({
      url: url,
      method: 'POST',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'UpdateCustomerUser',
      type: 'API',
      show: true,
    });
    return res;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'UpdateCustomerUser',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const ForgetCustomerPassword = async (
  payload: any,
): Promise<AxiosResponse | null> => {
  try {

    const url = `/StoreCustomer/customerchangepasswordlink/${payload.storeId}/${payload.email}.json`;
    
    const res: AxiosResponse = await SendAsyncV2({
      url: url,
      method: 'GET',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'ForgetCustomerPassword',
      type: 'API',
      show: true,
    });
    return res;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'ForgetCustomerPassword',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

import { CustomerUsersObject } from '@type/APIs/customerUser.res';
import { FetchLogoPayload } from '@type/APIs/logo.req';
import { LogoList } from '@type/APIs/logo.res';
import { SendAsyncV2 } from '@utils/axios.util';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export const getLogoDetailsById = async (
  logoId: number,
): Promise<CustomerUsersObject[] | null> => {
  try {
    const url = `/StoreCustomerLogo/getalllistbycustomerlogoid/${logoId}.json`;
    const res = await SendAsyncV2<CustomerUsersObject[]>({
      url: url,
      method: 'POST',
      data: logoId,
    });
    conditionalLog({
      data: res.data,
      name: 'getLogoDetailsById',
      type: 'API',
      show: _showConsoles.services.logo,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getLogoDetailsById',
      type: 'API',
      show: _showConsoles.services.logo,
      error: true,
    });
    return null;
  }
};

export const getLogoDetailsList = async (
  payload: FetchLogoPayload,
): Promise<LogoList | null> => {
  try {
    const url = `/StoreCustomerLogo/list.json`;
    const res = await SendAsyncV2<LogoList>({
      url: url,
      method: 'POST',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'getLogoDetailsList',
      type: 'API',
      show: _showConsoles.services.logo,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getLogoDetailsList',
      type: 'API',
      show: _showConsoles.services.logo,
      error: true,
    });
    return null;
  }
};

import { FetchLogoPayload } from '@type/APIs/logo.req';
import { LogoDetails, LogoList } from '@type/APIs/logo.res';
import { SendAsyncV2 } from '@utils/axios.util';
import { CallAPI } from 'helpers/common.helper';
import getLocation from 'helpers/getLocation';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export type _LogoAPIs = 'UploadLogoWithDetails';

export type _LogoApiService = {
  service: 'Logo';
  api: _LogoAPIs;
};

export const getLogoDetailsById = async (
  logoId: number,
): Promise<LogoDetails | null> => {
  try {
    const url = `/StoreCustomerLogo/getalllistbycustomerlogoid/${logoId}.json`;
    const res = await SendAsyncV2<LogoDetails>({
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

interface _UploadLogoWithDetails {
  customerId: number;
  logo: string;
  logoName: string;
  description: null;
  orderedCartLogoDetailId: number;
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
}

interface _UploadLogoWithDetails_Payload {
  customerlogorequestmodel: {
    id: number;
    rowVersion: string;
    location: string;
    ipAddress: string;
    macAddress: string;
    customerId: number;
    logo: string;
    logoName: string;
    description: string;
    orderedCartLogoDetailId: number;
  };
}

export const UploadLogoWithDetails = async (payload: {
  id: number;
  customerId: number;
  logo: string;
  logoName: string;
  description: string;
  orderedCartLogoDetailId: number;
}): Promise<_UploadLogoWithDetails | null> => {
  const url = `/StoreCustomerLogo/create.json`;

  const location = await getLocation();
  const data: _UploadLogoWithDetails_Payload = {
    customerlogorequestmodel: {
      rowVersion: '',
      location: `${location.city}, ${location.region}, ${location.country}, ${location.postal_code}`,
      ipAddress: location.ip_address,
      macAddress: '00-00-00-00-00-00',
      ...payload,
    },
  };

  const response = await CallAPI<_UploadLogoWithDetails>({
    name: {
      service: 'Logo',
      api: 'UploadLogoWithDetails',
    },
    request: {
      url: url,
      method: 'POST',
      data: data,
    },
  });

  return response;
};

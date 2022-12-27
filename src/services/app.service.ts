import {
  _ThemeConfigRes,
  _ThemeConfigsAvailable,
  _TransformedThemeConfig,
} from '@type/APIs/header.res';
import { _StoreDetails } from 'definations/APIs/storeDetails.res';
import { CallAPI, CallCmsAPI } from 'helpers/common.helper';

export type _RedefineAppAPIs = 'GetStoreID' | 'FetchThemeConfigs';

export interface _RedefineAppServices {
  service: 'app';
  api: _RedefineAppAPIs;
}

export const GetStoreID = async (
  domain: string,
): Promise<_StoreDetails | null> => {
  const url = `Store/getstorebydomain.json`;

  const response = await CallAPI<_StoreDetails>({
    name: {
      api: 'GetStoreID',
      service: 'app',
    },
    request: {
      url: url,
      method: 'POST',
      data: { url: domain },
    },
  });

  return response;
};

export const FetchThemeConfigs = async (payload: {
  store_id: number;
  config_name: _ThemeConfigsAvailable;
}): Promise<_TransformedThemeConfig | null> => {
  const url = `API/api/store-theme-configs-by-store`;

  const response = await CallCmsAPI<_ThemeConfigRes>({
    name: {
      api: 'FetchThemeConfigs',
      service: 'app',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  if (response === null) {
    return null;
  }

  const transformedData: _TransformedThemeConfig = {
    id: response.id,
    store_id: response.store_id,
    config_name: response.config_name,
    config_value: JSON.parse(response.config_value),
  };

  return transformedData;
};

import {
  _ThemeConfigRes,
  _ThemeConfigsAvailable,
  _TransformedHeaderConfig,
} from '@type/APIs/header.res';
import { SendAsyncV2 } from '@utils/axios.util';
import { _StoreDetails } from 'definations/APIs/storeDetails.res';
import { CallAPI } from 'helpers/common.helper';

export type _RedefineAppAPIs = 'GetStoreID' | 'FetchThemeConfigs';

export interface _RedefineAppServices {
  service: 'app';
  api: _RedefineAppAPIs;
}

export const GetStoreID = async (
  domain: string,
): Promise<_StoreDetails | null> => {
  const url = `Store/getstorebydomain.json`;

  try {
    const response = await SendAsyncV2<_StoreDetails>({
      url: url,
      method: 'POST',
      data: { url: domain },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const FetchThemeConfigs = async (payload: {
  storeid: number;
  configname: _ThemeConfigsAvailable;
}): Promise<_TransformedHeaderConfig | null> => {
  const url = `CmsStoreThemeConfigs/getstorethemeconfigs/${payload.storeid}/${payload.configname}.json`;

  const response = await CallAPI<_ThemeConfigRes>({
    name: {
      api: 'FetchThemeConfigs',
      service: 'app',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  if (response === null) {
    return null;
  }

  const transformedData: _TransformedHeaderConfig = {
    id: response.id,
    store_id: response.store_Id,
    config_name: response.config_Name,
    config_value: JSON.parse(response.config_Value),
  };

  return transformedData;
};

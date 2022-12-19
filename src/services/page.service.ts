import {
  _Configs,
  _ThemeConfigRes,
  _TransformedThemeConfig,
} from '@type/APIs/header.res';
import { _GetPageType } from '@type/slug.type';
import axios from 'axios';
import { CallAPI, CallCmsAPI } from 'helpers/common.helper';

export type _StoreAPIs =
  | 'FetchThemeConfigs'
  | 'getPageType'
  | 'getPageComponents';
export interface _StoreServices {
  service: 'store';
  api: _StoreAPIs;
}

export const FetchThemeConfigs = async (payload: {
  store_id: number;
  config_name: _Configs;
}): Promise<_TransformedThemeConfig | null> => {
  const url = `https://www.redefinecommerce.net/API/api/store-theme-configs-by-store`;

  const response = await CallAPI<_ThemeConfigRes>({
    name: {
      api: 'FetchThemeConfigs',
      service: 'store',
    },
    request: {
      url: url,
      method: 'POST',
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

export const getPageType = async (Req: {
  store_id: number;
  slug: string;
}): Promise<_GetPageType | null> => {
  const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type';

  const response = await CallCmsAPI<_GetPageType>({
    name: {
      api: 'getPageType',
      service: 'store',
    },
    request: {
      url: url,
      method: 'POST',
      body: Req,
    },
  });

  return response;
};

export const getPageComponents = async (Req: { page_id: number }) => {
  const url = `https://www.redefinecommerce.net/API/api/front/topic/component/get/${Req.page_id}`;

  const page = await axios.get(url);
  return page;
};

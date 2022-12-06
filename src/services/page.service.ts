import {
  _Configs,
  _ThemeConfigRes,
  _TransformedThemeConfig,
} from '@type/APIs/header.res';
import { SendAsyncV2 } from '@utils/axios.util';
import axios from 'axios';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles } from 'show.config';

export const FetchThemeConfigs = async (payload: {
  store_id: number;
  config_name: _Configs;
}): Promise<_TransformedThemeConfig | null> => {
  const url = `https://www.redefinecommerce.net/API/api/store-theme-configs-by-store`;
  try {
    const res = await SendAsyncV2<_ThemeConfigRes>({
      url: url,
      method: 'POST',
      data: payload,
    });

    conditionalLog({
      data: res.data,
      name: 'getThemeConfigs',
      type: 'API',
      show: res.data === null,
    });

    const transformedData: _TransformedThemeConfig = {
      id: res.data.id,
      store_id: res.data.store_id,
      config_name: res.data.config_name,
      config_value: JSON.parse(res.data.config_value),
    };

    return transformedData;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'getThemeConfigs',
      type: 'API',
      show: _showConsoles.services.store,
      error: true,
    });

    return null;
  }
};

export const getPageType = async (Req: {
  store_id: number;
  slug: string;
}): Promise<{ data: any }> => {
  const url = 'https://www.redefinecommerce.net/API/api/front/get-page-type';

  try {
    const page = await axios.post(url, Req);

    conditionalLog({
      data: page.data,
      name: 'getPageType',
      type: 'API',
      show: page.data === null,
    });
    return page;
  } catch (error) {
    const page = {
      data: null,
    };
    conditionalLog({
      data: error,
      name: 'getPageType',
      type: 'API',
      show: _showConsoles.services.productDetails,
      error: true,
    });
    return page;
  }
};

export const getPageComponents = async (Req: { page_id: number }) => {
  const url = `https://www.redefinecommerce.net/API/api/front/topic/component/get/${Req.page_id}`;

  const page = await axios.get(url);
  return page;
};

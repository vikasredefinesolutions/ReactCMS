import { CallAPI } from 'helpers/common.helper';

export type _CacheAPIs = 'ClearCategoryCache' | 'ClearBrandCache';

export interface _CacheApiServices {
  service: 'cacheAPIs';
  api: _CacheAPIs;
}

export const ClearBrandCache = async (params: {
  storeid: number;
  brandid: number;
}): Promise<boolean | null> => {
  const url = `Brand/clearbrandcatch/${params.storeid}/${params.brandid}.json`;

  const response = await CallAPI<boolean>({
    name: {
      api: 'ClearBrandCache',
      service: 'cacheAPIs',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const ClearCategoryCache = async (params: {
  storeid: number;
  categoryid: number;
}): Promise<boolean | null> => {
  const url = `Category/clearcategorycatch/${params.storeid}/${params.categoryid}.json`;

  const response = await CallAPI<boolean>({
    name: {
      api: 'ClearCategoryCache',
      service: 'cacheAPIs',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

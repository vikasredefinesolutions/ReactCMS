import { _GetPageType, _PageTypesAvailable } from '@type/slug.type';
import { CallAPI } from 'helpers/common.helper';

export type _SlugAPIs = 'getPageType';

export interface _SlugServices {
  service: 'slug';
  api: _SlugAPIs;
}

export const getPageType = async (Req: {
  storeId: number;
  slug: string;
}): Promise<_GetPageType | null> => {
  const url = 'CmsTopicsPublish/getpagetypebyslug.json';

  const response = await CallAPI<_GetPageType>({
    name: {
      api: 'getPageType',
      service: 'slug',
    },
    request: {
      url: url,
      method: 'POST',
      data: Req,
    },
  });

  if (response === null) {
    return null;
  }

  const transformedData: _GetPageType = {
    ...response,
    type: response.type.toLocaleLowerCase() as _PageTypesAvailable,
  };

  return transformedData;
};

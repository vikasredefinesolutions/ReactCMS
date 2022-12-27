import { _FeaturedProduct } from 'definations/APIs/storeDetails.res';
import { CallAPI, CallCmsAPI } from 'helpers/common.helper';

export type _HomeAPIs = 'FetchFeaturedProducts' | 'getPageComponents';

export interface _HomeServices {
  service: 'home';
  api: _HomeAPIs;
}

export const FetchFeaturedProducts = async (payload: {
  storeId: number;
  brandId: number;
  maximumItemsForFetch: number;
}): Promise<_FeaturedProduct[] | null> => {
  const url = '/StoreProduct/getfeaturedproductitems.json';

  const response = await CallAPI<_FeaturedProduct[]>({
    name: {
      service: 'home',
      api: 'FetchFeaturedProducts',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const getPageComponents = async (Req: { page_id: number }) => {
  const url = `API/api/front/topic/component/get/${Req.page_id}`;

  const response = await CallCmsAPI<any>({
    name: {
      service: 'home',
      api: 'getPageComponents',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

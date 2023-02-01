import { _Footer, _Footerconfig } from '@type/APIs/footer.res';
import { CallAPI } from 'helpers/common.helper';

export type _FooterAPIs = 'FetchFooter';

export type _FooterServices = {
  service: 'footer';
  api: _FooterAPIs;
};
export const Footer = async (payload: {
  storeId: number;
  configname: _Footerconfig;
}): Promise<_Footer | null> => {
  const url = `CmsStoreThemeConfigs/getstorethemeconfigs/${payload.storeId}/${payload.configname}.json`;

  const response = await CallAPI<_Footer>({
    name: {
      api: 'FetchFooter',
      service: 'footer',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });
  return response;
};

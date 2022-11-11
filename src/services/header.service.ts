import { _BannerRes } from 'definations/APIs/banner.res';
import { _Header } from 'definations/header.type';
import { headerInfo } from '../mock/header.mock';
import { SendAsyncV2 } from '../utils/axios.util';

export const FetchHeaderInformation = async () => {
  // await SendAsyncV2<AxiosRequestConfig>({
  //   url: url,
  //   method: 'POST',
  //   data: {},
  // });

  return headerInfo;
};

// eslint-disable-next-line no-unused-vars
export const SearchFor = async (payload: { text: string }) => {
  // const url = `/front/get-page-type?store_id=${payload.storeId}&slug=${payload.slug}`;

  // await SendAsyncV2<AxiosRequestConfig>({
  //   url: url,
  //   method: 'POST',
  //   data: {},
  // });

  return headerInfo as _Header;
};

export const FetchBannerDetails = async (payload: {
  storeId: number;
  isBrand: boolean;
  sename: string;
}): Promise<_BannerRes[]> => {
  const url = `https://redefine-front-dev.azurewebsites.net/Brand/getbannerdeatilsbystoreid.json?isbrand=${payload.isBrand}&storeid=${payload.storeId}&sename=${payload.sename}`;

  const res = await SendAsyncV2<_BannerRes[]>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

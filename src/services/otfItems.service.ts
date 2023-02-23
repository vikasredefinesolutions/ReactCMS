import { OTFItemNoList, OTFItemVariantList } from '@type/otfItem.res';
import { SendAsyncV2 } from '@utils/axios.util';

export const getOtfItemNo = async (): Promise<OTFItemNoList | null> => {
  const url = '/OtfItem/GetOtfItemNo.json';
  try {
    const res = await SendAsyncV2<OTFItemNoList | null>({
      url,
      method: 'GET',
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getOtfItemVariant =
  async (): Promise<OTFItemVariantList | null> => {
    const url = '/OtfItem/GetOtfVariantCode.json';
    try {
      const res = await SendAsyncV2<OTFItemVariantList | null>({
        url,
        method: 'GET',
      });
      return res.data;
    } catch (error) {
      return null;
    }
  };

export const addOtfItem = async (payload: any) => {
  const url = '/OtfItem/CreateOtfItem';
  try {
    const res = await SendAsyncV2<OTFItemVariantList | null>({
      url,
      method: 'POST',
      data: payload,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

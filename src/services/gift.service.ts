import { CallAPI } from 'helpers/common.helper';
import { _GiftCard } from './gift.service.type';

export type _GiftCardAPIs =
  | 'FetchGiftCardsList'
  | 'FetchGiftCardDetailsBySename';

export type _GiftCardService = {
  service: 'giftCard';
  api: _GiftCardAPIs;
};

export const FetchGiftCardsList = async (payload: {
  storeId: number;
}): Promise<_GiftCard[] | null> => {
  const url = `StoreProduct/giftproductlist/${payload.storeId}.json`;

  const response = await CallAPI<_GiftCard[]>({
    name: {
      service: 'giftCard',
      api: 'FetchGiftCardsList',
    },
    request: {
      url: url,
      method: 'POST',
      data: {},
    },
  });

  return response;
};

interface _UnCookedGiftCard {
  id: number;
  seName: string;
  storeId: number;
  name: string;
  description: string;
  shortDescription: string;
  ourCost: string;
  salePrice: string;
  sku: string;
  imageName: string;
}

export const FetchGiftCardDetailsBySename = async (payload: {
  storeId: number;
  giftId: string;
}): Promise<_GiftCard | null> => {
  const url = `StoreProduct/giftproductdetailsbysename/${payload.giftId}/${payload.storeId}.json`;

  const response = await CallAPI<_UnCookedGiftCard>({
    name: {
      service: 'giftCard',
      api: 'FetchGiftCardDetailsBySename',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  if (response === null) {
    return null;
  }

  const fieldNameChanged: _GiftCard = {
    ...response,
    productId: response?.id,
  };

  return fieldNameChanged;
};

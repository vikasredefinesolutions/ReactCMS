import { FetchGiftCardDetailsBySename } from '@services/gift.service';
import { _GiftCard } from '@services/gift.service.type';
import { extractIdFromPathName } from 'helpers/common.helper';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import React from 'react';
import { _globalStore } from 'store.global';
import Redefine_GiftCardDetails from 'Templates/Redefine_GiftCardDetails';

interface _GiftCardDetails_ExpectedProps {
  store: null | {
    storeId: null | number;
    storeCode: null | string;
    storeTypeId: null | number;
  };
  giftCard: null | _GiftCard;
}

const GiftCardDetails: React.FC<_GiftCardDetails_ExpectedProps> = ({
  giftCard,
  store,
}) => {
  if (!giftCard || !store || !store.storeTypeId || !store.storeCode) {
    return <>No data found</>;
  }

  return (
    <Redefine_GiftCardDetails
      giftCard={giftCard}
      storeTypeId={store.storeTypeId}
      storeCode={store.storeCode}
    />
  );
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE METHOD ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const expectedProps: _GiftCardDetails_ExpectedProps = {
  store: null,
  giftCard: null,
};

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<_GiftCardDetails_ExpectedProps>> => {
  let { store, giftCard } = expectedProps;
  const { giftId } = extractIdFromPathName(context.params);

  if (_globalStore.storeId) {
    store = {
      storeCode: _globalStore.code,
      storeTypeId: _globalStore.storeTypeId,
      storeId: _globalStore.storeId,
    };
  }

  try {
    if (store?.storeId && giftId) {
      giftCard = await FetchGiftCardDetailsBySename({
        storeId: store.storeId,
        giftId: giftId,
      });
    }

    conditionalLogV2({
      data: expectedProps,
      show: __console.giftCard.serverMethod,
      type: 'SERVER_METHOD',
      name: 'GiftCard: getServerSide sending Props',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'GiftCard: getServerSideProps - Something went wrong',
    });
  }

  return {
    props: {
      store: store,
      giftCard: giftCard,
    },
  };
};

export default GiftCardDetails;

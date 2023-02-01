import { FetchGiftCardsList } from '@services/gift.service';
import { _GiftCard } from '@services/gift.service.type';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import React from 'react';
import { _globalStore } from 'store.global';
import Redefine_GiftCards from 'Templates/Redefine_GiftCards';

interface _GiftCard_ExpectedProps {
  store: null | {
    storeId: null | number;
    storeCode: null | string;
    storeTypeId: null | number;
  };
  giftCards: null | _GiftCard[];
}

const GiftCards: React.FC<_GiftCard_ExpectedProps> = ({ giftCards, store }) => {
  if (!giftCards || !store || !store.storeTypeId || !store.storeCode) {
    return <>No data found</>;
  }

  return (
    <Redefine_GiftCards
      giftCards={giftCards}
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

const expectedProps: _GiftCard_ExpectedProps = {
  store: null,
  giftCards: null,
};

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<_GiftCard_ExpectedProps>> => {
  let { store, giftCards } = expectedProps;

  if (_globalStore.storeId) {
    store = {
      storeCode: _globalStore.code,
      storeTypeId: _globalStore.storeTypeId,
      storeId: _globalStore.storeId,
    };
  }

  try {
    if (store?.storeId) {
      giftCards = await FetchGiftCardsList({ storeId: store.storeId });
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
      giftCards: giftCards,
    },
  };
};

export default GiftCards;

import { StoreLayout } from '@constants/enum';
import { _GiftCard } from '@services/gift.service.type';
import { _StoreCache } from '@type/slug.type';
import React from 'react';
import { Corporate_GiftCardsList } from './CorporateStore/GiftCards';

interface _props {
  giftCards: _GiftCard[];
}

const Redefine_GiftCards: React.FC<_props & _StoreCache> = (props) => {
  if (props.storeTypeId === StoreLayout.CorporateStore) {
    return (
      <Corporate_GiftCardsList
        giftCards={props.giftCards}
        storeCode={props.storeCode}
      />
    );
  }
  if (props.storeTypeId === StoreLayout.EcommerceStore) {
    return <>No Page for {props.storeTypeId}</>;
  }
  if (props.storeTypeId === StoreLayout.StoreBuilderStore) {
    return <>No Page for {props.storeTypeId}</>;
  }
  return <></>;
};

export default Redefine_GiftCards;

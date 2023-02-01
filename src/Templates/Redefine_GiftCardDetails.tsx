import { StoreLayout } from '@constants/enum';
import { _GiftCard } from '@services/gift.service.type';
import { _StoreCache } from '@type/slug.type';
import React from 'react';
import { Corporate_GiftCardDetails } from './CorporateStore/GiftCards';
interface _props {
  giftCard: _GiftCard;
}
const Redefine_GiftCardDetails: React.FC<_props & _StoreCache> = (props) => {
  if (props.storeTypeId === StoreLayout.CorporateStore) {
    return (
      <Corporate_GiftCardDetails
        giftCard={props.giftCard}
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

export default Redefine_GiftCardDetails;

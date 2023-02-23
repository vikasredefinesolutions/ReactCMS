import { StoreLayout } from '@constants/enum';
import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { _StoreCache } from '@type/slug.type';
import { conditionalLogV2, __console } from 'helpers/global.console';
import React from 'react';
import Corporate_ProductDetails from './CorporateStore/ProductDetail';
import Ecommerce_ProductDetail from './Ecommerce/ProductDetail';
import StoreBuilder_ProductDetail from './StoreBuilder/ProductDetail';

const Redefine_ProductDetails: React.FC<_ProductDetailsProps & _StoreCache> = (
  props,
) => {
  // const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);
  // const storeTypeId = 1;
  conditionalLogV2({
    data: props,
    show: __console.productDetails.page,
    type: 'PAGE',
    name: 'Redefine_ProductDetails - Props',
  });
  if (props.storeTypeId === StoreLayout.CorporateStore) {
    return <Corporate_ProductDetails {...props} />;
  }

  if (props.storeTypeId === StoreLayout.EcommerceStore) {
    return <Ecommerce_ProductDetail {...props} />;
  }

  if (props.storeTypeId === StoreLayout.StoreBuilderStore) {
    return <StoreBuilder_ProductDetail {...props} />;
  }

  return <>No store type found for {props.storeTypeId}</>;
};

export default Redefine_ProductDetails;

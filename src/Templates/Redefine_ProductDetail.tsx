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
  conditionalLogV2({
    data: props,
    show: __console.productDetails.page,
    type: 'PAGE',
    name: 'Redefine_ProductDetails - Props',
  });

  if (props.storeTypeId === 1) {
    return <Corporate_ProductDetails {...props} />;
  }

  if (props.storeTypeId === 2) {
    return <Ecommerce_ProductDetail {...props} />;
  }

  if (props.storeTypeId === 3) {
    return <StoreBuilder_ProductDetail {...props} />;
  }

  return <>No store type found for {props.storeTypeId}</>;
};

export default Redefine_ProductDetails;

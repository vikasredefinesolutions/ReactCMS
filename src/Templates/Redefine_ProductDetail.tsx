import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { useTypedSelector } from 'hooks';
import React from 'react';
import Corporate_ProductDetails from './CorporateStore/ProductDetail';
import Ecommerce_ProductDetail from './Ecommerce/ProductDetail';
import StoreBuilder_ProductDetail from './StoreBuilder/ProductDetail';

const Redefine_ProductDetails: React.FC<_ProductDetailsProps> = (props) => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);
  conditionalLogV2({
    data: props,
    show: __console.productDetails.page,
    type: 'PAGE',
    name: 'Redefine_ProductDetails - Props',
  });

  if (storeTypeId === 1) {
    return <Corporate_ProductDetails {...props} />;
  }

  if (storeTypeId === 2) {
    return <Ecommerce_ProductDetail {...props} />;
  }

  if (storeTypeId === 3) {
    return <StoreBuilder_ProductDetail {...props} />;
  }

  return <>No store type found for {storeTypeId}</>;
};

export default Redefine_ProductDetails;

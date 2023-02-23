import { StoreLayout } from '@constants/enum';
import { _CompareProducts } from '@type/compare';
import { useTypedSelector } from 'hooks';
import React from 'react';
import Corporate_CompareProduct from './CorporateStore/CompareProduct';
import Ecommerce_CompareProduct from './Ecommerce/CompareProduct';
import StoreBuilder_CompareProduct from './StoreBuilder/CompareProduct';

interface _props {
  products: _CompareProducts | null;
}

const Redefine_CompareProducts: React.FC<_props> = (props) => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);

  if (storeTypeId === StoreLayout.CorporateStore) {
    return <Corporate_CompareProduct {...props} />;
  }

  if (storeTypeId === StoreLayout.EcommerceStore) {
    return <Ecommerce_CompareProduct {...props} />;
  }

  if (storeTypeId === StoreLayout.StoreBuilderStore) {
    return <StoreBuilder_CompareProduct {...props} />;
  }

  return <>No store type found</>;
};

export default Redefine_CompareProducts;

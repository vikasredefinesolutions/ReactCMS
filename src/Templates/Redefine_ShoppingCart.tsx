import { StoreLayout } from '@constants/enum';
import { useTypedSelector } from 'hooks';
import React from 'react';
import Corporate_ShoppingCart from './CorporateStore/ShoppingCart';
import Ecommerce_ShoppingCart from './Ecommerce/ShoppingCart/Ecommerce_ShoppingCart_view';

const Redefine_ShoppingCart: React.FC = () => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);

  if (storeTypeId === StoreLayout.CorporateStore) {
    return <Corporate_ShoppingCart />;
  }

  if (storeTypeId === StoreLayout.EcommerceStore) {
    return <Ecommerce_ShoppingCart />;
  }

  if (storeTypeId === StoreLayout.StoreBuilderStore) {
    return <> </>;
  }

  return <>No store type found</>;
};

export default Redefine_ShoppingCart;

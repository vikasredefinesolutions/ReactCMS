import { StoreLayout } from '@constants/enum';
import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {}

const Redefine_ProductList: React.FC<_props> = () => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);

  if (storeTypeId === StoreLayout.CorporateStore) {
    return <> </>;
  }

  if (storeTypeId === StoreLayout.EcommerceStore) {
    return <> </>;
  }

  if (storeTypeId === StoreLayout.StoreBuilderStore) {
    return <> </>;
  }

  return <>No store type found</>;
};

export default Redefine_ProductList;

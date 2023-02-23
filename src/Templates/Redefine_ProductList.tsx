import dynamic from 'next/dynamic';

import { StoreLayout } from '@constants/enum';
import { _ProductListProps } from '@type/slug.type';
import { useTypedSelector } from 'hooks';
import React from 'react';
import Corporate_ProductList from './CorporateStore/ProductList';
import StoreBuilder_ProductList from './StoreBuilder/ProductList';

const DynamicEcommerceProductList = dynamic(
  () => import('./Ecommerce/ProductList'),
  {
    loading: () => <>Loading ...</>,
  },
);

interface _props {
  productListing: _ProductListProps | null;
  slug: string;
  seType: string;
}

const Redefine_ProductList: React.FC<_props> = (props) => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);
  if (storeTypeId === StoreLayout.CorporateStore) {
    return <Corporate_ProductList {...props} />;
  }

  if (storeTypeId === StoreLayout.EcommerceStore) {
    return <DynamicEcommerceProductList {...props} />;
  }

  if (storeTypeId === StoreLayout.StoreBuilderStore) {
    return <StoreBuilder_ProductList {...props} />;
  }

  return <>No store type found</>;
};

export default Redefine_ProductList;

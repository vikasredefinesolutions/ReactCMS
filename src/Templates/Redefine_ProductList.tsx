import { _ProductListProps } from '@type/slug.type';
import { useTypedSelector } from 'hooks';
import React from 'react';
import Corporate_ProductList from './CorporateStore/ProductList';

interface _props {
  productListing: _ProductListProps | null;
  slug: string;
}
const Redefine_ProductList: React.FC<_props> = (props) => {
  const storeTypeId = 1;
  useTypedSelector((state) => state.store.storeTypeId);

  if (storeTypeId === 1) {
    return <Corporate_ProductList {...props} />;
  }

  if (storeTypeId === 2) {
    return <> </>;
  }

  if (storeTypeId === 3) {
    return <> </>;
  }

  return <>No store type found</>;
};

export default Redefine_ProductList;

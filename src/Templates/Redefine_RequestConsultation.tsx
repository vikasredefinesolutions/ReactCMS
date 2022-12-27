import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {}

const Redefine_ProductList: React.FC<_props> = () => {
  const storeTypeId = useTypedSelector((state) => state.store.storeTypeId);

  if (storeTypeId === 1) {
    return <> </>;
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

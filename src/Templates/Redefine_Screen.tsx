import Corporate_Layout from 'Templates/CorporateStore/Layout';
import Ecommerce_Layout from 'Templates/Ecommerce/Layout/Ecommerce_Layout_View';
import StoreBuilder_Layout from 'Templates/StoreBuilder/Layout';
import { addCustomEvents } from 'helpers/common.helper';
import { useTypedSelector } from 'hooks';
import React, { useEffect } from 'react';

interface _props {
  children: React.ReactNode;
}

const Screen: React.FC<_props> = ({ children }) => {
  const { storeTypeId } = useTypedSelector((state) => state.store);

  useEffect(() => {
    if (localStorage) {
      addCustomEvents('localStorage');
    }
  }, []);

  if (storeTypeId === 1) {
    return <Corporate_Layout>{children}</Corporate_Layout>;
  }

  if (storeTypeId === 2) {
    return <Ecommerce_Layout>{children}</Ecommerce_Layout>;
  }

  if (storeTypeId === 3) {
    return <StoreBuilder_Layout>{children}</StoreBuilder_Layout>;
  }

  return <>{children}</>;
};

export default Screen;

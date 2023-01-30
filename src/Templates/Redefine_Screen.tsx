import { _Footer } from '@type/APIs/footer.res';
import { _TransformedHeaderConfig } from '@type/APIs/header.res';
import { _StoreCache } from '@type/slug.type';
import { addCustomEvents } from 'helpers/common.helper';
import React, { useEffect } from 'react';
import Corporate_Layout from 'Templates/CorporateStore/Layout';
import Ecommerce_Layout from 'Templates/Ecommerce/Layout/Ecommerce_Layout_View';
import StoreBuilder_Layout from 'Templates/StoreBuilder/Layout';

interface _props {
  children: React.ReactNode;
  logoUrl: string;
  configs: {
    header: _TransformedHeaderConfig | null;
    footer: _Footer | null;
  };
}

const Screen: React.FC<_props & _StoreCache> = ({
  children,
  storeTypeId,
  logoUrl,
  storeCode,
  configs,
}) => {
  useEffect(() => {
    if (localStorage) {
      addCustomEvents('localStorage');
    }
  }, []);

  if (storeTypeId === 1) {
    return (
      <Corporate_Layout logoUrl={logoUrl} storeCode={storeCode}>
        {children}
      </Corporate_Layout>
    );
  }

  if (storeTypeId === 2) {
    return (
      <Ecommerce_Layout
        storeCode={storeCode}
        logoUrl={logoUrl}
        configs={configs}
      >
        {children}
      </Ecommerce_Layout>
    );
  }

  if (storeTypeId === 3) {
    return <StoreBuilder_Layout>{children}</StoreBuilder_Layout>;
  }

  return <>{children}</>;
};

export default Screen;

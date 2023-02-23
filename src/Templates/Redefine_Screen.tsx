import { StoreLayout } from '@constants/enum';
import { _Footer } from '@type/APIs/footer.res';
import { _StoreCache } from '@type/slug.type';
import { addCustomEvents } from 'helpers/common.helper';
import React, { useEffect } from 'react';
import { _MenuItems } from 'show.type';
import Corporate_Layout from 'Templates/CorporateStore/Layout';
import Ecommerce_Layout from 'Templates/Ecommerce/Layout/Ecommerce_Layout_View';
import StoreBuilder_Layout from 'Templates/StoreBuilder/Layout';

interface _props {
  children: React.ReactNode;
  logoUrl: string;
  configs: {
    footer: _Footer | null;
  };
  menuItems: _MenuItems | null;
}

const Screen: React.FC<_props & _StoreCache> = ({
  children,
  storeTypeId,
  logoUrl,
  storeCode,
  menuItems,
  configs,
}) => {
  useEffect(() => {
    if (localStorage) {
      addCustomEvents('localStorage');
    }
  }, []);

  if (storeTypeId === StoreLayout.CorporateStore) {
    return (
      <Corporate_Layout
        logoUrl={logoUrl}
        configs={configs}
        menuItems={menuItems}
        storeCode={storeCode}
      >
        {children}
      </Corporate_Layout>
    );
  }

  if (storeTypeId === StoreLayout.EcommerceStore) {
    return (
      <Ecommerce_Layout
        logoUrl={logoUrl}
        configs={configs}
        menuItems={menuItems}
        storeCode={storeCode}
      >
        {children}
      </Ecommerce_Layout>
    );
  }

  if (storeTypeId === StoreLayout.StoreBuilderStore) {
    return (
      <StoreBuilder_Layout
        logoUrl={logoUrl}
        configs={configs}
        menuItems={menuItems}
      >
        {children}
      </StoreBuilder_Layout>
    );
  }

  return <>{children}</>;
};

export default Screen;

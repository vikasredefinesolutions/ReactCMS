import { _Footer } from '@type/APIs/footer.res';
import * as _AppController from 'Controllers/_AppController.async';
import { cLog } from 'helpers/global.console';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { _MenuItems } from 'show.type';
import { BreadCrumb, Footer, Header } from './Components';

interface _props {
  children: React.ReactNode;
  storeCode: string;
  logoUrl: string;
  menuItems: _MenuItems | null;
  configs: {
    footer: _Footer | null;
  };
}

const Ecommerce_Layout: React.FC<_props> = ({
  children,
  storeCode,
  menuItems,
  logoUrl,
  configs,
}) => {
  const [header, setHeader] = useState<{
    storeCode: string;
    logoUrl: string;
    menuItems: _MenuItems | null;
  }>({ storeCode: storeCode, logoUrl: logoUrl, menuItems: menuItems });
  const storeId = useTypedSelector((state) => state.store.id);

  const router = useRouter();

  useEffect(() => {
    if (!header.menuItems && storeId) {
      _AppController.fetchMenuItems(storeId).then((res) => {
        cLog('mccs', '');
        setHeader((last) => ({
          ...last,
          menuItems: res,
        }));
      });
    }

    setHeader((last) => ({
      ...last,
      storeCode: storeCode || last.storeCode,
      logoUrl: logoUrl || last.logoUrl,
    }));
  }, [storeCode, logoUrl, storeId]);

  return (
    <>
      <Header
        storeCode={header.storeCode}
        logoUrl={{
          desktop: header.logoUrl,
        }}
        menuItems={useMemo(() => header.menuItems, [header.menuItems])}
      />

      {router.pathname !== '/cart.html' && <BreadCrumb />}
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer data={configs.footer} />
    </>
  );
};

export default React.memo(Ecommerce_Layout);

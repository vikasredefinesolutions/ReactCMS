import { _Footer } from '@type/APIs/footer.res';
import React, { useEffect, useMemo, useState } from 'react';
import { _MenuItems } from 'show.type';
import { BreadCrumb, Footer, Header, NotificationBar } from './Components';

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

  useEffect(() => {
    setHeader((last) => ({
      ...last,
      storeCode: storeCode || last.storeCode,
      logoUrl: logoUrl || last.logoUrl,
    }));
  }, [storeCode, logoUrl]);

  return (
    <>
      <NotificationBar />
      <Header
        storeCode={header.storeCode}
        logoUrl={{
          desktop: header.logoUrl,
        }}
        menuItems={useMemo(() => header.menuItems, [header.menuItems])}
      />
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer data={configs.footer} />
    </>
  );
};

export default React.memo(Ecommerce_Layout);

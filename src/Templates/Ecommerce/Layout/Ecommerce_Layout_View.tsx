import { _Footer } from '@type/APIs/footer.res';
import React, { useMemo } from 'react';
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
  const HeaderComp = useMemo(() => {
    
    return (
      <Header
        storeCode={storeCode}
        logoUrl={{
          desktop: logoUrl,
        }}
        menuItems={menuItems}
      />
    );
  }, [storeCode, logoUrl, menuItems]);

  return (
    <>
      <NotificationBar />
      {HeaderComp}
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer data={configs.footer} />
    </>
  );
};

export default Ecommerce_Layout;

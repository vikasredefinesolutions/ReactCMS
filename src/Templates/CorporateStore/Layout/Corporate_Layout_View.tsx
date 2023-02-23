import { _Footer } from '@type/APIs/footer.res';
import {
  BreadCrumb,
  NotificationBar,
} from 'Templates/Ecommerce/Layout/Components';
import React, { useMemo } from 'react';
import { _MenuItems } from 'show.type';
import Footer from './Footer/Corporate_Footer_View';
import Corporate_Header from './Header';

interface _props {
  children: React.ReactNode;
  storeCode: string;
  logoUrl: string;
  menuItems: _MenuItems | null;
  configs: {
    footer: _Footer | null;
  };
}

const Corporate_Layout: React.FC<_props> = ({
  children,
  storeCode,
  menuItems,
  logoUrl,
  configs,
}) => {
  const HeaderComp = useMemo(() => {
    return (
      <Corporate_Header
        storeCode={storeCode}
        logoUrl={logoUrl}
        menuItems={menuItems}
      />
    );
  }, [storeCode, logoUrl, menuItems]);
  return (
    <>
      <NotificationBar />
      {/* <Header storeCode={storeCode} /> */}
      {HeaderComp}
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer data={configs.footer} />
    </>
  );
};

export default Corporate_Layout;

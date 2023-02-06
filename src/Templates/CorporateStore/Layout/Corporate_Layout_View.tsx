import { _Footer } from '@type/APIs/footer.res';
import React from 'react';
import { _MenuItems } from 'show.type';
import {
  BreadCrumb,
  NotificationBar,
} from 'Templates/Ecommerce/Layout/Components';
import Footer from './Footer/Corporate_Footer_View';
import Header from './Header';

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
  configs,
}) => {
  return (
    <>
      <NotificationBar />
      <Header storeCode={storeCode} />
      <BreadCrumb />
      <>{children}</>
      <Footer data={configs.footer} />
    </>
  );
};

export default Corporate_Layout;

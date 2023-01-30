import React from 'react';
import {
  BreadCrumb,
  NotificationBar,
} from 'Templates/Ecommerce/Layout/Components';
import Header from './Header';

interface _props {
  children: React.ReactNode;
  storeCode: string;
  logoUrl: string;
}

const Corporate_Layout: React.FC<_props> = ({ children, storeCode }) => {
  return (
    <>
      <NotificationBar />
      <Header storeCode={storeCode} />
      <BreadCrumb />
      <>{children}</>
    </>
  );
};

export default Corporate_Layout;

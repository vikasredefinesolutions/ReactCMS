import React from 'react';
import { BreadCrumb, NotificationBar } from 'Templates/Ecommerce/Layout/Components';
import Header from './Header';

interface _props {
  children: React.ReactNode;
}

const Corporate_Layout: React.FC<_props> = ({ children }) => {
  return (
    <>
      <NotificationBar />
      <Header />
      <BreadCrumb />
      <>{children}</>
    </>
  );
};

export default Corporate_Layout;

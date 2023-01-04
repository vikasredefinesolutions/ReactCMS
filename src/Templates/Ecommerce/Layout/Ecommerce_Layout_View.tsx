import React from 'react';
import { BreadCrumb, Footer, Header, NotificationBar } from './Components';

interface _props {
  children: React.ReactNode;
}

const Ecommerce_Layout: React.FC<_props> = ({ children }) => {
  return (
    <>
      <NotificationBar />
      <Header />
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </>
  );
};

export default Ecommerce_Layout;

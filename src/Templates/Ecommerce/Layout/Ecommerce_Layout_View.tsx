import { _Footer } from '@type/APIs/footer.res';
import { _TransformedHeaderConfig } from '@type/APIs/header.res';
import React from 'react';
import { BreadCrumb, Footer, Header, NotificationBar } from './Components';

interface _props {
  children: React.ReactNode;
  storeCode: string;
  logoUrl: string;
  configs: {
    header: _TransformedHeaderConfig | null;
    footer: _Footer | null;
  };
}

const Ecommerce_Layout: React.FC<_props> = ({
  children,
  storeCode,
  logoUrl,
}) => {
  return (
    <>
      <NotificationBar />
      <Header
        storeCode={storeCode}
        logoUrl={{
          desktop: logoUrl,
        }}
      />
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </>
  );
};

export default Ecommerce_Layout;

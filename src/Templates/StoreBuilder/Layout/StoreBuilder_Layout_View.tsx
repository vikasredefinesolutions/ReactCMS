import { _Footer } from '@type/APIs/footer.res';
import React from 'react';
import { _MenuItems } from 'show.type';
import StoreBuilder_Footer from './Components/StoreBuilder_Footer';
import StoreBuilder_Header from './Components/StoreBuilder_Header';
import StoreBuilder_NotificationBar from './Components/StoreBuilder_NotificationBar';

interface _props {
  children: React.ReactNode;
  logoUrl: string;
  menuItems: _MenuItems | null;
  configs: {
    footer: _Footer | null;
  };
}

const StoreBuilder_Layout: React.FC<_props> = ({
  children,
  configs,
  logoUrl,
  menuItems,
}) => {
  return (
    <>
      <StoreBuilder_Header
        logoUrl={{
          desktop: logoUrl,
        }}
        menuItems={menuItems}
      />
      <StoreBuilder_NotificationBar />
      {children}
      <StoreBuilder_Footer data={configs.footer} />
    </>
  );
};

export default StoreBuilder_Layout;

import { useActions } from 'hooks';
import React from 'react';
import BreadCrumb from './Layout/BreadCrumb';

import Footer from './Layout/Footer';
import Header from './Layout/Header/index';
import Notification from './Layout/Notification';
interface _props {
  children: React.ReactNode;
}
const Screen: React.FC<_props> = ({ children }) => {
  const { logInUser } = useActions();

  return (
    <>
      <Notification />
      <Header />
      <BreadCrumb />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Screen;

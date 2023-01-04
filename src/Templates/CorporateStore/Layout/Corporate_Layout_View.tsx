import React from 'react';
import Header from './Header';

interface _props {
  children: React.ReactNode;
}

const Corporate_Layout: React.FC<_props> = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

export default Corporate_Layout;

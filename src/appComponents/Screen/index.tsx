import React from 'react';
import '../../Assets/css/output.css';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
interface _props {
  children: React.ReactNode;
}
const Screen: React.FC<_props> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Screen;

import { useTypedSelector } from 'hooks';
import React from 'react';
interface _props {
  children: React.ReactNode;
}

export const SpinnerComponent = () => (
  <div id="root">
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  </div>
)

const Spinner: React.FC<_props> = ({ children }) => {
  const showLoader = useTypedSelector((state) => state.loader.showLoader);

  return (
    <>
      {showLoader && (
        <SpinnerComponent />
      )}
      {children}
    </>
  );
};

export default Spinner;

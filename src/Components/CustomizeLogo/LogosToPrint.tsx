import { useTypedSelector } from 'hooks';
import React from 'react';
interface _props {
  setShowOrSelect: React.Dispatch<React.SetStateAction<'SHOW' | 'SELECT'>>;
}
const LogosToPrint: React.FC<_props> = ({ setShowOrSelect }) => {
  const selectedLogos = useTypedSelector(
    (state) => state.product.toCheckout.logos,
  );

  return (
    <div className="step-2">
      {selectedLogos?.map((logo, index) => {
        return (
          <div key={logo.no} className="border border-gray-200 p-4 mt-4">
            <div className="">Location: {logo.location.label}</div>
            <div className="mt-2 w-32">
              <img
                className="inline-block"
                src="images/Right-Chest-70-191.jpg"
                alt=""
              />
            </div>
            <div className="mt-2">Logo {logo.logo.name}</div>
            <div className="mt-2 flex gap-2 items-center">
              <div className="font-semibold">Logo {index + 1}:</div>
              <div className="w-20 h-20 p-1 inline-flex items-center justify-center border border-gray-200">
                <img className="inline-block" src={logo.logo.url} alt="" />
              </div>
            </div>
            <div className="mt-2">
              *Please Note: The above logo may not reflect the actual selected
              colors.
            </div>
          </div>
        );
      })}

      <div className="mt-4">
        <button
          onClick={() => setShowOrSelect('SELECT')}
          className="btn btn-primary w-full text-center"
        >
          ADD ANOTHER LOGO
        </button>
      </div>
    </div>
  );
};

export default LogosToPrint;

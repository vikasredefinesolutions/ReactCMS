import { _LogoSteps } from 'definations/product.type';
import React, { useState } from 'react';
import SelectLocation from './SelectLocation';
import SelectLogo from './SelectLogo';
import ShareLater from './ShareLater';

// STEPS : SELECT => LATER / NOW => DONE

interface _props {
  setShowOrSelect: React.Dispatch<React.SetStateAction<'SHOW' | 'SELECT'>>;
}

const CustomizeLogoSteps: React.FC<_props> = ({ setShowOrSelect }) => {
  const [step, setNextStep] = useState<_LogoSteps[]>(['SELECT_LOCATION']);

  if (step[2] === 'DONE') {
    setShowOrSelect('SHOW');
  }

  return (
    <>
      <div className="">
        <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title">
          Logo
        </div>
        <div className="p-4 divide-y divide-gray-200">
          {step[0] === 'SELECT_LOCATION' && (
            <SelectLocation setNextStep={setNextStep} />
          )}
          {step[1] === 'SELECT_NOW' && <SelectLogo setNextStep={setNextStep} />}
          {step[1] === 'SHARE_LATER' && (
            <ShareLater setNextStep={setNextStep} />
          )}
        </div>
      </div>
    </>
  );
};

export default CustomizeLogoSteps;

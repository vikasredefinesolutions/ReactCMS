import config from 'api.config';
import { _LogoSteps } from 'definations/product.type';
import React, { useState } from 'react';

import { useActions, useTypedSelector } from 'hooks';

interface _props {
  setNextStep: React.Dispatch<React.SetStateAction<_LogoSteps[]>>;
}

const SelectLocation: React.FC<_props> = ({ setNextStep }) => {
  const { updateLogoDetails } = useActions();

  const [selectedLocation, setLocation] = useState<{
    imageUrl: string;
    label: string;
    value: string;
  } | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const { availableOptions } = useTypedSelector(
    (state) => state.product.toCheckout,
  );

  const actionHandler = (action: 'now' | 'later') => {
    if (selectedLocation === null && action !== 'later') {
      setShowError(true);
      return;
    }

    if (action === 'later') {
      setNextStep(['SELECT_LOCATION', 'SHARE_LATER']);
      return;
    }

    if (action === 'now') {
      updateLogoDetails({ location: selectedLocation });
      setNextStep(['SELECT_LOCATION', 'SELECT_NOW']);
      return;
    }
  };

  return (
    <div className='p-4'>
      <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2'>
        1. Select a Location
        {showError && (
          <span className='text-rose-600'>{`(Please Select Location)`}</span>
        )}
      </div>
      <div className='max-w-5xl'>
        <ul className='flex flex-wrap gap-y-6 -mx-3'>
          {availableOptions?.map((pos) => {
            return (
              <li
                key={pos.value}
                className='w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex'
                onClick={() => {
                  setLocation({
                    imageUrl: `${config.mediaBaseUrl}${pos.logo.url}`,
                    label: pos.label,
                    value: pos.value,
                  });
                  if (showError) {
                    setShowError(false);
                  }
                }}
              >
                <div
                  className={`border-2 ${
                    selectedLocation?.value === pos.value
                      ? 'border-primary'
                      : 'border-gray-200'
                  } hover:border-primary p-3 w-full text-ceter`}
                >
                  <div className=''>
                    <img
                      className='inline-block'
                      src={`${config.mediaBaseUrl}${pos.logo.url}`}
                      alt={pos.label}
                    />
                  </div>
                  <div className='mt-2'>{pos.label}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='mt-3'>
        <button
          onClick={() => actionHandler('now')}
          className='btn btn-primary'
        >
          SELECT YOUR LOGO
        </button>
        <span>OR</span>
        <button
          onClick={() => actionHandler('later')}
          className='btn btn-primary'
        >
          SHARE LOGO LATER
        </button>
      </div>
    </div>
  );
};

export default SelectLocation;

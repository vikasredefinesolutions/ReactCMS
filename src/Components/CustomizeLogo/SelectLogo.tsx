import { _LogoSteps } from 'definations/product.type';
import { _PreLogos } from 'dummy/filters';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LogoContainer from './LogoContainer';
import UploadLogoPopup from './UploadLogoPopup';

interface _props {
  setNextStep: React.Dispatch<React.SetStateAction<_LogoSteps[]>>;
}

const SelectLogo: React.FC<_props> = ({ setNextStep }) => {
  const router = useRouter();
  const { updateOptions, updateLogoDetails } = useActions();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [preLogos, setPreLogos] = useState<
    {
      label: string;
      status: string;
      estimatedCost: number;
      id: number;
      image: {
        url: string;
      };
    }[]
  >(_PreLogos);
  const [selected, setSelected] = useState<null | {
    url: string;
    name: string;
    id: number;
  }>(null);
  const { logos } = useTypedSelector((state) => state.product.toCheckout);

  const actionHandler = (action: 'apply' | 'cancel') => {
    if (action === 'cancel') {
      router.back();
      return;
    }

    if (selected === null) {
      setShowError(true);
      return;
    }

    if (action === 'apply') {
      if (logos !== null) {
        updateOptions({
          value: logos[logos.length - 1].location.value,
          label: logos[logos.length - 1].location.label,
          addOrRemove: 'REMOVE',
          logo: {
            url: logos[logos.length - 1].logo.url,
          },
        });
        updateLogoDetails({
          location: logos[logos.length - 1].location,
          url: selected.url,
          name: selected.name,
        });
      }

      setNextStep(['SELECT_LOCATION', 'SELECT_NOW', 'DONE']);
      return;
    }
  };

  return (
    <>
      <div className='p-4'>
        <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2'>
          2. Select a Logo{' '}
          {showError && (
            <span className='text-rose-600'>{`(Please Select Logo)`}</span>
          )}
        </div>
        <div className='max-w-5xl'>
          <ul className='flex flex-wrap gap-y-6 -mx-3' x-data='{selected : 0}'>
            {preLogos.map((logo, index) => {
              return (
                <LogoContainer
                  key={index}
                  id={logo.id}
                  image={logo.image}
                  label={logo.label}
                  status={logo.status}
                  price={logo.estimatedCost}
                  selected={selected}
                  setSelected={(val) => {
                    setSelected(val);
                    if (showError) {
                      setShowError(false);
                    }
                  }}
                />
              );
            })}
            <li className='w-full sm:w-1/2 lg:w-1/4 text-center px-3 flex'>
              <div
                className='border-2 hover:border-primary p-3 w-full text-ceter border-gray-200'
                onClick={() => setOpenModal(true)}
              >
                <div className=''>
                  <img className='inline-block' src={'/images/logo-addnewLogo.jpg'} alt='' />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='mt-3'>
          <button
            onClick={() => actionHandler('apply')}
            className='btn btn-primary mr-1'
          >
            APPLY LOGO
          </button>
          <button
            onClick={() => actionHandler('cancel')}
            className='btn btn-primary'
          >
            CANCEL
          </button>
        </div>
      </div>
      {openModal && (
        <UploadLogoPopup
          id={'upload'}
          setOpenModal={setOpenModal}
          logoToShow={(logo) =>
            setPreLogos((logos) => [
              ...logos,
              {
                label: logo.name,
                status: 'In Process',
                estimatedCost: 5,
                id: 4,
                image: {
                  url: logo.previewURL,
                },
              },
            ])
          }
        />
      )}
    </>
  );
};

export default SelectLogo;

import { _LogoSteps } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React from 'react';
interface _props {
  setNextStep: React.Dispatch<React.SetStateAction<_LogoSteps[]>>;
}

const ShareLater: React.FC<_props> = ({ setNextStep }) => {
  const router = useRouter();
  const { updateOptions } = useActions();

  const { logos } = useTypedSelector((state) => state.product.toCheckout);

  const actionHandler = (action: 'CONTINUE' | 'CANCEL') => {
    if (action === 'CANCEL') {
      router.back();
      return;
    }

    if (action === 'CONTINUE') {
      if (logos !== null) {
        updateOptions({
          value: logos[logos.length - 1].location.value,
          label: logos[logos.length - 1].location.label,
          addOrRemove: 'REMOVE',
          logo: {
            url: '',
          },
        });
      }

      setNextStep(['SELECT_LOCATION', 'SHARE_LATER', 'DONE']);
      return;
    }
  };

  return (
    <div className='p-4'>
      <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title mb-2'>
        2. Share Logo Later
      </div>
      <div className=''>
        <div className=''>
          No Worries! One of our gear guides will be contacting you after your
          order has been submitted. We can finalize decoration details at that
          time.
        </div>
      </div>
      <div className='mt-3'>
        <button
          onClick={() => actionHandler('CONTINUE')}
          className='btn btn-primary mr-1'
        >
          CONTINUE
        </button>
        <button
          onClick={() => actionHandler('CANCEL')}
          className='btn btn-primary'
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default ShareLater;

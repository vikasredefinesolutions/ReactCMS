import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const CloseIcon: React.FC = () => {
  const { layout: storeLayout } = useTypedSelector((state) => state.store);
  const { toggleSideMenu } = useActions();

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='px-4 pt-5 pb-2 flex'>
        <button
          type='button'
          className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
          onClick={() => toggleSideMenu('CLOSE')}
        >
          <span className='sr-only'>Close menu</span>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className='px-4 pt-5 pb-2 flex'>
        <button
          type='button'
          className='p-2 rounded-md inline-flex items-center justify-center text-gray-600'
          onClick={() => toggleSideMenu('CLOSE')}
        >
          <span className='sr-only'>Close menu</span>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className='px-4 pt-5 pb-2 flex'>
        <button
          type='button'
          className='p-2 rounded-md inline-flex items-center justify-center text-gray-600'
          onClick={() => toggleSideMenu('CLOSE')}
        >
          <span className='sr-only'>Close menu</span>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>
    );
  }
  if (storeLayout == _Store.type4) {
    return (
      <div className='px-4 pt-5 flex'>
        <button
          type='button'
          className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
        >
          <span className='sr-only'>Close menu</span>
          <svg
            className='h-6 w-6'
            x-description='Heroicon name: outline/x'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
      </div>
    );
  }

  // for corpoarte store
  return (
    <div className='px-4 pt-5 pb-2 flex'>
      <button
        type='button'
        className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
        onClick={() => toggleSideMenu('CLOSE')}
      >
        <span className='sr-only'>Close menu</span>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CloseIcon;

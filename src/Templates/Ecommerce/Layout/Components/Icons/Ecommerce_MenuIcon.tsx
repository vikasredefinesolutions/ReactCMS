import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const MenuIcon: React.FC = () => {
  const { toggleSideMenu } = useActions();
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <button
        type='button'
        className='bg-white py-2 rounded-md text-primary hover:text-gray-500'
        onClick={() => toggleSideMenu('OPEN')}
      >
        <span className='sr-only'>Open menu</span>
        <svg
          className='h-6 w-6'
          x-description='Heroicon name: outline/menu'
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
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <button
        type='button'
        className='py-2 rounded-md text-gray-600'
        onClick={() => toggleSideMenu('OPEN')}
      >
        <span className='sr-only'>Open menu</span>
        <svg
          className='h-6 w-6'
          x-description='Heroicon name: outline/menu'
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
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <button
        type='button'
        className='py-2 rounded-md text-gray-600'
        onClick={() => toggleSideMenu('OPEN')}
      >
        <span className='sr-only'>Open menu</span>
        <svg
          className='h-6 w-6'
          x-description='Heroicon name: outline/menu'
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
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <button
        type='button'
        className='py-2 rounded-md text-white hover:text-primary'
        onClick={() => toggleSideMenu('OPEN')}
      >
        <span className='sr-only'>Open menu</span>
        <svg
          className='h-6 w-6'
          x-description='Heroicon name: outline/menu'
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
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
    );
  }
  return <></>;
};

export default MenuIcon;

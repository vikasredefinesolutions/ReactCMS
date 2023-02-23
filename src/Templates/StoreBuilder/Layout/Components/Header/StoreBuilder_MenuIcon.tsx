import { useActions } from 'hooks';
import React from 'react';

const StoreBuilder_MenuIcon: React.FC = () => {
  const { toggleSideMenu } = useActions();

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
};

export default StoreBuilder_MenuIcon;

import { paths } from '@constants/paths.constant';
import { _Logout } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import React, { useState } from 'react';
interface _props {
  screen: string;
}

const LoggedInMenu_Corporate: React.FC<_props> = ({ screen }) => {
  const { logInUser, logoutClearCart } = useActions();
  const { id: loggedIn, customer } = useTypedSelector((state) => state.user);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);
  const [focus, setFocus] = useState(false);

  const logoutHandler = () => {
    setFocus(false);
    logoutClearCart();
    _Logout(logInUser);
  };

  if (!loggedIn) return <></>;

  return (
    <div
      className='flex relative  hover:text-white'
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Link href={paths.loggedInMenu.title}>
        <a
          className={`flex items-center gap-1   ${
            screen === 'DESKTOP'
              ? 'hover:text-white text-white desktop'
              : 'hover:text-gary-800 text-gray-800 '
          }`}
        >
          <span className='text-sm hidden'>{customer?.firstname}</span>
          <svg
            className='w-6 h-6'
            x-description='Heroicon name: outline/user'
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
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            ></path>
          </svg>
        </a>
      </Link>
      {focus && (
        <div className='text-sm absolute right-0 top-full bg-white z-50 w-48  w-52'>
          <ul className='border-2 border-black'>
            <li className='border-t border-t-gray-300'>
              <Link href={paths.loggedInMenu.order}>
                <a className='flex p-2 gap-1'>
                  <span className='material-icons-outlined'>shopping_cart</span>
                  <span className=''>Order</span>
                </a>
              </Link>
            </li>
            <li className='border-t border-t-gray-300'>
              <Link href={paths.loggedInMenu.settings}>
                <a className='flex p-2 gap-1'>
                  <span className='material-icons-outlined'>construction</span>
                  <span className=''>Account Settings</span>
                </a>
              </Link>
            </li>
            <li className='border-t border-t-gray-300'>
              <Link href={paths.loggedInMenu.help}>
                <a className='flex p-2 gap-1'>
                  <span className='material-icons-outlined'>help_outline</span>
                  <span className=''>Help</span>
                </a>
              </Link>
            </li>
            <li className='border-t-2 border-t-gray-300'>
              <button
                onClick={() => logoutHandler()}
                className='flex p-2 gap-1 text-black'
              >
                <span className='material-icons-outlined'>logout</span>
                <span className=''>Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoggedInMenu_Corporate;

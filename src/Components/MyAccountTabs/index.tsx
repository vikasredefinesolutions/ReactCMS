import { paths } from '@constants/paths.constant';
import { _Logout } from 'helpers/common.helper';
import { useActions } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const _TABS = [
  { label: 'Account Settings', path: paths.myAccount.account_settings },
  { label: 'User Management', path: paths.myAccount.user_management },
  { label: 'Manage Logo', path: paths.myAccount.manage_logo },
  { label: 'Orders', path: paths.myAccount.orders },
  { label: 'Address', path: paths.myAccount.address },
  { label: 'Logout', path: null },
];

const MyAccountTabs: React.FC = () => {
  const { logInUser, logoutClearCart } = useActions();
  const { pathname: currentPath } = useRouter();

  const logoutHandler = () => {
    _Logout(logInUser);
    logoutClearCart();
  };

  return (
    <>
      <section>
        <div className='container mx-auto'>
          <div className='text-3xl font-primary uppercase text-center'>
            MY ACCOUNT
          </div>
          <div className='bg-gray-100 mt-5 mb-5 flex justify-center'>
            <ul className='flex flex-wrap gap-4'>
              {_TABS.map((tab, index) => {
                if (tab.path === null) {
                  return (
                    <li
                      key={index}
                      className={`border-b border-transparent text-base font-semibold px-3 py-3 ${
                        tab.path === currentPath ? 'border-blue-500' : ''
                      }`}
                    >
                      <button
                        onClick={logoutHandler}
                        className={tab.path === currentPath ? 'active' : ''}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                }

                const activeDir = currentPath.includes(tab.path);
                return (
                  <li
                    key={index}
                    className={`border-t text-base font-semibold px-3 py-3 ${
                      activeDir ? 'border-blue-500' : ''
                    }`}
                  >
                    <Link href={tab.path} className={activeDir ? 'active' : ''}>
                      {tab.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccountTabs;

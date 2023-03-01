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
      <section className='pt-7 tracking-[1.4px]'>
        <div className='container mx-auto'>
          <div className='pt-7 tracking-[1.4px]pt-7 tracking-[1.4px]pt-7 tracking-[1.4px]pt-7 tracking-[1.4px] text-center font-bold'>
            MY ACCOUNT
          </div>
          <div className='bg-gray-100 mt-6 flex justify-center'>
            <ul className='w-full space-x-[7px] max-w-[1330px] mx-auto text-center'>
              {_TABS.map((tab, index) => {
                if (tab.path === null) {
                  return (
                    <li
                      key={index}
                      className={`border-t border-transparent hover:border-black text-base font-semibold text-[#0a1c2b] hover:text-[#0a1c2b] focus:text-[#0a1c2b] px-[3%] py-2.5 whitespace-nowrap inline-block ${
                        tab.path === currentPath ? 'border-black border-t ' : ''
                      }`}
                    >
                      <button
                        onClick={logoutHandler}
                        className={`text-[#0a1c2b] hover:text-[#0a1c2b] focus:text-[#0a1c2b] font-semibold ${
                          tab.path === currentPath ? 'active' : ''
                        }`}
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
                    className={`border-t hover:border-black text-base font-semibold text-[#0a1c2b] hover:text-[#0a1c2b] focus:text-[#0a1c2b] px-[3%] py-2.5 whitespace-nowrap inline-block  ${
                      activeDir ? 'border-black ' : ''
                    }`}
                  >
                    <Link href={tab.path}>
                      <a
                        className={`text-[#0a1c2b] hover:text-[#0a1c2b] focus:text-[#0a1c2b] font-semibold ${
                          activeDir ? 'active' : ''
                        }`}
                      >
                        {tab.label}
                      </a>
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

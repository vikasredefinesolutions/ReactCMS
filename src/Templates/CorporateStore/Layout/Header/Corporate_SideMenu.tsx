import Backdrop from 'Templates/Ecommerce/Layout/Components/Backdrop';
import { CloseIcon } from 'Templates/Ecommerce/Layout/Components/Icons';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';
import { _MenuItems } from 'show.type';
import SearchBar from './Corporate_SearchBar';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
  menuItems: _MenuItems | null;
  storeCode: string;
  showSideMenu: 'OPEN' | 'CLOSE';
}

const MenuItems: React.FC<_props> = ({
  screen,
  menuItems: menuItemsFromRoot,
  storeCode,
  showSideMenu,
}) => {
  const [menuItems, setMenuItems] = useState<null | _MenuItems>(null);

  useEffect(() => {
    if (menuItemsFromRoot) {
      setMenuItems(menuItemsFromRoot);
    }
  }, [menuItemsFromRoot]);

  if (!menuItems) return <></>;

  if (screen === 'MOBILE' && showSideMenu === 'CLOSE') return <></>;

  if (storeCode === _Store.type6) {
    if (screen === 'MOBILE') {
      return (
        <div className='relative z-40 lg:hidden y'>
          <Backdrop />
          <div className='fixed inset-0 flex z-40'>
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='flex m-3 items-center'>
                <SearchBar />
                <CloseIcon />
              </div>
              {menuItems.items_content?.map((menu, index) => {
                if (menu === null) {
                  return null;
                }
                return <>Menu items</>;
              })}
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className='h-full xl:flex items-center justify-center flex-1'>
          <div className='ml-5'>
            <div className='h-full flex justify-center space-x-5 relative text-sm'>
              {menuItems.items_content?.map((menu, index) => {
                if (menu === null) {
                  return <>Empty State desktop</>;
                }
                return <>Menu items</>;
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default React.memo(MenuItems);

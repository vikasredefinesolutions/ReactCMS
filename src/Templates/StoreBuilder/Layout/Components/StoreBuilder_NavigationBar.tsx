import React, { useEffect, useState } from 'react';
import { _MenuItems } from 'show.type';
import StoreBuilder_Backdrop from 'Templates/StoreBuilder/Reuseables/StoreBuilder_BackDrop';
import StoreBuilder_CloseIcon from './Header/StoreBuilder_CloseIcon';
import StoreBuilder_MenuItem from './NavigationBar/StoreBuilder_MenuItem';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
  menuItems: _MenuItems | null;
  showSideMenu: 'OPEN' | 'CLOSE';
}

const StoreBuilder_NavigationBar: React.FC<_props> = ({
  screen,
  menuItems: menuItemsFromRoot,
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

  if (screen === 'MOBILE') {
    return (
      <div className='relative z-40 lg:hidden'>
        <StoreBuilder_Backdrop />
        <div className='fixed inset-0 flex z-40'>
          <div
            // x-transition:enter="transition ease-in-out duration-300 transform"
            // x-transition:enter-start="-translate-x-full"
            // x-transition:enter-end="translate-x-0"
            // x-transition:leave="transition ease-in-out duration-300 transform"
            // x-transition:leave-start="translate-x-0"
            // x-transition:leave-end="-translate-x-full"
            className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'
          >
            <StoreBuilder_CloseIcon />
            {menuItems.items_content?.map((menu, index) => {
              if (menu === null) {
                return <></>;
              }
              return (
                <StoreBuilder_MenuItem
                  key={index}
                  title={menu.title}
                  type={menu.type}
                  view={'MOBILE'}
                  content={menu.items}
                  url={menu.seName}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  if (screen === 'DESKTOP') {
    return (
      <div className='bg-white border-t border-b'>
        <div className='container mx-auto'>
          <div className=''>
            <div className='py-3 xl:py-2 flex items-center justify-between'>
              <div className='hidden h-full xl:flex items-center justify-center flex-1'>
                <div className='ml-5'>
                  <div className='h-full flex justify-center space-x-5 relative text-sm'>
                    {menuItems.items_content?.map((menu, index) => {
                      if (menu === null) {
                        return <></>;
                      }
                      return (
                        <StoreBuilder_MenuItem
                          key={index}
                          view={'DESKTOP'}
                          title={menu.title}
                          type={menu.type}
                          content={menu.items}
                          url={menu.seName}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default StoreBuilder_NavigationBar;

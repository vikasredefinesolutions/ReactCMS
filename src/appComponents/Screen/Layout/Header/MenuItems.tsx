import React, { useEffect, useState } from 'react';
import { _Store } from 'constants/store.constant';
import { _StoreMenu } from 'definations/APIs/header.res';
import { useTypedSelector } from 'hooks';
import { FetchStoreMenu } from 'services/header.service';
import Backdrop from '../Backdrop';
import CloseIcon from '../Icons/CloseIcon';
import MenuItem from './MenuItem';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
}

const MenuItems: React.FC<_props> = ({ screen }) => {
  const [menus, setMenus] = useState<_StoreMenu[] | null>(null);
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );
  const showSideMenu = useTypedSelector((state) => state.modals.sideMenu);

  useEffect(() => {
    if (storeId !== null) {
      FetchStoreMenu({ storeId: 2 }).then((res) => setMenus(res));
      // .catch((err) => console.log('err'))
      // .finally(() => console.log('close loader'));
    }
  }, [storeId]);

  if (screen === 'MOBILE' && showSideMenu === 'CLOSE') {
    return <></>;
  }

  if (storeLayout === _Store.type1) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              {menus?.map((menu) => (
                <MenuItem screen={'MOBILE'} menu={menu} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full xl:flex items-center justify-center flex-1">
          <div className="ml-5">
            <div className="h-full flex justify-center space-x-5 relative text-sm">
              {menus?.map((menu) => (
                <MenuItem key={menu.id} screen={'DESKTOP'} menu={menu} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menus?.map((menu, index) => (
                  <MenuItem key={index} screen={'MOBILE'} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full py-2 lg:flex items-center justify-center bg-[#051c2c] relative">
          <div className="">
            <div className="ml-6">
              <div className="h-full flex justify-center gap-x-4 xl:gap-x-10 text-base xl:tracking-widest">
                {menus?.map((menu) => (
                  <MenuItem key={menu.id} screen={'DESKTOP'} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menus?.map((menu) => (
                  <MenuItem key={menu.id} screen={'MOBILE'} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center">
          <div className="">
            <div className="ml-6">
              <div className="h-full flex justify-center space-x-6 xl:space-x-10 relative text-base xl:tracking-widest">
                {menus?.map((menu) => (
                  <MenuItem key={menu.id} screen={'DESKTOP'} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menus?.map((menu) => (
                  <MenuItem key={menu.id} screen={'DESKTOP'} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center flex-1">
          <div className="ml-6">
            <div className="h-full flex justify-center space-x-6 relative">
              {menus?.map((menu) => (
                <MenuItem key={menu.id} screen={'DESKTOP'} menu={menu} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default MenuItems;

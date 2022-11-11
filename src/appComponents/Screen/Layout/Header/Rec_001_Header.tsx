/* eslint no-use-before-define: 0 */ // --> OFF

import React from 'react';
import { _Header } from 'definations/header.type';
import { useTypedSelector } from 'hooks';
import LoginIcon from './components/LoginIcon';
import { default as CompanyLogo, default as Logo } from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MyCartIcon from './components/MyCartIcon';
import SearchBar from './components/SearchBar';
import WishListIcon from './components/WishListIcon';
import MenuItems from './Header/components/Menu/MenuItems';

interface _props {}

const Rec_001_Header: React.FC = () => {
  const show = useTypedSelector((state) => state.store.display.header);
  return (
    <section className="bg-white sticky top-0 z-20">
      <div className="bg-white">
        {/* <!-- Mobile menu --> */}
        <MenuItems screen="MOBILE" />

        <header className="relative">
          <nav aria-label="Top">
            <div className="bg-white shadow-md">
              <div className="container mx-auto">
                <div className="">
                  <div className="py-3 lg:py-4 flex items-center justify-between">
                    <Logo screen="DESKTOP" />

                    <MenuItems screen="DESKTOP" />

                    <div className="flex items-center lg:hidden space-x-4 pr-4">
                      <MenuIcon />
                      <SearchBar screen="MOBILE" />
                    </div>

                    <CompanyLogo screen="MOBILE" />
                    <div className="flex items-center justify-end">
                      <div className="flex items-center lg:ml-6">
                        <div className="flex items-center space-x-4">
                          {show.searchBar && <SearchBar screen={'DESKTOP'} />}
                          <WishListIcon />
                          <LoginIcon />
                          {/* <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}
                          <MyCartIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Rec_001_Header;

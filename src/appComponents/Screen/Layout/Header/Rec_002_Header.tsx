/* eslint no-use-before-define: 0 */ // --> OFF

import React from 'react';
import Notification from '../Notification';
import LoginIcon from './components/LoginIcon';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MyCartIcon from './components/MyCartIcon';
import SearchBar from './components/SearchBar';
import WishListIcon from './components/WishListIcon';
import MenuItems from './Header/components/Menu/MenuItems';

const GameDayGearHeader: React.FC = () => {
  return (
    <section className="bg-white sticky top-0 z-50">
      <Notification />
      <div className="container mx-auto">
        <div x-data="{ open: false }" className="bg-white">
          <MenuItems screen="MOBILE" />
          <header className="relative bg-white border-b border-gray-200">
            <nav aria-label="Top">
              <div className="">
                <div className="py-3 lg:py-4 flex items-center justify-between gap-3">
                  <Logo screen="DESKTOP" />

                  {/* MOBILE VIEW ---- START */}
                  <div className="flex items-center lg:hidden space-x-3">
                    <MenuIcon />
                    <SearchBar screen="MOBILE" />
                  </div>
                  {/* MOBILE VIEW ---- END */}

                  <SearchBar screen="DESKTOP" />
                  <Logo screen="MOBILE" />
                  <div className="flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <LoginIcon />
                        <WishListIcon />
                        <MyCartIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
      <MenuItems screen="DESKTOP" />
    </section>
  );
};

export default GameDayGearHeader;

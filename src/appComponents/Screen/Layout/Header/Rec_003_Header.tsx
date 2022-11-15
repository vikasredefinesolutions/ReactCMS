/* eslint no-use-before-define: 0 */ // --> OFF
import React from 'react';
import LoginIcon from './components/LoginIcon';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MyCartIcon from './components/MyCartIcon';
import SearchBar from './components/SearchBar';
import WishListIcon from './components/WishListIcon';
import MenuItems from './Header/components/Menu/MenuItems';

const PkHealthGearHeader: React.FC = () => {
  return (
    <section
      className="bg-white sticky top-0 left-0 right-0 z-50 border-b-2 border-b-gray-300"
      id=""
    >
      <div className="container mx-auto">
        <MenuItems screen="MOBILE" />
        <header className="relative border-b border-b-gray-200">
          {/* <!-- <div className="lg:hidden text-center">
                  <a href="index.html" className="inline-block pt-4">
                      <img src="../images/logo.png" alt="" className="h-14 w-auto">
                  </a>
              </div> --> */}
          <nav aria-label="Top">
            <div className="">
              <div className="py-3 flex items-center justify-between gap-3">
                <Logo screen="DESKTOP" />
                <div className="flex items-center lg:hidden space-x-3">
                  <MenuIcon />
                  <SearchBar screen="MOBILE" />
                </div>

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

      <MenuItems screen="DESKTOP" />
    </section>
  );
};

export default PkHealthGearHeader;

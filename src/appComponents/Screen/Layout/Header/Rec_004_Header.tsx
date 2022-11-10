/* eslint no-use-before-define: 0 */ // --> OFF

import React from 'react';
import Notification from '../Notification';
import LoginIcon from './components/LoginIcon';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MyCartIcon from './components/MyCartIcon';
import OnePercentLogo from './components/OnePercentLogo';
import SearchBar from './components/SearchBar';
import MenuItems from './MenuItems';

const DrivingiHeader: React.FC = () => {
  return (
    <section
      className="sticky top-0 z-50 bg-[url('https://www.drivingi.com/images/home-bg.jpg')] bg-cover"
      id="header"
    >
      <Notification />
      <div className="">
        <MenuItems screen="MOBILE" />
        <header className="relative">
          <nav aria-label="Top">
            <div className="">
              <div className="container mx-auto">
                <div className="py-3 lg:py-4 flex items-center justify-between">
                  <Logo screen="DESKTOP" />
                  <MenuItems screen="DESKTOP" />

                  <div className="flex items-center lg:hidden space-x-4">
                    <MenuIcon />
                    <SearchBar screen="MOBILE" />
                  </div>

                  <Logo screen="MOBILE" />
                  <div className="flex items-center justify-end">
                    <div className="flex items-center lg:ml-6">
                      <div className="flex items-center space-x-4">
                        <SearchBar screen="DESKTOP" />
                        <LoginIcon />
                        <MyCartIcon />
                        <OnePercentLogo position="HEADER" />
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

export default DrivingiHeader;

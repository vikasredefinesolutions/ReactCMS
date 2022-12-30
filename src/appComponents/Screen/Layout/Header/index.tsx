import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector, useWindowDimensions } from 'hooks';
import { _Store, __constant } from 'page.config';
import React, { useEffect, useState } from 'react';
import CompareIcon from './components/CompareIcon';
import LoggedInMenu from './components/LoggedInMenu';
import LoginIcon from './components/LoginIcon';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import MyCartIcon from './components/MyCartIcon';
import OnePercentLogo from './components/OnePercentLogo';
import SearchBar from './components/SearchBar';
import WishListIcon from './components/WishListIcon';
import MenuItems from './Header/components/Menu/MenuItems';

const Header: React.FC = () => {
  const headerdata = useTypedSelector((state) => state.store.configs?.header);
  // const id = useTypedSelector((state) => state.user.id);
  const show = useTypedSelector((state) => state.store.display.header);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { width } = useWindowDimensions();
  const { setView, logInUser } = useActions();
  const [mobileView, setMobileView] = useState<boolean>(
    width <= __constant._header.mobileBreakPoint,
  );
  useEffect(() => {
    if (document) {
      const cookies = extractCookies('', 'browserCookie');
      if (cookies.userId !== null) {
        logInUser({ id: cookies.userId });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const mobile = width <= __constant._header.mobileBreakPoint;
    const showMobile = mobile ? 'MOBILE' : 'DESKTOP';
    setView(showMobile);
    setMobileView(mobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  if (storeLayout === _Store.type1) {
    return (
      <section className="bg-white sticky top-0 z-40">
        <div className="bg-white">
          {mobileView && <MenuItems screen="MOBILE" />}

          <header className="relative">
            <nav aria-label="Top">
              <div className="bg-white shadow-md">
                <div className="container mx-auto">
                  <div className="">
                    <div className="py-3 lg:py-4 flex items-center justify-between">
                      <Logo
                        screen="DESKTOP"
                        headerdata={headerdata?.config_value}
                      />

                      <MenuItems screen="DESKTOP" />

                      <div className="flex items-center lg:hidden space-x-4 pr-4">
                        <MenuIcon />
                        {mobileView && <SearchBar screen="MOBILE" />}
                      </div>

                      {mobileView && (
                        <Logo
                          screen="MOBILE"
                          headerdata={headerdata?.config_value}
                        />
                      )}
                      <div className="flex items-center justify-end">
                        <div className="flex items-center lg:ml-6">
                          <div className="flex items-center space-x-4">
                            {show.searchBar && <SearchBar screen={'DESKTOP'} />}
                            <WishListIcon />
                            <LoginIcon />
                            <LoggedInMenu />
                            <CompareIcon />
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
  }
  if (storeLayout === _Store.type2) {
    return (
      <section className="bg-white sticky top-0 z-40">
        <div className="container mx-auto">
          <div x-data="{ open: false }" className="bg-white">
            {mobileView && <MenuItems screen="MOBILE" />}
            <header className="relative bg-white border-b border-gray-200">
              <nav aria-label="Top">
                <div className="">
                  <div className="py-3 lg:py-4 flex items-center justify-between gap-3">
                    <Logo
                      screen="DESKTOP"
                      headerdata={headerdata?.config_value}
                    />

                    {/* MOBILE VIEW ---- START */}
                    {mobileView && (
                      <div className="flex items-center lg:hidden space-x-3">
                        <MenuIcon />
                        <SearchBar screen="MOBILE" />
                      </div>
                    )}
                    {/* MOBILE VIEW ---- END */}

                    <SearchBar screen="DESKTOP" />
                    {mobileView && (
                      <Logo
                        screen="MOBILE"
                        headerdata={headerdata?.config_value}
                      />
                    )}
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        <div className="flex items-center space-x-3">
                          <LoginIcon />
                          <LoggedInMenu />
                          <CompareIcon />
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
  }
  if (storeLayout === _Store.type3) {
    return (
      <section
        className="bg-white sticky top-0 left-0 right-0 z-40 border-b-2 border-b-gray-300"
        id=""
      >
        <div className="container mx-auto">
          {mobileView && <MenuItems screen="MOBILE" />}
          <header className="relative border-b border-b-gray-200">
            {/* <!-- <div className="lg:hidden text-center">
                  <a href="index.html" className="inline-block pt-4">
                      <img src="../images/logo.png" alt="" className="h-14 w-auto">
                  </a>
              </div> --> */}
            <nav aria-label="Top">
              <div className="">
                <div className="py-3 flex items-center justify-between gap-3">
                  <Logo
                    screen="DESKTOP"
                    headerdata={headerdata?.config_value}
                  />
                  {mobileView && (
                    <div className="flex items-center lg:hidden space-x-3">
                      <MenuIcon />
                      <SearchBar screen="MOBILE" />
                    </div>
                  )}

                  <SearchBar screen="DESKTOP" />

                  {mobileView && (
                    <Logo
                      screen="MOBILE"
                      headerdata={headerdata?.config_value}
                    />
                  )}

                  <div className="flex items-center justify-end">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <LoginIcon />
                        <LoggedInMenu />
                        <CompareIcon />
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
  }
  if (storeLayout === _Store.type4) {
    return (
      <section
        className="sticky top-0 z-40 bg-[url('https://www.drivingi.com/images/home-bg.jpg')] bg-cover"
        id="header"
      >
        <div className="">
          {mobileView && <MenuItems screen="MOBILE" />}
          <header className="relative">
            <nav aria-label="Top">
              <div className="">
                <div className="container mx-auto">
                  <div className="py-3 lg:py-4 flex items-center justify-between">
                    <Logo
                      screen="DESKTOP"
                      headerdata={headerdata?.config_value}
                    />
                    <MenuItems screen="DESKTOP" />

                    {mobileView && (
                      <div className="flex items-center lg:hidden space-x-4">
                        <MenuIcon />
                        <SearchBar screen="MOBILE" />
                      </div>
                    )}

                    {mobileView && (
                      <Logo
                        screen="MOBILE"
                        headerdata={headerdata?.config_value}
                      />
                    )}
                    <div className="flex items-center justify-end">
                      <div className="flex items-center lg:ml-6">
                        <div className="flex items-center space-x-4">
                          <SearchBar screen="DESKTOP" />
                          <LoginIcon />
                          <LoggedInMenu />
                          <CompareIcon />
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
  }

  return <></>;
};

export default Header;

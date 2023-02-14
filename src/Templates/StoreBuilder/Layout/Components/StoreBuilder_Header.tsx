import { useActions, useTypedSelector, useWindowDimensions } from 'hooks';
import { __constant } from 'page.config';
import React, { useEffect, useState } from 'react';
import { _MenuItems } from 'show.type';
import StoreBuilder_Logo from './Header/StoreBuilder_Logo';
import StoreBuilder_MenuIcon from './Header/StoreBuilder_MenuIcon';
import StoreBuilder_MyCartIcon from './Header/StoreBuilder_MyCartIcon';
import StoreBuilder_SearchBar from './Header/StoreBuilder_SearchBar';
import StoreBuilder_NavigationBar from './StoreBuilder_NavigationBar';
interface _props {
  logoUrl: {
    desktop: string;
  };
  menuItems: _MenuItems | null;
}

const StoreBuilder_Header: React.FC<_props> = ({ logoUrl, menuItems }) => {
  const { store_setAppView } = useActions();
  const { width } = useWindowDimensions();

  // ------------------------------------------------------------------------
  const showSideMenu = useTypedSelector((state) => state.modals.sideMenu);

  // ------------------------------------------------------------------------
  const [isMobileView, setIsMobileView] = useState<boolean>(
    width <= __constant._header.mobileBreakPoint,
  );

  useEffect(() => {
    const isMobile = width <= __constant._header.mobileBreakPoint;
    const showMobile = isMobile ? 'MOBILE' : 'DESKTOP';
    store_setAppView(showMobile);
    setIsMobileView(isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <>
      <div className='bg-white sticky top-0 z-40'>
        <div className='bg-white'>
          <header className='relative'>
            <nav aria-label='Top'>
              <div className='bg-white shadow-md'>
                <div className='container mx-auto'>
                  <div className=''>
                    <div className='py-3 lg:py-4 flex items-center justify-between'>
                      {isMobileView ? null : (
                        <StoreBuilder_Logo
                          screen='DESKTOP'
                          logo={{
                            desktop: logoUrl.desktop,
                            mobile: '',
                          }}
                        />
                      )}

                      <div className='flex items-center lg:hidden space-x-4 pr-4'>
                        {isMobileView ? <StoreBuilder_MenuIcon /> : null}
                        {isMobileView ? (
                          <StoreBuilder_SearchBar screen='MOBILE' />
                        ) : null}
                      </div>

                      {isMobileView ? (
                        <StoreBuilder_Logo
                          screen='MOBILE'
                          logo={{
                            desktop: logoUrl.desktop,
                            mobile: '',
                          }}
                        />
                      ) : null}
                      <div className='flex items-center justify-end'>
                        <div className='flex items-center lg:ml-6'>
                          <div className='flex items-center space-x-4'>
                            {isMobileView ? null : (
                              <StoreBuilder_SearchBar screen={'DESKTOP'} />
                            )}
                            <StoreBuilder_MyCartIcon />
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
      </div>
      <StoreBuilder_NavigationBar
        screen={isMobileView ? 'MOBILE' : 'DESKTOP'}
        menuItems={menuItems}
        showSideMenu={showSideMenu}
      />
    </>
  );
};

export default StoreBuilder_Header;

// @ts-nocheck
import ToogleCss from 'appComponents/reUsable/ToggleCss';
import { useActions, useTypedSelector, useWindowDimensions } from 'hooks';
import Link from 'next/link';
import { __constant } from 'page.config';
import React, { useEffect, useState } from 'react';
import { _MenuItems } from 'show.type';
import { Bacardi_BrandsBar } from './Corporate_BrandsBar';
import { Bacardi_HeaderBar } from './Corporate_HeaderBar';
import CompanyLogo from './Corporate_Logo';
import { Bacardi_MenuItems } from './Corporate_MenuItems';
import { Cyxtera_MobileMenuItem } from './Corporate_MobileMenuItem';
import { Cyxtera_NotificationBar } from './Corporate_NotificationBar';
import SearchBar from './Corporate_SearchBar';
import Corporate_SideMenu from './Corporate_SideMenu';
import LoggedInMenu_Corporate from './Icons.tsx/Corporate_LoggedIn';
import { Corporate_LoginIcon } from './Icons.tsx/Corporate_LoginIcon';
import Corporate_MyCartIcon from './Icons.tsx/Corporate_MyCartIcon';

interface _props {
  storeCode: string;
  logoUrl: {
    desktop: string;
  };
  menuItems: _MenuItems | null;
}
export const BacardiSubStore_Header: React.FC<_props> = ({
  storeCode,
  logoUrl,
  menuItems,
}) => {
  const { store_setAppView } = useActions();
  const { toggleSideMenu } = useActions();

  const { width } = useWindowDimensions();

  // ------------------------------------------------------------------------
  const userId = useTypedSelector((state) => state.user.id);
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
      {!isMobileView && (
        <div className='bg-primary hidden md:block p-2 lg:p-1 lg:py-2 '>
          <div className='container mx-auto'>
            <div className='sm:flex sm:flex-wrap sm:justify-between items-center text-xs lg:text-base '>
              <div className='text-center text-white'>
                <span className=''>ParsonsKellogg Corporate Stores </span>
              </div>
              <div className='flex'>
                <Corporate_LoginIcon screen={'DESKTOP'} />
                <LoggedInMenu_Corporate screen={'DESKTOP'} />
                <span className='text-white mx-2'>|</span>
                <Corporate_MyCartIcon screen={'DESKTOP'} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='bg-white sticky top-0 z-40'>
        <div className='bg-white'>
          {isMobileView && (
            <Corporate_SideMenu
              showSideMenu={showSideMenu}
              storeCode={storeCode}
              screen='MOBILE'
              menuItems={menuItems}
            />
          )}

          <header className='relative border-b border-gray-200 bg-gray-200'>
            <nav aria-label='Top'>
              <div className='container mx-auto'>
                <div className=''>
                  <div
                    className={`py-3 lg:py-4 flex items-center ${
                      isMobileView ? 'justify-between' : 'justify-center'
                    }`}
                  >
                    {isMobileView ? (
                      <div className='flex items-center lg:hidden space-x-4'>
                        <button
                          type='button'
                          x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                          className='py-2 rounded-md text-white hover:text-primary'
                          onClick={() => toggleSideMenu('OPEN')}
                        >
                          <span className='sr-only'>Open menu</span>
                          <svg
                            className='h-6 w-6 text-gray-600'
                            x-description='Heroicon name: outline/menu'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4 6h16M4 12h16M4 18h16'
                            ></path>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      ''
                    )}

                    <CompanyLogo
                      screen='DESKTOP'
                      logo={{
                        desktop: logoUrl.desktop,
                        mobile: '',
                      }}
                    />
                    <div className='mobile_icons flex text-gray-300'>
                      <div className='mr-2 text-gray-400'>
                        {isMobileView ? (
                          <>
                            {' '}
                            <Corporate_LoginIcon /> <LoggedInMenu_Corporate />{' '}
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      {isMobileView ? <Corporate_MyCartIcon /> : ''}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          {/* search bar */}
          {!isMobileView ? (
            <div>
              <div className='container mx-auto'>
                <div className='hidden h-full lg:flex items-center justify-end'>
                  <div className='my-1'>
                    <div className='hidden lg:flex flex-grow max-w-[500px]'>
                      <SearchBar screen={'DESKTOP'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// Bacardi - Bacard/GreyGoose - Bacardi Sub Store
export const Bacardi_Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const { store_setAppView } = useActions();
  const [mobileView, setMobileView] = useState<boolean>(
    width <= __constant._header.mobileBreakPoint,
  );
  useEffect(() => {
    const mobile = width <= __constant._header.mobileBreakPoint;
    const showMobile = mobile ? 'MOBILE' : 'DESKTOP';
    store_setAppView(showMobile);
    setMobileView(mobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  const [showmenu, setShowMenu] = useState(false);
  const [toogleCssName, setToogleCssName] =
    useState<string>('bacardigreygoose');
  const storeName = useTypedSelector((state) => state.store.storeName);

  return (
    <>
      <ToogleCss style={toogleCssName} />

      <section
        className='bg-white sticky top-0 left-0 right-0 z-40 border-b-2 border-b-transparent'
        id=''
      >
        {!mobileView && (
          <div className='bg-primary hidden md:block p-2 lg:p-1 lg:py-2'>
            <div className='container mx-auto'>
              <div className='sm:flex sm:flex-wrap sm:justify-between items-center text-xs lg:text-base '>
                <div className='text-center text-white'>
                  <span className=''>ParsonsKellogg Corporate Stores </span>
                </div>
                <div className='flex'>
                  <Corporate_LoginIcon />
                  <span className='text-white mx-2'>|</span>
                  <Corporate_MyCartIcon />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='w-full lg:bg-[#efefef]'>
          <div className='container mx-auto'>
            <div className=''>
              {/* <!-- Mobile menu --> */}
              {showmenu && (
                <div className='relative z-40 lg:hidden'>
                  <div className='fixed inset-0 bg-black bg-opacity-25'></div>
                  <div className='fixed inset-0 flex z-40'>
                    <div className='relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto'>
                      <div className='px-4 pt-5 pb-2 flex'>
                        <button
                          type='button'
                          className='p-2 rounded-md inline-flex items-center justify-center text-gray-600'
                          onClick={() => setShowMenu(false)}
                        >
                          <span className='sr-only'>Close menu</span>
                          <svg
                            className='h-6 w-6'
                            x-description='Heroicon name: outline/x'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M6 18L18 6M6 6l12 12'
                            ></path>
                          </svg>
                        </button>
                      </div>
                      {/* <!-- Links --> */}
                    </div>
                  </div>
                </div>
              )}

              <header className='relative border-b border-gray-200'>
                {/* <!-- <div className="lg:hidden text-center">
                          <a href="index.html" className="inline-block pt-4">
                              <img src="../images/logo.png" alt="" className="h-14 w-auto">
                          </a>
                      </div> --> */}
                <nav aria-label='Top'>
                  {/* <!-- Secondary navigation --> */}
                  <div className=''>
                    <div className='py-3 flex items-center lg:justify-center justify-between gap-8'>
                      <div className='hidden lg:flex lg:items-center'>
                        <div className='relative'>
                          <button
                            onClick={() => setToogleCssName('bacardi')}
                            className='after:absolute after:w-full after:h-1 after:left-0 after:bottom-[-11px] after:bg-secondary'
                          >
                            <img
                              className='max-h-20 w-auto'
                              src='../images/logo.png'
                              alt='bacardi'
                            />
                          </button>
                        </div>
                        <div className='ml-12'>
                          <button
                            onClick={() => setToogleCssName('bacardigreygoose')}
                          >
                            <img
                              className='max-h-20 w-auto opacity-30'
                              src='../images/greygoose-logo.png'
                              alt='bacardigreygoose'
                            />
                          </button>
                        </div>
                        <div className='ml-12'>
                          <a
                            href='index.html'
                            className='max-h-20 w-auto opacity-30'
                          >
                            What's New
                          </a>
                        </div>
                      </div>

                      {/* <!-- Mobile menu and search (lg-) --> */}
                      <div className='flex items-center lg:hidden space-x-3'>
                        <button
                          type='button'
                          x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                          className='py-2 rounded-md text-gray-600'
                          onClick={() => setShowMenu(true)}
                          //  @click="open = true"
                        >
                          <span className='sr-only'>Open menu</span>
                          <svg
                            className='h-6 w-6'
                            x-description='Heroicon name: outline/menu'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4 6h16M4 12h16M4 18h16'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- Search --> */}
                        <a
                          href='javascript:void(0);'
                          className='text-gray-600 hover:text-primary'
                        >
                          <span className='sr-only'>Search</span>
                          <svg
                            className='w-6 h-6'
                            x-description='Heroicon name: outline/search'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                          </svg>
                        </a>
                      </div>

                      {/* <!-- Logo (lg-) --> */}
                      <a href='index.html' className='lg:hidden'>
                        <img
                          src='../images/logo.png'
                          alt=''
                          className='h-auto w-auto'
                        />
                      </a>

                      <a href='index.html' className='lg:hidden'>
                        <img
                          className='h-auto w-auto opacity-50'
                          src='../images/greygoose-logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>

                      <div className='flex items-center justify-end lg:hidden'>
                        <div className='flex items-center'>
                          <div className='flex items-center space-x-3'>
                            <div
                              className='flex relative'
                              x-data='{ open : false }'
                              // @mouseover.away = "open = false"
                            >
                              <button className='text-gray-600 hover:text-primary flex items-center gap-1'>
                                <span className='hidden'>John</span>
                                <svg
                                  className='w-6 h-6'
                                  x-description='Heroicon name: outline/user'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke-width='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                  ></path>
                                </svg>
                              </button>
                              <div
                                className='absolute right-0 top-full border-2 border-black bg-white z-40 w-52'
                                //  @mouseover="open = true"
                                //
                              >
                                <ul className=''>
                                  <li className='border-t border-t-gray-300'>
                                    <a
                                      href='my-orders.html'
                                      className='flex p-2 gap-1'
                                    >
                                      <span className='material-icons-outlined'>
                                        shopping_cart
                                      </span>
                                      <span className=''>Order</span>
                                    </a>
                                  </li>
                                  <li className='border-t border-t-gray-300'>
                                    <a
                                      href='customer-custom-logo.html'
                                      className='flex p-2 gap-1'
                                    >
                                      <span className='material-icons-outlined'>
                                        design_services
                                      </span>
                                      <span className=''>Manage Logo</span>
                                    </a>
                                  </li>
                                  <li className='border-t border-t-gray-300'>
                                    <a
                                      href='my-account.html'
                                      className='flex p-2 gap-1'
                                    >
                                      <span className='material-icons-outlined'>
                                        construction
                                      </span>
                                      <span className=''>Account Settings</span>
                                    </a>
                                  </li>
                                  {/* <!-- <li className="border-t border-t-gray-300"><a href="javascript:void(0);" className="flex p-2 gap-1"><span className="material-icons-outlined">help_outline</span> <span className="">Help</span></a></li> --> */}
                                  <li className='border-t-2 border-t-gray-300'>
                                    <a
                                      href='javascript:void(0);'
                                      className='flex p-2 gap-1'
                                    >
                                      <span className='material-icons-outlined'>
                                        logout
                                      </span>
                                      <span className=''>Sign Out</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='flow-root'>
                              <a
                                href='cart.html'
                                className='text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2'
                              >
                                <span className='hidden'>my cart</span>
                                <svg
                                  className='h-6 w-6 text-gray-600 group-hover:text-primary'
                                  x-description='Heroicon name: outline/shopping-cart'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke-width='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                  ></path>
                                </svg>
                                <span className='absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500'>
                                  0
                                </span>
                              </a>
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
        </div>
        {/* {mobileView && <Bacardi_BrandsBar />} */}
      </section>

      <section
        className='bg-white sticky top-0 left-0 right-0 z-40 border-b-2 border-b-transparent hidden'
        id=''
      >
        <Bacardi_HeaderBar />
        <Bacardi_BrandsBar />
        <Bacardi_MenuItems />
      </section>
    </>
  );
};

// Cyxtera
export const Cyxtera_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='container mx-auto sticky top-0 z-40'>
      <Cyxtera_NotificationBar />
      <div
        //  @keydown.window.escape="open = false"
        className='bg-white'
      >
        {/* <!-- Mobile menu --> */}
        <Cyxtera_MobileMenuItem />

        <header className='relative pb-2'>
          <nav aria-label='Top'>
            {/* <!-- Secondary navigation --> */}
            <div className='bg-black'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 flex items-center justify-between'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='max-h-9 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex items-center justify-center flex-1'>
                      <div
                        className='ml-6'
                        // x-data="Components.popoverGroup()"
                        // x-init="init()"
                      >
                        <div className='h-full flex justify-center space-x-6 relative text-sm'>
                          <div
                            className='flex relative'
                            // x-data="Components.popover({ open: false, focus: false })"
                            // x-init="init()"
                            //  @keydown.escape="onEscape"
                            //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                          >
                            <div className='relative flex'>
                              <Link
                                href='/'
                                // x-state:on="Item active"
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 text-gray-200 hover:text-white border-b-2 border-b-transparent hover:border-b-anchor'

                                // :className="{ '': open, '': !(open) }"
                                // @mouseover="open = true" :aria-expanded="open.toString()"
                              >
                                <span className=''>Apparel</span>
                              </Link>
                            </div>
                            <div
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full left-0 w-80 text-gray-500 sm:text-sm'
                              // x-ref="panel"
                              // @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='max-w-7xl mx-auto'>
                                  <div className='border-t first:border-t-0 py-5 px-5'>
                                    <ul
                                      role='list'
                                      aria-labelledby='desktop-featured-heading-1'
                                      className='flex flex-wrap gap-y-2'
                                    >
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Men's Apparel
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Women's Apparel
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Headwear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className='flex relative'
                            // x-data="Components.popover({ open: false, focus: false })"
                            // x-init="init()"
                            //  @keydown.escape="onEscape"
                            //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                          >
                            <div className='relative flex'>
                              <Link
                                href='/'
                                // x-state:on="Item active"
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 text-gray-200 hover:text-white border-b-2 border-b-transparent hover:border-b-anchor'
                                // :className="{ '': open, '': !(open) }"
                                // @mouseover="open = true" :aria-expanded="open.toString()"
                              >
                                <span className=''>Accessories</span>
                              </Link>
                            </div>
                            <div
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full left-0 w-80 text-gray-500 sm:text-sm'
                              // x-ref="panel"
                              //  @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='max-w-7xl mx-auto'>
                                  <div className='border-t first:border-t-0 py-5 px-5'>
                                    <ul
                                      role='list'
                                      aria-labelledby='desktop-featured-heading-1'
                                      className='flex flex-wrap gap-y-2'
                                    >
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Bags
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Drinkware
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Golf
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Office
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 text-gray-200 hover:text-white border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>Custom Requests</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 text-gray-200 hover:text-white border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>FAQ</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Mobile menu and search (lg-) --> */}
                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <button
                        type='button'
                        // x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                        className='py-2 rounded-md text-primary  hover:text-primary-hover'
                        // @click="open = true"
                      >
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          // x-description="Heroicon name: outline/menu"
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </button>

                      {/* <!-- Search --> */}
                      <Link
                        href='/'
                        className='py-2 text-primary hover:text-primary-hover hover:text-gray-500 '
                      >
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          x-description='Heroicon name: outline/search'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Logo (lg-) --> */}
                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='max-h-14 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          <div className='hidden lg:flex'>
                            <div className='border border-primary p-2 pr-10 text-gray-400 bg-white relative rounded-full'>
                              <input type='text' className='outline-none' />
                              <button
                                type='button'
                                className='w-6 h-6 absolute right-2 top-2'
                              >
                                <svg
                                  className='w-6 h-6 text-primary hover:text-primary-hover'
                                  x-description='Heroicon name: outline/search'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {/* <!-- <div className="flex">
                                              <a href="wishlist.html" className="text-gray-400 hover:text-gray-500 relative">
                                                  <span className="sr-only">Wishlist</span>
                                                  <svg className="w-6 h-6 fill-[#003a70] hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                      <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"/>
                                                  </svg>
                                                  <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">0</span>
                                              </a>
                                          </div> --> */}
                          <div className='flex'>
                            <Link
                              href='/'
                              className='text-primary flex items-center gap-1'
                              data-modal-toggle='LoginModal'
                            >
                              <span className='hidden'>login</span>
                              <svg
                                className='w-6 h-6'
                                x-description='Heroicon name: outline/user'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                ></path>
                              </svg>
                            </Link>
                          </div>

                          {/* <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}

                          <div
                            className='flow-root relative'
                            // @mouseover.away = "open = false"
                          >
                            <a
                              href='cart.html'
                              className='text-primary  group flex items-center gap-1 relative py-2 pr-2'
                              //  @mouseover="open = true"
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='flex-shrink-0 h-6 w-6 primary '
                                x-description='Heroicon name: outline/shopping-cart'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
                                30
                              </span>
                            </a>
                            <div
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full right-0 w-80 text-sm shadow'
                              // x-ref="panel"
                              //  @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <ul className=''>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              The North Face Men's ThermoBall
                                              Trekker Vest
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$1,390.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <div className='mb-3 font-semibold text-right'>
                                    <div className=''>10 ITEMS IN CART</div>
                                    <div className=''>Total $600.00</div>
                                  </div>
                                  <div className=''>
                                    <a
                                      href='cart.html'
                                      className='btn btn-primary w-full text-center'
                                    >
                                      CHECKOUT NOW
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

// GilanCo_Header
export const GilabanCo_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='container mx-auto sticky top-0 z-40'>
      <div className='bg-gray-100 p-2 hidden md:block'>
        <div className=''>
          <div className='flex flex-wrap justify-between items-center text-sm tracking-wider'>
            <div className='flex items-center'>
              <span>Email customerservice@parsonskellogg.com</span>
            </div>
            <div className='flex items-center'>
              <span className=''>Questions? Call us at (866) 602-8398</span>
              {/* <!-- | <a href="/" data-modal-toggle="LoginModal" className="ml-1">Sign in</a> --> */}
            </div>
          </div>
        </div>
      </div>
      <div
        //  @keydown.window.escape="open = false"
        className='bg-white'
      >
        {/* <!-- Mobile menu --> */}
        <div
          className='relative z-40 lg:hidden'
          //  x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
        >
          <div

          // x-transition:enter="transition-opacity ease-linear duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-linear duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state." className="fixed inset-0 bg-black bg-opacity-25"
          ></div>
          <div className='fixed inset-0 flex z-40'>
            <div
            //  x-transition:enter="transition ease-in-out duration-300 transform" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-in-out duration-300 transform" x-transition:leave-start="translate-x-0" x-transition:leave-end="-translate-x-full" x-description="Off-canvas menu, show/hide based on off-canvas menu state." className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto" @click.away="open = false"
            >
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  //  @click="open = false"
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    x-description='Heroicon name: outline/x'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Links --> */}
              <div className='my-6 px-0 border-t border-gray-300'>
                {/* <!-- Start --> */}
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        What's New
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-2 pr-2'>
                    <button
                      className='flex items-center grow group'
                      //  @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false"
                    >
                      <svg
                        className='w-8 h-8 shrink-0 fill-current text-anchor'
                        //  :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32"
                      >
                        <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                      </svg>
                      <div className='text-anchor'>Apparel</div>
                    </button>
                    <div className=''>
                      <a href='product-listing.html' className='text-xs'>
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className='bg-gray-100'>
                    <div className='border-t first:border-t-0 py-5 px-6'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Men's Apparel
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Women's Apparel
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Headwear
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-2 pr-2'>
                    <button
                      className='flex items-center grow group'
                      //  @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false"
                    >
                      <svg
                        className='w-8 h-8 shrink-0 fill-current text-anchor'
                        // :className="{ 'text-anchor-hover rotate-180': open }"
                        viewBox='0 0 32 32'
                      >
                        <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                      </svg>
                      <div className='text-anchor'>Accessories</div>
                    </button>
                    <div className=''>
                      <a href='product-listing.html' className='text-xs'>
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className='bg-gray-100'>
                    <div className='border-t first:border-t-0 py-5 px-6'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            New Hire Kits
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Bags
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Drinkware
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Golf
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Home & Health
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Office
                          </a>
                        </li>
                        <li className='w-full lg:w-1/2 flex items-center'>
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            Tech
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        Safety Week
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        Custom Requests
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        Minimums
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="px-1" 
                      >
                          <button className="flex items-center justify-between w-full group mb-1" 
                          // @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false"
                          >
                              <div className="text-sm text-gray-800 font-medium px-2">Men</div>
                              <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                  <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                              </svg>
                          </button>
                          <ul className="text-sm pl-4" 
                           >
                              <li className="py-2" 
                              >
                                  <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                      <div className="text-sm text-gray-800 font-medium">Featured</div>
                                      <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                      </svg>
                                  </button>
                                  <ul className="text-sm px-2" 
                                   >
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Sleep</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Swimwear</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Underwear</a> </li>
                                  </ul>
                              </li>
                              <li className="py-2" 
                              >
                                  <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                      <div className="text-sm text-gray-800 font-medium">Categories</div>
                                      <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                      </svg>
                                  </button>
                                  <ul className="text-sm px-2" 
                                   >
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Basic Tees</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Artwork Tees</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Bottoms</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Underwear</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Accessories</a> </li>
                                  </ul>
                              </li>
                              <li className="py-2" 
                              >
                                  <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                      <div className="text-sm text-gray-800 font-medium">Collection</div>
                                      <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                      </svg>
                                  </button>
                                  <ul className="text-sm px-2" 
                                   >
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Everything</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Core</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">New Arrivals</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Sale</a> </li>
                                  </ul>
                              </li>
                              <li className="py-2" 
                              >
                                  <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                      <div className="text-sm text-gray-800 font-medium">Brands</div>
                                      <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                      </svg>
                                  </button>
                                  <ul className="text-sm px-2" 
                                   >
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Full Nelson</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">My Way</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Re-Arranged</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Counterfeit</a> </li>
                                      <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Significant Other</a> </li>
                                  </ul>
                              </li>
                          </ul>
                      </div> -->
                      <!-- <div className="px-1" 
                      >
                          <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                          <div className="text-sm text-gray-800 font-medium px-2">Company</div>
                          <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                          </svg> 
                          </button>
                      </div>
                      <div className="px-1" 
                      >
                          <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                          <div className="text-sm text-gray-800 font-medium px-2">Stores</div>
                          <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                          </svg> 
                          </button>
                      </div> -->
                  </div>
                  <!-- <div className="border-t border-gray-200 py-6 px-4 space-y-6">                    
                      <div className="flow-root">
                          <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                      </div>
                  
                      <div className="flow-root">
                          <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                      </div>                    
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      <div className="flow-root">
                          <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
                      </div>
                      <div className="flow-root">
                          <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                      </div>
                  </div> --> */}
              </div>
            </div>
          </div>
        </div>

        <header className='relative'>
          <nav aria-label='Top'>
            {/* <!-- Secondary navigation --> */}
            <div className='bg-white'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 flex items-center justify-between'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='max-h-12 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex items-center justify-center flex-1'>
                      <div
                        className='ml-6'
                        x-data='Components.popoverGroup()'
                        x-init='init()'
                      >
                        <div className='h-full flex justify-center space-x-6 relative text-sm'>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                                // :className="{ '': open, '': !(open) }" @click="toggle"
                              >
                                <span className=''>What's New</span>
                              </a>
                            </div>
                          </div>
                          <div
                            className='flex relative'
                            x-data='Components.popover({ open: false, focus: false })'
                            x-init='init()'
                            //  @keydown.escape="onEscape"
                            //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                          >
                            <div className='relative flex'>
                              <Link
                                href='/'
                                // x-state:on="Item active"
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                                // :className="{ '': open, '': !(open) }"
                                // @mouseover="open = true" aria-expanded="false" :aria-expanded="open.toString()"
                              >
                                <span className=''>Apparel</span>
                              </Link>
                            </div>
                            <div
                            //  x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0"
                            //     x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150"
                            //     x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                            //     x-description="'Men' mega menu, show/hide based on flyout menu state."
                            //     className="absolute top-full left-0 w-80 text-gray-500 sm:text-sm"
                            // x-ref="panel" @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='max-w-7xl mx-auto'>
                                  <div className='border-t first:border-t-0 py-5 px-5'>
                                    <ul
                                      role='list'
                                      aria-labelledby='desktop-featured-heading-1'
                                      className='flex flex-wrap gap-y-2'
                                    >
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Men's Apparel
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Women's Apparel
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Headwear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className='flex relative'
                            x-data='Components.popover({ open: false, focus: false })'
                            x-init='init()'
                            //  @keydown.escape="onEscape"
                            //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                          >
                            <div className='relative flex'>
                              <Link
                                href='/'
                                // x-state:on="Item active"
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                                // :className="{ '': open, '': !(open) }"
                                // @mouseover="open = true" aria-expanded="false" :aria-expanded="open.toString()"
                              >
                                <span className=''>Accessories</span>
                              </Link>
                            </div>
                            <div
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full left-0 w-80 text-gray-500 sm:text-sm'
                              // x-ref="panel"
                              // @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='max-w-7xl mx-auto'>
                                  <div className='border-t first:border-t-0 py-5 px-5'>
                                    <ul
                                      role='list'
                                      aria-labelledby='desktop-featured-heading-1'
                                      className='flex flex-wrap gap-y-2'
                                    >
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          New Hire Kits
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Bags
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Drinkware
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Golf
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Home & Health
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Office
                                        </a>
                                      </li>
                                      <li className='w-full flex items-center'>
                                        <a
                                          href='product-listing.html'
                                          className='text-anchor hover:text-anchor-hover'
                                        >
                                          Tech
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>Safety Week</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>Custom Requests</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>FAQ</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>Minimums</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Mobile menu and search (lg-) --> */}
                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <button
                        type='button'
                        x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                        className='bg-white py-2 rounded-md text-primary hover:text-primary-hover'
                        // @click="open = true"
                      >
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          x-description='Heroicon name: outline/menu'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </button>

                      {/* <!-- Search --> */}
                      <Link
                        href='/'
                        className='py-2 text-primary hover:text-primary-hover'
                      >
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          x-description='Heroicon name: outline/search'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Logo (lg-) --> */}
                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='max-h-12 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          <div className='hidden lg:flex'>
                            <div className='border border-primary p-2 pr-10 text-gray-400 hover:text-gray-500 relative rounded-full'>
                              <input type='text' className='outline-none' />
                              <button
                                type='button'
                                className='w-6 h-6 absolute right-2 top-2'
                              >
                                <svg
                                  className='w-6 h-6 text-primary hover:text-primary-hover'
                                  x-description='Heroicon name: outline/search'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {/* <!-- <div className="flex">
                                              <a href="wishlist.html" className="text-gray-400 hover:text-gray-500 relative">
                                                  <span className="sr-only">Wishlist</span>
                                                  <svg className="w-6 h-6 fill-[#003a70] hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                      <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"/>
                                                  </svg>
                                                  <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">0</span>
                                              </a>
                                          </div> --> */}
                          <div className='flex'>
                            <Link
                              href='/'
                              className='text-primary hover:text-primary-hover flex items-center gap-1'
                              data-modal-toggle='LoginModal'
                            >
                              <span className='hidden'>login</span>
                              <svg
                                className='w-6 h-6'
                                x-description='Heroicon name: outline/user'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                ></path>
                              </svg>
                            </Link>
                          </div>

                          {/* <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}

                          <div
                            className='flow-root relative'
                            //  @mouseover.away = "open = false"
                          >
                            <a
                              href='cart.html'
                              className='text-primary hover:text-primary-hover group flex items-center gap-1 relative py-2 pr-2'
                              // @mouseover="open = true"
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-primary group-hover:text-primary-hover'
                                x-description='Heroicon name: outline/shopping-cart'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
                                30
                              </span>
                            </a>
                            <div
                            //  x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0"
                            //     x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150"
                            //     x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                            //     x-description="'Men' mega menu, show/hide based on flyout menu state."
                            //     className="absolute top-full right-0 w-80 text-sm shadow"
                            // x-ref="panel" @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <ul className=''>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              The North Face Men's ThermoBall
                                              Trekker Vest
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$1,390.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <div className='mb-3 font-semibold text-right'>
                                    <div className=''>10 ITEMS IN CART</div>
                                    <div className=''>Total $600.00</div>
                                  </div>
                                  <div className=''>
                                    <a
                                      href='cart.html'
                                      className='btn btn-primary w-full text-center'
                                    >
                                      CHECKOUT NOW
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

// HumanaHeroes
export const HumanaHeroes_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='sticky top-0 left-0 right-0 z-50' id=''>
      <div className='container mx-auto'>
        <div className='bg-gray-100 hidden md:block p-2 lg:p-1 lg:py-1.5'>
          <div className='sm:flex sm:flex-wrap sm:justify-between items-center text-xs lg:text-base'>
            <div className='text-center'>
              <span className=''>Email customerservice@parsonskellogg.com</span>
            </div>
            <div className='text-center'>
              <span className=''>Questions? Call us at (866) 602-8398 </span>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='bg-white px-2'>
          <div
            //  @keydown.window.escape="open = false"
            className=''
          >
            {/* <!-- Mobile menu --> */}
            <div
              // x-show="open"
              className='relative z-40 lg:hidden'
              // x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
            >
              <div
                // x-show="open"
                // x-transition:enter="transition-opacity ease-linear duration-300"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition-opacity ease-linear duration-300"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
                className='fixed inset-0 bg-black bg-opacity-25'
              ></div>
              <div className='fixed inset-0 flex z-40'>
                <div
                  // x-show="open"
                  // x-transition:enter="transition ease-in-out duration-300 transform"
                  // x-transition:enter-start="-translate-x-full"
                  // x-transition:enter-end="translate-x-0"
                  // x-transition:leave="transition ease-in-out duration-300 transform"
                  // x-transition:leave-start="translate-x-0"
                  // x-transition:leave-end="-translate-x-full"
                  // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
                  className='relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto'
                  // @click.away="open = false"
                >
                  <div className='px-4 pt-5 pb-2 flex'>
                    <button
                      type='button'
                      className='p-2 rounded-md inline-flex items-center justify-center text-gray-600'
                      // @click="open = false"
                    >
                      <span className='sr-only'>Close menu</span>
                      <svg
                        className='h-6 w-6'
                        // x-description="Heroicon name: outline/x"
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {/* <!-- Links --> */}
                  <div className='my-6 px-0 border-t border-gray-300'>
                    {/* <!-- Start --> */}
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-3 px-2 pl-8'>
                        <div className=''>
                          <a href='product-listing.html' className=''>
                            Click here to Shop for Your Humana Heroes Gift
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-3 px-2 pl-8'>
                        <div className=''>
                          <a href='product-listing.html' className=''>
                            FAQ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <header className='relative border-b border-b-gray-200'>
              {/* <!-- <div className="lg:hidden text-center">
                      <a href="index.html" className="inline-block pt-4">
                          <img src="../images/logo.png" alt="" className="h-14 w-auto">
                      </a>
                  </div> --> */}
              <nav aria-label='Top'>
                {/* <!-- Secondary navigation --> */}
                <div className=''>
                  <div className='py-3 flex items-center justify-between gap-3'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='max-h-14 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    {/* <!-- Mobile menu and search (lg-) --> */}
                    <div className='flex items-center lg:hidden space-x-3'>
                      <button
                        type='button'
                        x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                        className='py-2 rounded-md text-gray-600'
                        //  @click="open = true"
                      >
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          // x-description="Heroicon name: outline/menu"
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </button>

                      {/* <!-- Search --> */}
                      <Link
                        href='/'
                        className='text-gray-600 hover:text-primary'
                      >
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          // x-description="Heroicon name: outline/search"
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    <div className='hidden lg:flex flex-grow max-w-[500px]'>
                      <div className='border border-primary w-full p-2 pr-10 rounded-full text-white hover:text-primary relative'>
                        <input
                          type='text'
                          className='outline-none text-primary text-lg w-full bg-transparent'
                          placeholder='Search'
                        />
                        <button
                          type='button'
                          className='w-8 h-8 absolute rounded-full text-anchor hover:text-anchor-hover right-1.5 top-1.5 flex items-center justify-center'
                        >
                          <svg
                            className='w-4 h-4'
                            x-description='Heroicon name: outline/search'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* <!-- Logo (lg-) --> */}
                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='h-6 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center'>
                        <div className='flex items-center space-x-3'>
                          <div
                            className='flex relative'
                            x-data='{ open : false }'
                            //  @mouseover.away = "open = false"
                          >
                            <Link
                              href='/'
                              className='text-anchor hover:text-anchor-hover flex items-center gap-1'
                              data-modal-toggle='LoginModal'
                              //  @mouseover="open = true"
                            >
                              <span className='hidden'>John</span>
                              <svg
                                className='w-6 h-6'
                                x-description='Heroicon name: outline/user'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                ></path>
                              </svg>
                            </Link>
                            <div className='absolute right-0 top-full border-2 border-black bg-white z-40 w-52'>
                              <ul className=''>
                                <li className='border-t border-t-gray-300'>
                                  <a
                                    href='my-orders.html'
                                    className='flex p-2 gap-1'
                                  >
                                    <span className='material-icons-outlined'>
                                      shopping_cart
                                    </span>
                                    <span className=''>Order</span>
                                  </a>
                                </li>
                                <li className='border-t border-t-gray-300'>
                                  <a
                                    href='my-account.html'
                                    className='flex p-2 gap-1'
                                  >
                                    <span className='material-icons-outlined'>
                                      construction
                                    </span>
                                    <span className=''>Account Settings</span>
                                  </a>
                                </li>
                                <li className='border-t-2 border-t-gray-300'>
                                  <Link href='/' className='flex p-2 gap-1'>
                                    <span className='material-icons-outlined'>
                                      logout
                                    </span>
                                    <span className=''>Sign Out</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- <div className="flow-root">
                                              <a href="compare.html" className="text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2">
                                                  <span className="hidden">Compare</span>
                                          
                                                  <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" height="24px"
                                                      viewBox="0 0 24 24" width="24px" fill="currentColor">
                                                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                                  </svg>
                                                  
                                                  <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500">0</span>
                                              </a>
                                          </div> --> */}
                          <div className='flow-root'>
                            <a
                              href='cart.html'
                              className='text-anchor hover:text-anchor-hover group flex items-center gap-1 relative pr-2'
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='h-6 w-6 text-anchor group-hover:text-anchor-hover'
                                x-description='Heroicon name: outline/shopping-cart'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500'>
                                0
                              </span>
                            </a>
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
      </div>

      <div className='hidden lg:block container mx-auto'>
        <div className='bg-white px-2 pb-4'>
          {/* <!-- Mega menus --> */}
          <div
            className='border-b border-b-gray-200'
            // x-data="Components.popoverGroup()"
            // x-init="init()"
          >
            <div className='h-full flex justify-center space-x-5 xl:space-x-8 relative text-sm'>
              <div className='flex'>
                <div className=''>
                  <a
                    href='product-listing.html'
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className='flex items-center transition-colors ease-out duration-200 text-anchor py-2.5 border-b-2 border-b-transparent hover:border-b-anchor-hover'
                  >
                    <span className=''>
                      Click here to Shop for Your Humana Heroes Gift
                    </span>
                  </a>
                </div>
              </div>
              <div className='flex'>
                <div className=''>
                  <a
                    href='product-listing.html'
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className='flex items-center transition-colors ease-out duration-200 text-anchor py-2.5 border-b-2 border-b-transparent hover:border-b-anchor-hover'
                  >
                    <span className=''>FAQ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// TheHartFord - TheHardFordFireMarshal - TheHartFordVolunteerShirt - TheHartFortClaimsApparel
export const TheHardFord_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='container mx-auto sticky top-0 z-20'>
      <div className='bg-gray-100 p-2 hidden md:block'>
        <div className=''>
          <div className='flex flex-wrap justify-between items-center text-sm tracking-wider'>
            <div className='flex items-center'>
              <span>Email customerservice@parsonskellogg.com</span>
            </div>
            <div className='flex items-center'>
              <span className=''>Questions? Call us at (866) 602-8398</span>
            </div>
          </div>
        </div>
      </div>
      <div
        // @keydown.window.escape="open = false"
        className='bg-white'
      >
        {/* <!-- Mobile menu --> */}
        <div
          // x-show="open"
          className='relative z-40 lg:hidden'
          // x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
          // x-ref="dialog"
        >
          <div
            // x-show="open"
            // x-transition:enter="transition-opacity ease-linear duration-300"
            // x-transition:enter-start="opacity-0"
            // x-transition:enter-end="opacity-100"
            // x-transition:leave="transition-opacity ease-linear duration-300"
            // x-transition:leave-start="opacity-100"
            // x-transition:leave-end="opacity-0"
            // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
            className='fixed inset-0 bg-black bg-opacity-25'
          ></div>
          <div className='fixed inset-0 flex z-40'>
            <div
            //  x-show="open" x-transition:enter="transition ease-in-out duration-300 transform" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-in-out duration-300 transform" x-transition:leave-start="translate-x-0" x-transition:leave-end="-translate-x-full" x-description="Off-canvas menu, show/hide based on off-canvas menu state." className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto" @click.
            // away="open = false"
            >
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  //  @click="open = false"
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    x-description='Heroicon name: outline/x'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Links --> */}
              <div className='my-6 px-0 border-t border-gray-300'>
                {/* <!-- Start --> */}
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        MEN'S APPAREL
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        WOMEN'S APPAREL
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        HEADWEAR
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className='relative'>
          <nav aria-label='Top'>
            {/* <!-- Secondary navigation --> */}
            <div className='bg-white'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 flex items-center justify-between'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='h-24 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex items-center justify-center flex-1'>
                      <div
                        className='ml-6'
                        // x-data="Components.popoverGroup()"
                        // x-init="init()"
                      >
                        <div className='h-full flex justify-center space-x-6 relative text-sm'>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>MEN'S APPAREL</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>WOMEN'S APPAREL</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>HEADWEAR</span>
                              </a>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className=''>
                              <a
                                href='product-listing.html'
                                className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-anchor'
                              >
                                <span className=''>FAQ</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Mobile menu and search (lg-) --> */}
                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <button
                        type='button'
                        // x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                        className='bg-white py-2 rounded-md text-secondary hover:text-gray-500'
                        // @click="open = true"
                      >
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          x-description='Heroicon name: outline/menu'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </button>

                      {/* <!-- Search --> */}
                      <Link
                        href='/'
                        className='py-2 text-secondary hover:text-gray-500'
                      >
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          x-description='Heroicon name: outline/search'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Logo (lg-) --> */}
                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='h-14 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          <div className='hidden lg:flex'>
                            <div className='border border-secondary p-2 pr-10 text-gray-400 hover:text-gray-500 relative'>
                              <input type='text' className='outline-none' />
                              <button
                                type='button'
                                className='w-6 h-6 absolute right-2 top-2'
                              >
                                <svg
                                  className='w-6 h-6 text-secondary'
                                  x-description='Heroicon name: outline/search'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {/* <!-- <div className="flex">
                                              <a href="wishlist.html" className="text-gray-400 hover:text-gray-500 relative">
                                                  <span className="sr-only">Wishlist</span>
                                                  <svg className="w-6 h-6 fill-[#003a70] hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                      <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"/>
                                                  </svg>
                                                  <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">0</span>
                                              </a>
                                          </div> --> */}
                          <div className='flex'>
                            <Link
                              href='/'
                              className='text-secondary hover:text-gray-500 flex items-center gap-1'
                              data-modal-toggle='LoginModal'
                            >
                              <span className='hidden'>login</span>
                              <svg
                                className='w-6 h-6'
                                // x-description="Heroicon name: outline/user"
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                ></path>
                              </svg>
                            </Link>
                          </div>
                          {/*                                           
                                          <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}

                          <div
                            className='flow-root relative'
                            //  @mouseover.away = "open = false"
                          >
                            <a
                              href='cart.html'
                              className='text-secondary hover:text-gray-500 group flex items-center gap-1 relative py-2 pr-2'
                              // @mouseover="open = true"
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-secondary group-hover:text-gray-500'
                                x-description='Heroicon name: outline/shopping-cart'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
                                30
                              </span>
                            </a>
                            <div
                              // x-show="open"
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full right-0 w-80 text-sm shadow'
                              x-ref='panel'
                              //  @mouseover="open = true"
                            >
                              {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <ul className=''>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              The North Face Men's ThermoBall
                                              Trekker Vest
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$1,390.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <div className='mb-3 font-semibold text-right'>
                                    <div className=''>10 ITEMS IN CART</div>
                                    <div className=''>Total $600.00</div>
                                  </div>
                                  <div className=''>
                                    <a
                                      href='cart.html'
                                      className='btn btn-primary w-full text-center'
                                    >
                                      CHECKOUT NOW
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

// UsaaClaims - UsaaMilitaryAffairs
export const UsaaClaims_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='container mx-auto sticky top-0 z-20'>
      <div className='bg-gray-100 p-2 hidden md:block'>
        <div className=''>
          <div className='flex flex-wrap justify-between items-center text-sm tracking-wider'>
            <div className='flex items-center'>
              <span>Email customerservice@parsonskellogg.com</span>
            </div>
            <div className='flex items-center'>
              <span className=''>Questions? Call us at (866) 602-8398</span>
            </div>
          </div>
        </div>
      </div>
      <div
        // @keydown.window.escape="open = false"
        className='bg-white'
      >
        {/* <!-- Mobile menu --> */}
        <div
          // x-show="open"
          className='relative z-40 lg:hidden'
          // x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
          // x-ref="dialog"
        >
          <div
            // x-show="open"
            // x-transition:enter="transition-opacity ease-linear duration-300"
            // x-transition:enter-start="opacity-0"
            // x-transition:enter-end="opacity-100"
            // x-transition:leave="transition-opacity ease-linear duration-300"
            // x-transition:leave-start="opacity-100"
            // x-transition:leave-end="opacity-0"
            // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
            className='fixed inset-0 bg-black bg-opacity-25'
          ></div>
          <div className='fixed inset-0 flex z-40'>
            <div
              // x-show="open"
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
              className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'
              // @click.away="open = false"
            >
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  // @click="open = false"
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    x-description='Heroicon name: outline/x'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Links --> */}
              <div className='my-6 px-0 border-t border-gray-300'>
                {/* <!-- Start --> */}
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        MEN'S
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        WOMEN'S
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="px-1" >
                         <button className="flex items-center justify-between w-full group mb-1"
                          // @click.prevent="open = !open" :aria-expanded="open" 
                          aria-expanded="false">
                             <div className="text-sm text-gray-800 font-medium px-2">Men</div>
                             <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                 <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                             </svg>
                         </button>
                         <ul className="text-sm pl-4" x-show="open" x-cloak>
                             <li className="py-2" >
                                 <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                     <div className="text-sm text-gray-800 font-medium">Featured</div>
                                     <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                         <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                     </svg>
                                 </button>
                                 <ul className="text-sm px-2" x-show="open" x-cloak>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Sleep</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Swimwear</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Underwear</a> </li>
                                 </ul>
                             </li>
                             <li className="py-2" >
                                 <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                     <div className="text-sm text-gray-800 font-medium">Categories</div>
                                     <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                         <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                     </svg>
                                 </button>
                                 <ul className="text-sm px-2" x-show="open" x-cloak>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Basic Tees</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Artwork Tees</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Bottoms</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Underwear</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Accessories</a> </li>
                                 </ul>
                             </li>
                             <li className="py-2" >
                                 <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                     <div className="text-sm text-gray-800 font-medium">Collection</div>
                                     <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                         <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                     </svg>
                                 </button>
                                 <ul className="text-sm px-2" x-show="open" x-cloak>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Everything</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Core</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">New Arrivals</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Sale</a> </li>
                                 </ul>
                             </li>
                             <li className="py-2" >
                                 <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                                     <div className="text-sm text-gray-800 font-medium">Brands</div>
                                     <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                         <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                     </svg>
                                 </button>
                                 <ul className="text-sm px-2" x-show="open" x-cloak>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Full Nelson</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">My Way</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Re-Arranged</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Counterfeit</a> </li>
                                     <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="/">Significant Other</a> </li>
                                 </ul>
                             </li>
                         </ul>
                     </div> -->
                     <!-- <div className="px-1" >
                         <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                         <div className="text-sm text-gray-800 font-medium px-2">Company</div>
                         <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                             <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                         </svg> 
                         </button>
                     </div>
                     <div className="px-1" >
                         <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                         <div className="text-sm text-gray-800 font-medium px-2">Stores</div>
                         <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                             <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                         </svg> 
                         </button>
                     </div> -->
                 </div>
                 <!-- <div className="border-t border-gray-200 py-6 px-4 space-y-6">                    
                     <div className="flow-root">
                         <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                     </div>
                 
                     <div className="flow-root">
                         <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                     </div>                    
                 </div>

                 <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                     <div className="flow-root">
                         <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
                     </div>
                     <div className="flow-root">
                         <a href="/" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                     </div>
                 </div> --> */}
              </div>
            </div>
          </div>
        </div>

        <header className='relative'>
          <nav aria-label='Top'>
            {/* <!-- Secondary navigation --> */}
            <div className='bg-secondary'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 flex items-center justify-between'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='h-24 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex items-center justify-center flex-1 white-link'>
                      <div
                        className='ml-6'
                        x-data='Components.popoverGroup()'
                        x-init='init()'
                      >
                        <div className='h-full flex justify-center space-x-6 relative text-sm'>
                          <div className='relative flex'>
                            <a
                              href='product-listing.html'
                              className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-secondary-hover'
                            >
                              <span className=''>MEN'S</span>
                            </a>
                          </div>
                          <div className='relative flex'>
                            <a
                              href='product-listing.html'
                              className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-secondary-hover'
                            >
                              <span className=''>WOMEN'S</span>
                            </a>
                          </div>
                          <div className='relative flex'>
                            <a
                              href='product-listing.html'
                              className='relative z-10 flex items-center transition-colors ease-out duration-200 py-2 border-b-2 border-b-transparent hover:border-b-secondary-hover'
                            >
                              <span className=''>FAQ</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Mobile menu and search (lg-) --> */}
                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <button
                        type='button'
                        x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                        className='bg-white py-2 rounded-md text-secondary hover:text-gray-500'
                        //  @click="open = true"
                      >
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          x-description='Heroicon name: outline/menu'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </button>

                      {/* <!-- Search --> */}
                      <Link
                        href='/'
                        className='py-2 text-secondary hover:text-gray-500'
                      >
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          x-description='Heroicon name: outline/search'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Logo (lg-) --> */}
                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='h-14 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          <div className='hidden lg:flex'>
                            <div className='border border-secondary p-2 pr-10 text-gray-400 hover:text-gray-500 relative bg-white'>
                              <input type='text' className='outline-none' />
                              <button className='w-6 h-6 absolute right-2 top-2'>
                                <svg
                                  className='w-6 h-6'
                                  x-description='Heroicon name: outline/search'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          {/* <!-- <div className="flex">
                                             <a href="wishlist.html" className="text-gray-400 hover:text-gray-500 relative">
                                                 <span className="sr-only">Wishlist</span>
                                                 <svg className="w-6 h-6 fill-[#003a70] hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                     <path d="M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z"/>
                                                 </svg>
                                                 <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">0</span>
                                             </a>
                                         </div> --> */}
                          <div className='flex'>
                            <Link
                              href='/'
                              className='text-secondary hover:text-gray-500 flex items-center gap-1'
                              data-modal-toggle='LoginModal'
                            >
                              <span className='hidden'>login</span>
                              <svg
                                className='w-6 h-6 text-white hover:text-secondary-hover'
                                x-description='Heroicon name: outline/user'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                ></path>
                              </svg>
                            </Link>
                          </div>
                          {/*                                          
                                         <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}

                          <div
                            className='flow-root relative'
                            // @mouseover.away = "open = false"
                          >
                            <a
                              href='cart.html'
                              className='text-secondary hover:text-gray-500 group flex items-center gap-1 relative py-2 pr-2'
                              // @mouseover="open = true"
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-white group-hover:text-secondary-hover'
                                x-description='Heroicon name: outline/shopping-cart'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
                                30
                              </span>
                            </a>
                            <div
                              x-show='open'
                              // x-transition:enter="transition ease-out duration-200"
                              // x-transition:enter-start="opacity-0"
                              // x-transition:enter-end="opacity-100"
                              // x-transition:leave="transition ease-in duration-150"
                              // x-transition:leave-start="opacity-100"
                              // x-transition:leave-end="opacity-0"
                              // x-description="'Men' mega menu, show/hide based on flyout menu state."
                              className='absolute top-full right-0 w-80 text-sm shadow'
                              //  x-ref="panel" @mouseover="open = true"
                            >
                              {/* //  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              ></div>
                              <div className='relative bg-gray-100 z-50'>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <ul className=''>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              The North Face Men's ThermoBall
                                              Trekker Vest
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$1,390.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                      <div className='flex flex-wrap -mx-1'>
                                        <div className='w-1/4 px-1'>
                                          <img
                                            src='../images/1040623_25528_STH.jpg'
                                            alt=''
                                          />
                                        </div>
                                        <div className='w-3/4 px-1'>
                                          <div className=''>
                                            <a
                                              className='inline-block'
                                              href='product-page.html'
                                            >
                                              Patagonia Men's Better Sweater
                                              Jacket
                                            </a>
                                          </div>
                                          <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                            <div className='px-1'>
                                              QTY : <span>10</span>
                                            </div>
                                            <div className='px-1'>
                                              Subtotal : <span>$600.00</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                  <div className='mb-3 font-semibold text-right'>
                                    <div className=''>10 ITEMS IN CART</div>
                                    <div className=''>Total $600.00</div>
                                  </div>
                                  <div className=''>
                                    <a
                                      href='cart.html'
                                      className='btn btn-primary w-full text-center'
                                    >
                                      CHECKOUT NOW
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

export const Usaa_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <section className='container mx-auto sticky top-0 z-20'>
      <div className='bg-gray-100 p-2 hidden md:block'>
        <div className=''>
          <div className='flex flex-wrap justify-between items-center text-sm tracking-wider'>
            <div className='flex items-center'>
              <span>Email customerservice@parsonskellogg.com</span>{' '}
            </div>
            <div className='flex items-center'>
              <span className=''>Questions? Call us at (866) 602-8398</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='relative z-40 lg:hidden'>
          <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          <div className='fixed inset-0 flex z-40'>
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>

              <div className='my-6 px-0 border-t border-gray-300'>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-2 pr-2'>
                    <button className='flex items-center grow group'>
                      <svg
                        className='w-8 h-8 shrink-0 fill-current text-anchor'
                        viewBox='0 0 32 32'
                      >
                        <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                      </svg>
                      <div className='text-anchor'>APPAREL</div>
                    </button>
                    <div className=''>
                      <a href='product-listing.html' className='text-xs'>
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className='bg-gray-100'>
                    <div className='border-t first:border-t-0 py-5 px-6'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            MEN'S APPAREL{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            WOMEN'S APPAREL{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            HEADWEAR{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-2 pr-2'>
                    <button className='flex items-center grow group'>
                      <svg
                        className='w-8 h-8 shrink-0 fill-current text-anchor'
                        viewBox='0 0 32 32'
                      >
                        <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                      </svg>
                      <div className='text-anchor'>ACCESSORIES</div>
                    </button>
                    <div className=''>
                      <a href='product-listing.html' className='text-xs'>
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className='bg-gray-100'>
                    <div className='border-t first:border-t-0 py-5 px-6'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            BAGS{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            DRINKWARE{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            GOLF AND OUTDOOR{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            OFFICE ACCESSORIES{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            TECH{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            WRITING INSTRUMENTS{' '}
                          </a>{' '}
                        </li>
                        <li className='w-full flex items-center'>
                          {' '}
                          <a
                            href='product-listing.html'
                            className='text-anchor hover:text-anchor-hover'
                          >
                            {' '}
                            MINIMUMS{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        CUSTOM REQUESTS
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-sm border-b border-gray-300'>
                  <div className='flex items-center justify-between py-3 px-2 pl-8'>
                    <div className=''>
                      <a href='product-listing.html' className=''>
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className='relative'>
          <nav aria-label='Top'>
            <div className='bg-black'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 flex items-center justify-between'>
                    <div className='hidden lg:flex lg:items-center'>
                      <a href='index.html'>
                        <img
                          className='h-24 w-auto'
                          src='../images/logo.png'
                          alt={storeName ? storeName : ''}
                        />
                      </a>
                    </div>

                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <a type='button' className='py-2 rounded-md text-white'>
                        <span className='sr-only'>Open menu</span>
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M4 6h16M4 12h16M4 18h16'
                          ></path>
                        </svg>
                      </a>

                      <a href='javascript:void(0);' className='py-2 text-white'>
                        <span className='sr-only'>Search</span>
                        <svg
                          className='w-6 h-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='2'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <a href='index.html' className='lg:hidden'>
                      <img
                        src='../images/logo.png'
                        alt=''
                        className='h-14 w-auto'
                      />
                    </a>

                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          <div className='hidden lg:flex'>
                            <div
                              href='javascript:void(0);'
                              className='border border-secondary p-2  text-gray-400 hover:text-gray-500 relative bg-white flex items-center justify-between'
                            >
                              <input type='text' className='outline-none' />
                              <button className='w-6 h-6'>
                                <svg
                                  className='w-6 h-6'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke-width='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className='flow-root relative'>
                            <a
                              href='cart.html'
                              className='text-secondary hover:text-gray-500 group flex items-center gap-1 relative py-2 pr-2'
                            >
                              <span className='hidden'>my cart</span>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-white group-hover:text-secondary-hover'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='2'
                                stroke='currentColor'
                                aria-hidden='true'
                              >
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                ></path>
                              </svg>
                              <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
                                30
                              </span>
                            </a>
                            {/* <div
                              className="absolute top-full right-0 w-80 text-sm shadow"
                            >

                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                              <div className="relative bg-gray-100 z-50">
                                <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
                                  <ul className="">
                                    <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
                                      <div className="flex flex-wrap -mx-1">
                                        <div className="w-1/4 px-1"><img src="../images/1040623_25528_STH.jpg" alt="/" /></div>
                                        <div className="w-3/4 px-1">
                                          <div className=""><a className="inline-block" href="product-page.html">Patagonia Men's Better Sweater Jacket</a></div>
                                          <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                                            <div className="px-1">QTY : <span>10</span></div>
                                            <div className="px-1">Subtotal : <span>$600.00</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
                                      <div className="flex flex-wrap -mx-1">
                                        <div className="w-1/4 px-1"><img src="../images/1040623_25528_STH.jpg" alt="" /></div>
                                        <div className="w-3/4 px-1">
                                          <div className=""><a className="inline-block" href="product-page.html">The North Face Men's ThermoBall Trekker Vest</a></div>
                                          <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                                            <div className="px-1">QTY : <span>10</span></div>
                                            <div className="px-1">Subtotal : <span>$1,390.00</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
                                      <div className="flex flex-wrap -mx-1">
                                        <div className="w-1/4 px-1"><img src="../images/1040623_25528_STH.jpg" alt="" /></div>
                                        <div className="w-3/4 px-1">
                                          <div className=""><a className="inline-block" href="product-page.html">Patagonia Men's Better Sweater Jacket</a></div>
                                          <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                                            <div className="px-1">QTY : <span>10</span></div>
                                            <div className="px-1">Subtotal : <span>$600.00</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
                                  <div className="mb-3 font-semibold text-right">
                                    <div className="">10 ITEMS IN CART</div>
                                    <div className="">Total $600.00</div>
                                  </div>
                                  <div className=""><a href="cart.html" className="btn btn-primary w-full text-center">CHECKOUT NOW</a></div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* <div className="bg-secondary mt-px">
          <div className="container mx-auto">
            <div className="hidden h-full lg:flex items-center justify-center flex-1">
              <div className="ml-6">
                <div className="h-full flex justify-center space-x-6 xl:space-x-10 relative text-sm">
                  <div className="flex relative">
                    <div className="relative flex">
                      <a href="javascript:void(0);"
                        className="relative z-10 flex items-center transition-colors ease-out p3.5 text-white hover hover:text-secondary-hover"
                      > <span className="">APPAREL</span>
                      </a>
                    </div>
                    <div
                      className="absolute top-full left-0 w-60 text-gray-500 sm:text-sm"
                    >
                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                      <div className="relative bg-gray-100 z-50">
                        <div className="max-w-7xl mx-auto">
                          <div className="border-t first:border-t-0 py-5 px-5">
                            <ul role="list" aria-labelledby="desktop-featured-heading-1" className="flex flex-wrap gap-y-2">
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> MEN'S APPAREL </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> WOMEN'S APPAREL </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> HEADWEAR </a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="relative flex">
                      <a href="javascript:void(0);"
                        className="relative z-10 flex items-center transition-colors ease-out p3.5 text-white hover hover:text-secondary-hover"
                      > <span className="">ACCESSORIES</span>
                      </a>
                    </div>
                    <div
                      className="absolute top-full left-0 w-60 text-gray-500 sm:text-sm"
                    >

                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                      <div className="relative bg-gray-100 z-50">
                        <div className="max-w-7xl mx-auto">
                          <div className="border-t first:border-t-0 py-5 px-5">
                            <ul role="list" aria-labelledby="desktop-featured-heading-1" className="flex flex-wrap gap-y-2">
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> BAGS </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> DRINKWARE </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> GOLF AND OUTDOOR </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> OFFICE ACCESSORIES </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> TECH </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> WRITING INSTRUMENTS </a> </li>
                              <li className="w-full flex items-center"> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> MINIMUMS </a> </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex">
                    <a href="product-listing.html"
                      className="relative z-10 flex items-center transition-colors ease-out py-3 text-white hover hover:text-secondary-hover">
                      <span className="">CUSTOM REQUESTS</span>
                    </a>
                  </div>
                  <div className="relative flex">
                    <a href="product-listing.html"
                      className="relative z-10 flex items-center transition-colors ease-out py-3 text-white hover hover:text-secondary-hover">
                      <span className="">FAQ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
// WayFair
export const WayFair_Header: React.FC = () => {
  const storeName = useTypedSelector((state) => state.store.storeName);
  return (
    <>
      <div className='bg-gray-100 text-primary px-2 sm:px-0 hidden md:block'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center items-center text-sm py-2'>
            <div className='flex gap-1 items-center'>
              Questions? Call us at
              <a
                href='tel:(866) 602-8398'
                title='(866) 602-8398'
                className='font-default-text text-primary'
              >
                (866) 602-8398
              </a>
              or Email
              <a
                href='mailto:customerservice@parsonskellogg.com'
                title='customerservice@parsonskellogg.com'
                className='font-default-text text-primary'
              >
                customerservice@parsonskellogg.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className='bg-white sticky top-0 z-20'>
        <div
          x-data='{ open: false }'
          // @keydown.window.escape="open = false"
          className='bg-white'
        >
          {/* <!-- Mobile menu --> */}
          <div
            x-show='open'
            className='relative z-40 lg:hidden'
            x-description='Off-canvas menu for mobile, show/hide based on off-canvas menu state.'
            x-ref='dialog'
          >
            <div
              // x-show="open"
              // x-transition:enter="transition-opacity ease-linear duration-300"
              // x-transition:enter-start="opacity-0"
              // x-transition:enter-end="opacity-100"
              // x-transition:leave="transition-opacity ease-linear duration-300"
              // x-transition:leave-start="opacity-100"
              // x-transition:leave-end="opacity-0"
              // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
              className='fixed inset-0 bg-black bg-opacity-25'
            ></div>
            <div className='fixed inset-0 flex z-40'>
              <div
                // x-show="open"
                // x-transition:enter="transition ease-in-out duration-300 transform"
                // x-transition:enter-start="-translate-x-full"
                // x-transition:enter-end="translate-x-0"
                // x-transition:leave="transition ease-in-out duration-300 transform"
                // x-transition:leave-start="translate-x-0"
                // x-transition:leave-end="-translate-x-full"
                // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
                className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'
                // @click.away="open = false"
              >
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                    //  @click="open = false"
                  >
                    <span className='sr-only'>Close menu</span>
                    <svg
                      className='h-6 w-6'
                      x-description='Heroicon name: outline/x'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- Links --> */}
                <div className='my-6 px-0 border-t border-gray-300'>
                  {/* <!-- Start --> */}
                  <div
                    className='text-sm border-b border-gray-300'
                    // x-data="{ open: false }"
                  >
                    <div className='flex items-center justify-between py-3 px-2 pl-8'>
                      <div className=''>
                        <a href='product-listing.html' className=''>
                          What's New
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-2 pr-2'>
                      <button
                        className='flex items-center grow group'
                        // @click.prevent="open = !open" :aria-expanded="open"
                        aria-expanded='false'
                      >
                        <svg
                          className='w-8 h-8 shrink-0 fill-current text-anchor'
                          //  :className="{ 'text-anchor-hover rotate-180': open }"
                          viewBox='0 0 32 32'
                        >
                          <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                        </svg>
                        <div className='text-anchor'>Apparel</div>
                      </button>
                      <div className=''>
                        <a href='product-listing.html' className='text-xs'>
                          Show All
                        </a>
                      </div>
                    </div>
                    <div className='bg-gray-100' x-show='open' x-cloak>
                      <div className='border-t first:border-t-0 py-5 px-6'>
                        <ul
                          role='list'
                          aria-labelledby='desktop-featured-heading-1'
                          className='flex flex-wrap gap-y-2'
                        >
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Men's Apparel
                            </a>
                          </li>
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Women's Apparel
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-2 pr-2'>
                      <button
                        className='flex items-center grow group'
                        // @click.prevent="open = !open" :aria-expanded="open"
                        aria-expanded='false'
                      >
                        <svg
                          className='w-8 h-8 shrink-0 fill-current text-anchor'
                          // :className="{ 'text-anchor-hover rotate-180': open }"
                          viewBox='0 0 32 32'
                        >
                          <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                        </svg>
                        <div className='text-anchor'>Accessories</div>
                      </button>
                      <div className=''>
                        <a href='product-listing.html' className='text-xs'>
                          Show All
                        </a>
                      </div>
                    </div>
                    <div className='bg-gray-100' x-show='open' x-cloak>
                      <div className='border-t first:border-t-0 py-5 px-6'>
                        <ul
                          role='list'
                          aria-labelledby='desktop-featured-heading-1'
                          className='flex flex-wrap gap-y-2'
                        >
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Bags
                            </a>
                          </li>
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Drinkware
                            </a>
                          </li>
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Headwear
                            </a>
                          </li>
                          <li className='w-full flex items-center'>
                            <span className='material-icons-outlined text-lg'>
                              chevron_right
                            </span>
                            <a
                              href='product-listing.html'
                              className='text-anchor hover:text-anchor-hover'
                            >
                              Office
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-3 px-2 pl-8'>
                      <div className=''>
                        <a href='product-listing.html' className=''>
                          Sister Brands
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-3 px-2 pl-8'>
                      <div className=''>
                        <a href='product-listing.html' className=''>
                          Custom Requests
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-3 px-2 pl-8'>
                      <div className=''>
                        <a href='product-listing.html' className=''>
                          FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-sm border-b border-gray-300'
                    x-data='{ open: false }'
                  >
                    <div className='flex items-center justify-between py-3 px-2 pl-8'>
                      <div className=''>
                        <a href='product-listing.html' className=''>
                          Gift Card
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <header className='relative'>
            <nav aria-label='Top'>
              {/* <!-- Secondary navigation --> */}
              <div className='bg-white'>
                <div className='container mx-auto'>
                  <div className=''>
                    <div className='py-3 xl:py-4 flex items-center justify-between'>
                      <div className='hidden xl:flex xl:items-center'>
                        <a href='index.html'>
                          <img
                            className='h-16 w-auto'
                            src='https://wayfair.parsonskellogg.com/images/logo-new.png'
                            alt={storeName ? storeName : ''}
                          />
                        </a>
                      </div>

                      <div className='hidden h-full xl:flex items-center justify-center flex-1'>
                        <div
                          className='ml-5'
                          x-data='Components.popoverGroup()'
                          x-init='init()'
                        >
                          <div className='h-full flex justify-center space-x-5 relative text-sm'>
                            <div className='flex'>
                              <div className=''>
                                <a
                                  href='product-listing.html'
                                  // x-state:on="Item active"
                                  // x-state:off="Item inactive"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
                                  //  :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    What's New
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div
                              className='flex'
                              // x-data="Components.popover({ open: false, focus: false })"
                              // x-init="init()"
                              // @keydown.escape="onEscape"
                              //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                            >
                              <div className='relative flex'>
                                <button
                                  type='button'
                                  // x-state:on="Item active"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover'
                                  // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                                  // @mouseover="open = true" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    Apparel
                                  </span>
                                </button>
                              </div>
                              <div
                                x-show='open'
                                //  x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0"
                                //     x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150"
                                //     x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                                //     x-description="'Men' mega menu, show/hide based on flyout menu state."
                                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm'
                                x-ref='panel'
                                // @mouseover="open = true"
                              >
                                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                                <div
                                  className='absolute inset-0 top-1/2 bg-white shadow'
                                  aria-hidden='true'
                                ></div>
                                <div className='relative bg-gray-100 z-50'>
                                  <div className='max-w-7xl mx-auto'>
                                    <div className='border-t first:border-t-0 py-5 px-5'>
                                      <ul
                                        role='list'
                                        aria-labelledby='desktop-featured-heading-1'
                                        className='flex flex-wrap gap-y-2'
                                      >
                                        <li className='w-full lg:w-1/2 flex items-center'>
                                          <span className='material-icons-outlined text-lg'>
                                            chevron_right
                                          </span>
                                          <a
                                            href='product-listing.html'
                                            className='text-anchor hover:text-anchor-hover'
                                          >
                                            Men's Apparel
                                          </a>
                                        </li>
                                        <li className='w-full lg:w-1/2 flex items-center'>
                                          <span className='material-icons-outlined text-lg'>
                                            chevron_right
                                          </span>
                                          <a
                                            href='product-listing.html'
                                            className='text-anchor hover:text-anchor-hover'
                                          >
                                            Women's Apparel
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className='flex'
                              x-data='Components.popover({ open: false, focus: false })'
                              x-init='init()'
                              // @keydown.escape="onEscape"
                              //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
                            >
                              <div className='relative flex'>
                                <button
                                  type='button'
                                  // x-state:on="Item active"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover'
                                  // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                                  // @mouseover="open = true" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    Accessories
                                  </span>
                                </button>
                              </div>
                              <div
                                // x-show="open"
                                // x-transition:enter="transition ease-out duration-200"
                                // x-transition:enter-start="opacity-0"
                                // x-transition:enter-end="opacity-100"
                                // x-transition:leave="transition ease-in duration-150"
                                // x-transition:leave-start="opacity-100"
                                // x-transition:leave-end="opacity-0"
                                // x-description="'Men' mega menu, show/hide based on flyout menu state."
                                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm'
                                // x-ref="panel" @mouseover="open = true"
                              >
                                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                                <div
                                  className='absolute inset-0 top-1/2 bg-white shadow'
                                  aria-hidden='true'
                                ></div>
                                <div className='relative bg-gray-100 z-50'>
                                  <div className='max-w-7xl mx-auto'>
                                    <div className='border-t first:border-t-0 py-5 px-5'>
                                      <ul
                                        role='list'
                                        aria-labelledby='desktop-featured-heading-1'
                                        className='flex flex-wrap gap-y-2'
                                      >
                                        <li className='w-full lg:w-1/2 flex items-center'>
                                          <span className='material-icons-outlined text-lg'>
                                            chevron_right
                                          </span>
                                          <a
                                            href='product-listing.html'
                                            className='text-anchor hover:text-anchor-hover'
                                          >
                                            Bags
                                          </a>
                                        </li>
                                        <li className='w-full lg:w-1/2 flex items-center'>
                                          <span className='material-icons-outlined text-lg'>
                                            chevron_right
                                          </span>
                                          <a
                                            href='product-listing.html'
                                            className='text-anchor hover:text-anchor-hover'
                                          >
                                            Drinkware
                                          </a>
                                        </li>
                                        <li className='w-full lg:w-1/2 flex items-center'>
                                          <span className='material-icons-outlined text-lg'>
                                            chevron_right
                                          </span>
                                          <a
                                            href='product-listing.html'
                                            className='text-anchor hover:text-anchor-hover'
                                          >
                                            Headwear
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='flex'>
                              <div className=''>
                                <a
                                  href='product-listing.html'
                                  // x-state:on="Item active"
                                  // x-state:off="Item inactive"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
                                  // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    Sister Brands
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className='flex'>
                              <div className=''>
                                <a
                                  href='product-listing.html'
                                  // x-state:on="Item active"
                                  // x-state:off="Item inactive"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
                                  // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    Custom Requests
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className='flex'>
                              <div className=''>
                                <a
                                  href='product-listing.html'
                                  // x-state:on="Item active"
                                  // x-state:off="Item inactive"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
                                  // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    FAQ
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className='flex'>
                              <div className=''>
                                <a
                                  href='product-listing.html'
                                  // x-state:on="Item active"
                                  // x-state:off="Item inactive"
                                  className='relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
                                  // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()"
                                >
                                  <span className='uppercase text-secondary hover:text-primary'>
                                    Gift Card
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Mobile menu and search (lg-) --> */}
                      <div className='flex items-center xl:hidden space-x-3 pr-4'>
                        <button
                          type='button'
                          x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
                          className='bg-white py-2 rounded-md text-primary hover:text-anchor-hover'
                          //  @click="open = true"
                        >
                          <span className='sr-only'>Open menu</span>
                          <svg
                            className='h-6 w-6'
                            x-description='Heroicon name: outline/menu'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M4 6h16M4 12h16M4 18h16'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Search --> */}
                        <Link
                          href='/'
                          className='py-2 text-primary hover:text-anchor-hover'
                        >
                          <span className='sr-only'>Search</span>
                          <svg
                            className='w-6 h-6'
                            x-description='Heroicon name: outline/search'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                          </svg>
                        </Link>
                      </div>
                      {/* <!-- Logo (lg-) --> */}
                      <a href='index.html' className='xl:hidden'>
                        <img
                          src='https://wayfair.parsonskellogg.com/images/logo-new.png'
                          alt=''
                          className='h-14 w-auto'
                        />
                      </a>
                      <div className='flex items-center justify-end'>
                        <div className='flex items-end justify-end xl:ml-5'>
                          <div className='flex items-center space-x-3'>
                            <div className='hidden xl:flex'>
                              <div className='-m-2 border border-primary rounded-full p-2 pr-10 text-gray-400 hover:text-gray-500 relative w-[200px]'>
                                <input
                                  type='text'
                                  className='outline-none w-24'
                                />
                                <button
                                  type='button'
                                  className='w-6 h-6 absolute right-2 top-2 text-primary'
                                >
                                  <svg
                                    className='w-6 h-6'
                                    x-description='Heroicon name: outline/search'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className='flow-root relative'>
                              <a
                                href='https://wayfair.parsonskellogg.com/Account/logon'
                                className='text-primary hover:text-anchor-hover group flex items-center gap-1 relative py-2 pr-2 ml-4'
                              >
                                OKTA
                              </a>
                            </div>
                            <div
                              className='flow-root relative'
                              x-data='{ open: false }'
                              //  @mouseover.away = "open = false"
                            >
                              <a
                                href='cart.html'
                                className='text-primary hover:text-anchor-hover group flex items-center gap-1 relative py-2 pr-2'
                                //  @mouseover="open = true"
                              >
                                <span className='text-sm hidden'>my cart</span>
                                <svg
                                  className='flex-shrink-0 h-6 w-6 text-primary group-hover:text-anchor-hover'
                                  x-description='Heroicon name: outline/shopping-cart'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                  ></path>
                                </svg>
                                <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-700 text-[10px] font-medium text-white'>
                                  30
                                </span>
                              </a>
                              <div
                                x-show='open'
                                // x-transition:enter="transition ease-out duration-200"
                                // x-transition:enter-start="opacity-0"
                                // x-transition:enter-end="opacity-100"
                                // x-transition:leave="transition ease-in duration-150"
                                // x-transition:leave-start="opacity-100"
                                // x-transition:leave-end="opacity-0"
                                // x-description="'Men' mega menu, show/hide based on flyout menu state."
                                className='absolute top-full right-0 w-80 text-sm shadow'
                                // x-ref="panel"
                                // @mouseover="open = true"
                              >
                                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                                <div
                                  className='absolute inset-0 top-1/2 bg-white shadow'
                                  aria-hidden='true'
                                ></div>
                                <div className='relative bg-gray-100 z-50'>
                                  <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                    <ul className=''>
                                      <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-1'>
                                            <img
                                              src='../images/1040623_25528_STH.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-1'>
                                            <div className=''>
                                              <a
                                                className='inline-block'
                                                href='product-page.html'
                                              >
                                                Patagonia Men's Better Sweater
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                              <div className='px-1'>
                                                QTY : <span>10</span>
                                              </div>
                                              <div className='px-1'>
                                                Subtotal : <span>$600.00</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-1'>
                                            <img
                                              src='../images/1040623_25528_STH.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-1'>
                                            <div className=''>
                                              <a
                                                className='inline-block'
                                                href='product-page.html'
                                              >
                                                The North Face Men's ThermoBall
                                                Trekker Vest
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                              <div className='px-1'>
                                                QTY : <span>10</span>
                                              </div>
                                              <div className='px-1'>
                                                Subtotal :<span>$1,390.00</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-1'>
                                            <img
                                              src='../images/1040623_25528_STH.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-1'>
                                            <div className=''>
                                              <a
                                                className='inline-block'
                                                href='product-page.html'
                                              >
                                                Patagonia Men's Better Sweater
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                                              <div className='px-1'>
                                                QTY : <span>10</span>
                                              </div>
                                              <div className='px-1'>
                                                Subtotal : <span>$600.00</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
                                    <div className='mb-3 font-semibold text-right'>
                                      <div className='text-gray-500'>
                                        30 ITEMS IN CART
                                      </div>
                                      <div className='text-lg'>
                                        Total $2,590.00
                                      </div>
                                    </div>
                                    <div className=''>
                                      <a
                                        href='cart.html'
                                        className='btn btn-primary w-full text-center'
                                      >
                                        CHECKOUT NOW
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
    </>
  );
};

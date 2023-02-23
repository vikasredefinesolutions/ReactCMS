import { useActions, useTypedSelector, useWindowDimensions } from 'hooks';
import { _Store, __constant } from 'page.config';
import React, { useEffect, useState } from 'react';
import {
  CompareIcon,
  LoggedInMenu,
  LoginIcon,
  Logo,
  MenuIcon,
  MyCartIcon,
  WishListIcon
} from '../Icons';

import CartController from 'Controllers/CartController';
import { _MenuItems } from 'show.type';
import NotificationBar from '../NotificationBar';
import SearchBar from './Ecommerce_SearchBar';
import MenuItems from './Menu/Ecommerce_MenuItems';

interface _props {
  storeCode: string;
  logoUrl: {
    desktop: string;
  };
  menuItems: _MenuItems | null;
}

const Ecommerce_Header: React.FC<_props> = ({
  storeCode,
  logoUrl,
  menuItems,
}) => {
  CartController();
  const { store_setAppView } = useActions();
  const { width } = useWindowDimensions();

  // ------------------------------------------------------------------------
  const userId = useTypedSelector((state) => state.user.id);
  const storeName = useTypedSelector((state) => state.store.storeName);
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

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div className='bg-white sticky top-0 z-40 shadow-[0_0px_5px_rgba(0,0,0,0.12)]'>
        <NotificationBar />
        <div className='bg-white'>
          {isMobileView && (
            <MenuItems
              showSideMenu={showSideMenu}
              storeCode={storeCode}
              screen='MOBILE'
              menuItems={menuItems}
            />
          )}
          <header className='relative trancking-[1px]'>
            <nav aria-label='Top'>
              <div className='bg-white '>
                <div className='container mx-auto'>
                  <div className='py-[10px]'>
                    <div className='flex items-center justify-between'>
                      {isMobileView ? null : (
                        <Logo
                          screen='DESKTOP'
                          logo={{
                            desktop: logoUrl.desktop,
                            mobile: logoUrl.desktop,
                          }}
                        />
                      )}

                      {isMobileView ? null : (
                        <MenuItems
                          showSideMenu={showSideMenu}
                          storeCode={storeCode}
                          screen='DESKTOP'
                          menuItems={menuItems}
                        />
                      )}

                      {isMobileView ? (
                        <Logo
                          screen='MOBILE'
                          logo={{
                            desktop: logoUrl.desktop,
                            mobile: logoUrl.desktop,
                          }}
                        />
                      ) : null}
                      <div className='flex items-center justify-end'>
                        <div className='flex items-center lg:ml-6'>
                          <div className='flex items-center space-x-4'>
                            {isMobileView ? null : (
                              <SearchBar screen={'DESKTOP'} />
                            )}
                            <WishListIcon />
                            <LoginIcon />
                            <LoggedInMenu />
                            {storeCode !== _Store.type1 && <CompareIcon />}
                            {/* <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}
                            <MyCartIcon />
                            <div className='lg:hidden'>
                              <MenuIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isMobileView ? <SearchBar screen='MOBILE' /> : null}
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
  }
  if (storeCode === _Store.type2) {
    return (
      <div className='bg-white sticky top-0 z-40'>
        <div className='container mx-auto'>
          <div x-data='{ open: false }' className='bg-white'>
            {isMobileView ? (
              <MenuItems
                showSideMenu={showSideMenu}
                storeCode={storeCode}
                screen='MOBILE'
                menuItems={menuItems}
              />
            ) : null}
            <header className='relative bg-white border-b border-gray-200'>
              <nav aria-label='Top'>
                <div className=''>
                  <div className='py-3 lg:py-4 flex items-center justify-between gap-3'>
                    {isMobileView ? null : (
                      <Logo
                        screen='DESKTOP'
                        logo={{
                          desktop: logoUrl.desktop,
                          mobile: '',
                        }}
                      />
                    )}

                    {/* MOBILE VIEW ---- START */}
                    {/* {isMobileView ? null : (
                      <MenuItems
                        showSideMenu={showSideMenu}
                        storeCode={storeCode}
                        screen='DESKTOP'
                        menuItems={menuItems}
                      />
                    )} */}
                    {/* MOBILE VIEW ---- END */}

                    {isMobileView ? <SearchBar screen='DESKTOP' /> : null}
                    {isMobileView ? (
                      <Logo
                        screen='MOBILE'
                        logo={{
                          desktop: logoUrl.desktop,
                          mobile: '',
                        }}
                      />
                    ) : null}
                    <div className='flex items-center justify-end'>
                      <div className='flex items-center'>
                        <div className='flex items-center space-x-3'>
                          {userId ? <LoggedInMenu /> : <LoginIcon />}
                          {userId ? <CompareIcon /> : ''}
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
        <MenuItems
          showSideMenu={showSideMenu}
          storeCode={storeCode}
          screen={isMobileView ? 'MOBILE' : 'DESKTOP'}
          menuItems={menuItems}
        />
      </div>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div
        className='bg-white sticky top-0 left-0 right-0 z-40 border-b-2 border-b-gray-300'
        id=''
      >
        <div className='container mx-auto'>
          {isMobileView && (
            <MenuItems
              showSideMenu={showSideMenu}
              storeCode={storeCode}
              screen='MOBILE'
              menuItems={menuItems}
            />
          )}
          <header className='relative border-b border-b-gray-200'>
            {/* <!-- <div className="lg:hidden text-center">
                  <a href="index.html" className="inline-block pt-4">
                      <img src="../images/logo.png" alt="" className="h-14 w-auto">
                  </a>
              </div> --> */}
            <nav aria-label='Top'>
              <div className=''>
                <div className='py-3 flex items-center justify-between gap-3'>
                  {isMobileView ? null : (
                    <Logo
                      screen='DESKTOP'
                      logo={{ desktop: logoUrl.desktop, mobile: '' }}
                    />
                  )}
                  {isMobileView && (
                    <div className='flex items-center lg:hidden space-x-3'>
                      <MenuIcon />
                      <SearchBar screen='MOBILE' />
                    </div>
                  )}

                  {isMobileView ? null : <SearchBar screen='DESKTOP' />}

                  {isMobileView && (
                    <Logo
                      screen='MOBILE'
                      logo={{
                        desktop: logoUrl.desktop,
                        mobile: '',
                      }}
                    />
                  )}

                  <div className='flex items-center justify-end'>
                    <div className='flex items-center'>
                      <div className='flex items-center space-x-3'>
                        <LoginIcon />
                        <LoggedInMenu />
                        <CompareIcon />
                        {/* <WishListIcon /> */}
                        <MyCartIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <MenuItems
          showSideMenu={showSideMenu}
          storeCode={storeCode}
          screen={isMobileView ? 'MOBILE' : 'DESKTOP'}
          menuItems={menuItems}
        />
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='bg-black'>
        {isMobileView && (
          <MenuItems
            showSideMenu={showSideMenu}
            storeCode={storeCode}
            screen='MOBILE'
            menuItems={menuItems}
          />
        )}
        <header className='relative'>
          <nav aria-label='Top'>
            <div className='bg-black shadow-md'>
              <div className='container mx-auto'>
                <div className=''>
                  <div className='py-3 lg:py-4 flex items-center justify-between'>
                    {isMobileView ? null : (
                      <Logo
                        screen='DESKTOP'
                        logo={{ desktop: logoUrl.desktop, mobile: '' }}
                      />
                    )}
                    {isMobileView ? null : (
                      <MenuItems
                        showSideMenu={showSideMenu}
                        storeCode={storeCode}
                        screen='DESKTOP'
                        menuItems={menuItems}
                      />
                    )}
                    <div className='flex items-center lg:hidden space-x-4 pr-4'>
                      <MenuIcon />
                      {isMobileView ? <SearchBar screen='MOBILE' /> : null}
                    </div>
                    {isMobileView ? (
                      <Logo
                        screen='MOBILE'
                        logo={{ desktop: logoUrl.desktop, mobile: '' }}
                      />
                    ) : null}
                    <div className='flex items-center justify-end'>
                      <div className='flex items-center lg:ml-6'>
                        <div className='flex items-center space-x-4'>
                          {isMobileView ? null : (
                            <SearchBar screen={'DESKTOP'} />
                          )}
                          <WishListIcon /> <LoginIcon /> <LoggedInMenu />
                          {userId ? <CompareIcon /> : ''}
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
      // <>
      //   <div
      //     className='sticky top-0 z-20'
      //     style={{
      //       background: "url('https://www.drivingi.com/images/home-bg.jpg')",
      //     }}
      //     id='header'
      //   >
      //     <div className='bg-white text-black py-1 hidden md:block text-sm'>
      //       <div className='container mx-auto'>
      //         <div className='w-full items-center text-center'>
      //           <div className='items-center'>
      //             Email:
      //             <a href='mailto:info@drivingi.com' title='info@drivingi.com'>
      //               info@drivingi.com
      //             </a>
      //             <span className='mx-2'>OR</span> Call:
      //             <a href='tel:+18887374864' title='888.737.4864'>
      //               888.737.4864
      //             </a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className=''>
      //       <div className='relative z-40 lg:hidden'>
      //         <div className='fixed inset-0 bg-black bg-opacity-25'></div>
      //         <div className='fixed inset-0 flex z-40'>
      //           <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
      //             <div className='px-4 pt-5 flex'>
      //               <button
      //                 type='button'
      //                 className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
      //               >
      //                 <span className='sr-only'>Close menu</span>
      //                 <svg
      //                   className='h-6 w-6'
      //                   fill='none'
      //                   viewBox='0 0 24 24'
      //                   stroke-width='2'
      //                   stroke='currentColor'
      //                   aria-hidden='true'
      //                 >
      //                   <path
      //                     stroke-linecap='round'
      //                     stroke-linejoin='round'
      //                     d='M6 18L18 6M6 6l12 12'
      //                   ></path>
      //                 </svg>
      //               </button>
      //             </div>
      //             <div className='my-6 px-0 border-t border-gray-300'>
      //               <div className='text-sm border-b border-gray-300'>
      //                 <div className='flex items-center justify-between py-2 pr-2'>
      //                   <button
      //                     className='flex items-center grow group'
      //                     aria-expanded='false'
      //                   >
      //                     <svg
      //                       className='w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500'
      //                       viewBox='0 0 32 32'
      //                     >
      //                       <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
      //                     </svg>
      //                     <div className='text-gray-800 font-medium'>
      //                       Brands
      //                     </div>
      //                   </button>
      //                   <div className=''>
      //                     <a href='product-listing.html' className='text-xs'>
      //                       Show All
      //                     </a>
      //                   </div>
      //                 </div>
      //                 <div className='bg-gray-100' x-show='open' x-cloak>
      //                   <div className='border-t first:border-t-0 py-5 px-6'>
      //                     <ul
      //                       role='list'
      //                       aria-labelledby='desktop-featured-heading-1'
      //                       className='flex flex-wrap gap-y-2'
      //                     >
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Casual
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Outdoor
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Artwork Tees
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Pants
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Accessories
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Basic Tees
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Casual
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Outdoor
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Artwork Tees
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Pants
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Accessories
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Basic Tees
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Casual
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Outdoor
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Artwork Tees
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Pants
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Accessories
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Boxers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Basic Tees
      //                         </a>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div className='text-sm border-b border-gray-300'>
      //                 <div className='flex items-center justify-between py-2 pr-2'>
      //                   <button
      //                     className='flex items-center grow group'
      //                     aria-expanded='false'
      //                   >
      //                     <svg
      //                       className='w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500'
      //                       viewBox='0 0 32 32'
      //                     >
      //                       <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
      //                     </svg>
      //                     <div className='text-gray-800 font-medium'>Men</div>
      //                   </button>
      //                   <div className=''>
      //                     <a href='product-listing.html' className='text-xs'>
      //                       Show All
      //                     </a>
      //                   </div>
      //                 </div>
      //                 <div className='bg-gray-100' x-show='open' x-cloak>
      //                   <div className='border-t first:border-t-0 py-5 px-6'>
      //                     <ul
      //                       role='list'
      //                       aria-labelledby='desktop-featured-heading-1'
      //                       className='flex flex-wrap gap-y-2'
      //                     >
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Polo
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Quarter Zips & Pullovers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Jackets
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Hoodies & Sweetshirts
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Vests
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           T-Shirts
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Shirts
      //                         </a>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div
      //                 className='text-sm border-b border-gray-300'
      //                 x-data='{ open: false }'
      //               >
      //                 <div className='flex items-center justify-between py-2 pr-2'>
      //                   <button
      //                     className='flex items-center grow group'
      //                     aria-expanded='false'
      //                   >
      //                     <svg
      //                       className='w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500'
      //                       viewBox='0 0 32 32'
      //                     >
      //                       <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
      //                     </svg>
      //                     <div className='text-gray-800 font-medium'>Women</div>
      //                   </button>
      //                   <div className=''>
      //                     <a href='product-listing.html' className='text-xs'>
      //                       Show All
      //                     </a>
      //                   </div>
      //                 </div>
      //                 <div className='bg-gray-100' x-show='open' x-cloak>
      //                   <div className='border-t first:border-t-0 py-5 px-6'>
      //                     <ul
      //                       role='list'
      //                       aria-labelledby='desktop-featured-heading-1'
      //                       className='flex flex-wrap gap-y-2'
      //                     >
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Polo
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Quarter Zips & Pullovers
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Jackets
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Hoodies & Sweetshirts
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Vests
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           T-Shirts
      //                         </a>
      //                       </li>
      //                       <li className='w-full lg:w-1/3 flex items-center'>
      //                         <span className='material-icons-outlined text-lg'>
      //                           chevron_right
      //                         </span>
      //                         <a
      //                           href='product-listing.html'
      //                           className='text-anchor hover:text-anchor-hover'
      //                         >
      //                           Shirts
      //                         </a>
      //                       </li>
      //                     </ul>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div
      //                 className='text-sm border-b border-gray-300'
      //                 x-data='{ open: false }'
      //               >
      //                 <div className='flex items-center justify-between py-3 px-2 pl-8'>
      //                   <div className=''>
      //                     <a href='product-listing.html' className=''>
      //                       Accessories
      //                     </a>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div
      //                 className='text-sm border-b border-gray-300'
      //                 x-data='{ open: false }'
      //               >
      //                 <div className='flex items-center justify-between py-3 px-2 pl-8'>
      //                   <div className=''>
      //                     <a href='product-listing.html' className=''>
      //                       Contact / Quote
      //                     </a>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div
      //                 className='text-sm border-b border-gray-300'
      //                 x-data='{ open: false }'
      //               >
      //                 <div className='flex items-center justify-between py-3 px-2 pl-8'>
      //                   <div className=''>
      //                     <a href='product-listing.html' className=''>
      //                       Catalogs
      //                     </a>
      //                   </div>
      //                 </div>
      //               </div>
      //               {/* <div className="px-1" x-data="{ open: false }">
      //                               <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                                   <div className="text-sm text-gray-800 font-medium px-2">Men</div>
      //                                   <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                       <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                   </svg>
      //                               </button>
      //                               <ul className="text-sm pl-4" x-show="open" x-cloak>
      //                                   <li className="py-2" x-data="{ open: false }">
      //                                       <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                                           <div className="text-sm text-gray-800 font-medium">Featured</div>
      //                                           <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                               <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                           </svg>
      //                                       </button>
      //                                       <ul className="text-sm px-2" x-show="open" x-cloak>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Sleep</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Swimwear</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Underwear</a> </li>
      //                                       </ul>
      //                                   </li>
      //                                   <li className="py-2" x-data="{ open: false }">
      //                                       <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                                           <div className="text-sm text-gray-800 font-medium">Categories</div>
      //                                           <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                               <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                           </svg>
      //                                       </button>
      //                                       <ul className="text-sm px-2" x-show="open" x-cloak>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Basic Tees</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Artwork Tees</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Bottoms</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Underwear</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Accessories</a> </li>
      //                                       </ul>
      //                                   </li>
      //                                   <li className="py-2" x-data="{ open: false }">
      //                                       <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                                           <div className="text-sm text-gray-800 font-medium">Collection</div>
      //                                           <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                               <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                           </svg>
      //                                       </button>
      //                                       <ul className="text-sm px-2" x-show="open" x-cloak>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Everything</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Core</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">New Arrivals</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Sale</a> </li>
      //                                       </ul>
      //                                   </li>
      //                                   <li className="py-2" x-data="{ open: false }">
      //                                       <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                                           <div className="text-sm text-gray-800 font-medium">Brands</div>
      //                                           <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                               <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                           </svg>
      //                                       </button>
      //                                       <ul className="text-sm px-2" x-show="open" x-cloak>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Full Nelson</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">My Way</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Re-Arranged</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Counterfeit</a> </li>
      //                                           <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Significant Other</a> </li>
      //                                       </ul>
      //                                   </li>
      //                               </ul>
      //                           </div> */}
      //               {/* <div className="px-1" x-data="{ open: false }">
      //                               <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                               <div className="text-sm text-gray-800 font-medium px-2">Company</div>
      //                               <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                                   <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                               </svg>
      //                               </button>
      //                           </div> */}
      //               {/* <div className="px-1" x-data="{ open: false }">
      //                               <button className="flex items-center justify-between w-full group mb-1" aria-expanded="false">
      //                               <div className="text-sm text-gray-800 font-medium px-2">Stores</div>
      //                               <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" viewBox="0 0 32 32">
      //                                                   <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
      //                                               </svg>
      //                               </button>
      //                           </div> */}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <header className='relative'>
      //         <nav aria-label='Top'>
      //           <div className=''>
      //             <div className='container mx-auto'>
      //               <div className='py-3 lg:py-4 flex items-center justify-between'>
      //                 <div className='hidden lg:flex lg:items-center'>
      //                   <a href='index.html'>
      //                     <span className='sr-only'>Workflow</span>
      //                     <img
      //                       className='h-16 w-auto'
      //                       src='/images/logo.png'
      //                       alt='Corporate Gear'
      //                     />
      //                   </a>
      //                 </div>
      //                 <div className='hidden h-full lg:flex items-center justify-center flex-1'>
      //                   <div
      //                     className='ml-6'
      //                     x-data='Components.popoverGroup()'
      //                     x-init='init()'
      //                   >
      //                     <div className='h-full flex justify-center space-x-6 relative'>
      //                       <div
      //                         className='flex'
      //                         x-data='Components.popover({ open: false, focus: false })'
      //                         x-init='init()'
      //                       >
      //                         <div className='relative flex'>
      //                           <button
      //                             type='button'
      //                             className='relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover'
      //                           >
      //                             <span className='text-white'>Brands</span>
      //                             <svg
      //                               className='w-8 h-8 shrink-0 fill-current text-anchor-hover group-hover:text-gray-500 ml-3'
      //                               viewBox='0 0 32 32'
      //                             >
      //                               <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
      //                             </svg>
      //                           </button>
      //                         </div>
      //                         {/* <div className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
      //                                                 x-ref="panel">
      //                                                 <div className="relative bg-white z-50">
      //                                                     <div className="max-w-7xl mx-auto">
      //                                                         <div className="flex flex-wrap border-t first:border-t-0 py-4 px-5 border">
      //                                                             <div className="w-full lg:w-1/2 text-center"><a href="product-listing.html" className="text-anchor hover:text-anchor-hover"><img className="inline-block" src="../images/adidas.png" alt="" title="" /></a></div>
      //                                                             <div className="w-full lg:w-1/2 text-center"><a href="product-listing.html" className="text-anchor hover:text-anchor-hover"><img className="inline-block" src="../images/adidas.png" alt="" title="" /></a></div>
      //                                                         </div>
      //                                                         <div className="border-t first:border-t-0 py-5 px-5">
      //                                                             <div className="flex flex-wrap gap-y-2">
      //                                                                 <ul className="w-full lg:w-1/3">
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Adidas </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> BAUER </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Callaway Golf </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Fairway & Greene </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Footjoy </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Galvin Green </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Helly Hansen </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Johnnie-O </a> </li>
      //                                                                 </ul>
      //                                                                 <ul className="w-full lg:w-1/3">
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> KNACK </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Lacoste </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Linksoul </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Patagonia </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Peter Millar </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Southern Tide </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> STATE Bags </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> STIO </a> </li>
      //                                                                 </ul>
      //                                                                 <ul className="w-full lg:w-1/3">
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> TaylorMade </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Titleist </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Under Armour </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Vineyard Vines </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> YETI </a> </li>
      //                                                                     <li className="flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Zero Restriction </a> </li>
      //                                                                 </ul>
      //                                                             </div>
      //                                                         </div>
      //                                                     </div>
      //                                                 </div>
      //                                             </div> */}
      //                       </div>
      //                       {/* <div className="flex" x-data="Components.popover({ open: false, focus: false })" x-init="init()">
      //                                             <div className="relative flex">
      //                                                 <button type="button"
      //                                                     className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
      //                                                     aria-expanded="false"> <span className="text-white">Men</span>
      //                                                 </button>
      //                                             </div>
      //                                             <div x-show="open"
      //                                                 x-description="'Men' mega menu, show/hide based on flyout menu state."
      //                                                 className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
      //                                                 x-ref="panel">
      //                                                 <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
      //                                                 <div className="relative bg-white z-50">
      //                                                     <div className="max-w-7xl mx-auto">
      //                                                         <div className="border-t first:border-t-0 py-5 px-5">
      //                                                             <ul role="list" aria-labelledby="desktop-featured-heading-1" className="flex flex-wrap gap-y-2">
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Polo </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Quarter Zips & Pullovers </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Jackets </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Hoodies & Sweetshirts </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Vests </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> T-Shirts </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Shirts </a> </li>
      //                                                             </ul>

      //                                                         </div>
      //                                                     </div>
      //                                                 </div>
      //                                             </div>
      //                                         </div> */}
      //                       <div
      //                         className='flex'
      //                         x-data='Components.popover({ open: false, focus: false })'
      //                         x-init='init()'
      //                       >
      //                         <div className='relative flex'>
      //                           <button
      //                             type='button'
      //                             className='relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover'
      //                           >
      //                             <span className='text-white'>Women</span>
      //                           </button>
      //                         </div>
      //                         <div
      //                           x-show='open'
      //                           x-description="'Men' mega menu, show/hide based on flyout menu state."
      //                           className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm'
      //                           x-ref='panel'
      //                         >
      //                           <div
      //                             className='absolute inset-0 top-1/2 bg-white shadow'
      //                             aria-hidden='true'
      //                           ></div>
      //                           {/* <div className="relative bg-white z-50">
      //                                                     <div className="max-w-7xl mx-auto">
      //                                                         <div className="border-t first:border-t-0 py-5 px-5">
      //                                                             <ul role="list" aria-labelledby="desktop-featured-heading-1" className="flex flex-wrap gap-y-2">
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Polo </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Quarter Zips & Pullovers </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Jackets </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Hoodies & Sweetshirts </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Vests </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> T-Shirts </a> </li>
      //                                                                 <li className="w-full lg:w-1/2 flex items-center"><span className="material-icons-outlined text-lg">chevron_right</span> <a href="product-listing.html" className="text-anchor hover:text-anchor-hover"> Shirts </a> </li>
      //                                                             </ul>
      //                                                         </div>
      //                                                     </div>
      //                                                 </div> */}
      //                         </div>
      //                       </div>
      //                       <div className='flex'>
      //                         <div className=''>
      //                           <a
      //                             href='product-listing.html'
      //                             className='relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
      //                           >
      //                             <span className='text-white'>
      //                               Accessories
      //                             </span>
      //                           </a>
      //                         </div>
      //                       </div>
      //                       <div className='flex'>
      //                         <div className=''>
      //                           <a
      //                             href='product-listing.html'
      //                             className='relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
      //                           >
      //                             <span className='text-white'>
      //                               Contact / Quote
      //                             </span>
      //                           </a>
      //                         </div>
      //                       </div>
      //                       <div className='flex'>
      //                         <div className=''>
      //                           <a
      //                             href='product-listing.html'
      //                             className='relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary'
      //                           >
      //                             <span className='text-white'>Catalogs</span>
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <div className='flex items-center lg:hidden space-x-4'>
      //                   <button
      //                     type='button'
      //                     x-description="Mobile menu toggle, controls the 'mobileMenuOpen' state."
      //                     className='py-2 rounded-md text-white hover:text-primary'
      //                   >
      //                     <span className='sr-only'>Open menu</span>
      //                     <svg
      //                       className='h-6 w-6'
      //                       x-description='Heroicon name: outline/menu'
      //                       xmlns='http://www.w3.org/2000/svg'
      //                       fill='none'
      //                       viewBox='0 0 24 24'
      //                       stroke-width='2'
      //                       stroke='currentColor'
      //                       aria-hidden='true'
      //                     >
      //                       <path
      //                         stroke-linecap='round'
      //                         stroke-linejoin='round'
      //                         d='M4 6h16M4 12h16M4 18h16'
      //                       ></path>
      //                     </svg>
      //                   </button>

      //                   <a
      //                     href='#'
      //                     className='py-2 text-white hover:text-gray-500'
      //                   >
      //                     <span className='sr-only'>Search</span>
      //                     <svg
      //                       className='w-6 h-6'
      //                       x-description='Heroicon name: outline/search'
      //                       xmlns='http://www.w3.org/2000/svg'
      //                       fill='none'
      //                       viewBox='0 0 24 24'
      //                       stroke-width='2'
      //                       stroke='currentColor'
      //                       aria-hidden='true'
      //                     >
      //                       <path
      //                         stroke-linecap='round'
      //                         stroke-linejoin='round'
      //                         d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      //                       ></path>
      //                     </svg>
      //                   </a>
      //                 </div>

      //                 <a href='index.html' className='lg:hidden'>
      //                   <img
      //                     src='../images/logo.png'
      //                     alt=''
      //                     className='h-8 w-auto'
      //                   />
      //                 </a>
      //                 <div className='flex items-center justify-end'>
      //                   <div className='flex items-center lg:ml-6'>
      //                     <div className='flex items-center space-x-4'>
      //                       <div className='hidden lg:flex'>
      //                         <a
      //                           href='#'
      //                           className='-m-2  border border-primary p-2 pr-10 text-gray-400 hover:text-gray-500 rounded-md relative'
      //                         >
      //                           <input
      //                             type='text'
      //                             className='outline-none bg-transparent text-white focus:shadow-none focus:border-none placeholder:text-gray-400 border-transparent'
      //                             placeholder='Search'
      //                           />
      //                           <div className='w-6 h-6 absolute right-2 top-4'>
      //                             <SearchIcon className='w-6 h-6 stroke-primary' />
      //                           </div>
      //                         </a>
      //                       </div>
      //                       <div className='flex'>
      //                         <a
      //                           href='javascript:void(0);'
      //                           className='lg:mx-2 py-2 text-white hover:text-white flex items-center gap-1'
      //                           data-modal-toggle='LoginModal'
      //                         >
      //                           <span className='lg:hidden material-icons-outlined'>
      //                             person
      //                           </span>
      //                           <span className='lg:inline-block'>Login</span>
      //                         </a>
      //                       </div>
      //                       {/* <!-- <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span> --> */}
      //                       <div className='flow-root'>
      //                         <a
      //                           href='cart.html'
      //                           className='lg:mx-2 py-2 text-white hover:text-white flex items-center gap-1'
      //                         >
      //                           <span className='lg:hidden material-icons-outlined'>
      //                             shopping_cart
      //                           </span>
      //                           <span className='lg:inline-block'>My Cart</span>
      //                         </a>
      //                       </div>
      //                       <div className='flow-root'>
      //                         <a
      //                           href='#'
      //                           className='text-primary hover:text-gray-500 flex items-center gap-1'
      //                         >
      //                           <img
      //                             src='images/for-the-planet.png'
      //                             title=''
      //                             alt=''
      //                           />
      //                         </a>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </nav>
      //       </header>
      //     </div>
      //   </div>
      // </>
    );
  }

  return <></>;
};

export default React.memo(Ecommerce_Header);

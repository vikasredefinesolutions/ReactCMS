import { __Cookie } from '@constants/global.constant';
import { extractCookies } from 'helpers/common.helper';
import { useTypedSelector } from 'hooks';
import React, { useState } from 'react';

export const Bacardi_BrandsBar: React.FC = () => {
  const [showmenu, setShowMenu] = useState(false);
  const [userlogin, setUserlogin] = useState(false);
  const [userId, setuserId] = useState<null | number>(null);
  const { id: logedIn } = useTypedSelector((state) => state.user);
  if (logedIn) {
    const tempUserId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;
    // setuserId(+tempUserId)
  }

  return (
    <div className='w-full lg:bg-[#efefef]'>
      <div className='container mx-auto'>
        <div
          // @keydown.window.escape="open = false"
          className=''
        >
          {/* <!-- Mobile menu --> */}
          {showmenu && (
            <div className='relative z-40 '>
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
                  <div className='my-6 px-0 border-t border-gray-300'>
                    {/* <!-- Start --> */}
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-2 pr-2'>
                        <button
                          className='flex items-center grow group'
                          //  @click.prevent="open = !open" :aria-expanded="open"
                        >
                          <svg
                            className='w-8 h-8 shrink-0 fill-current text-anchor'
                            // :className="{ 'text-anchor-hover rotate-180': open }"
                            viewBox='0 0 32 32'
                          >
                            <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                          </svg>
                          <div className='text-anchor'>Brands</div>
                        </button>
                        <div className=''>
                          <a href='product-gridview.html' className='text-xs'>
                            Show All
                          </a>
                        </div>
                      </div>
                      <div className='bg-gray-100'>
                        <div className='border-t first:border-t-0 py-5 px-4'>
                          <div className='flex flex-wrap border-t first:border-t-0 py-3'>
                            <div className='w-1/2 lg:w-1/4 text-center'>
                              <a
                                href='product-gridview.html'
                                className='block p-2 bg-secondary m-2'
                              >
                                <img
                                  className='inline-block'
                                  src='../images/adidas-white.png'
                                  alt=''
                                  title=''
                                />
                              </a>
                            </div>
                            <div className='w-1/2 lg:w-1/4 text-center'>
                              <a
                                href='product-gridview.html'
                                className='block p-2 bg-secondary m-2'
                              >
                                <img
                                  className='inline-block'
                                  src='../images/peter-millar-white.png'
                                  alt=''
                                  title=''
                                />
                              </a>
                            </div>
                            <div className='w-1/2 lg:w-1/4 text-center'>
                              <a
                                href='product-gridview.html'
                                className='block p-2 bg-secondary m-2'
                              >
                                <img
                                  className='inline-block'
                                  src='../images/adidas-white.png'
                                  alt=''
                                  title=''
                                />
                              </a>
                            </div>
                            <div className='w-1/2 lg:w-1/4 text-center'>
                              <a
                                href='product-gridview.html'
                                className='block p-2 bg-secondary m-2'
                              >
                                <img
                                  className='inline-block'
                                  src='../images/peter-millar-white.png'
                                  alt=''
                                  title=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='border-t first:border-t-0 py-5'>
                            <div className='flex flex-wrap gap-y-2'>
                              <ul className='w-full lg:w-1/3'>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    ADIDAS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    BAUER
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    CALLAWAY GOLF
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FAIRWAY & GREENE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FOOTJOY
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    GALVIN GREEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    HELLY HANSEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JOHNNIE-O
                                  </a>
                                </li>
                              </ul>
                              <ul className='w-full lg:w-1/3'>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    KNACK
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    LACOSTE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    LINKSOUL
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    PATAGONIA
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    PETER MILLAR
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    SOUTHERN TIDE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    STATE BAGS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    STIO
                                  </a>
                                </li>
                              </ul>
                              <ul className='w-full lg:w-1/3'>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    TAYLORMADE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    TITLEIST
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    UNDER ARMOUR
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    VINEYARD VINES
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    YETI
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    ZERO RESTRICTION
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-2 pr-2'>
                        <button
                          className='flex items-center grow group'
                          //  @click.prevent="open = !open" :aria-expanded="open"
                        >
                          <svg
                            className='w-8 h-8 shrink-0 fill-current text-anchor'
                            // :className="{ 'text-anchor-hover rotate-180': open }"
                            viewBox='0 0 32 32'
                          >
                            <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                          </svg>
                          <div className='text-anchor'>Men</div>
                        </button>
                        <div className=''>
                          <a href='product-gridview.html' className='text-xs'>
                            Show All
                          </a>
                        </div>
                      </div>
                      <div className='bg-gray-100'>
                        <div className='border-t first:border-t-0 py-5 px-6'>
                          <div className='flex flex-wrap gap-4'>
                            <div className='w-full lg:w-1/3'>
                              <div className='text-base mb-2 font-semibold text-anchor'>
                                BY CATEGORY
                              </div>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    SHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    POLO
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JACKETS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    QUARTER ZIPS & PULLOVERS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    T-SHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    HOODIES & SWEETSHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    VESTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    BOTTOMS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JERSEY
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='w-full lg:w-1/3'>
                              <div className='text-base mb-2 font-semibold text-anchor'>
                                BY BRAND
                              </div>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    ADIDAS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    BAUER
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    CALLAWAY GOLF
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FAIRWAY & GREENE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FOOTJOY
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    GALVIN GREEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    HELLY HANSEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JOHNNIE-O
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    PATAGONIA
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    PETER MILLAR
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4'>
                            <div className='w-full lg:w-1/3'>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    All Men's Apparel & Footwear
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='w-full lg:w-1/3'>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    All Brands
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-2 pr-2'>
                        <button
                          className='flex items-center grow group'
                          // @click.prevent="open = !open" :aria-expanded="open"
                        >
                          <svg
                            className='w-8 h-8 shrink-0 fill-current text-anchor'
                            // :className="{ 'text-anchor-hover rotate-180': open }"
                            viewBox='0 0 32 32'
                          >
                            <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                          </svg>
                          <div className='text-anchor'>Women</div>
                        </button>
                        <div className=''>
                          <a href='product-gridview.html' className='text-xs'>
                            Show All
                          </a>
                        </div>
                      </div>
                      <div className='bg-gray-100'>
                        <div className='border-t first:border-t-0 py-5 px-6'>
                          <div className='flex flex-wrap gap-4'>
                            <div className='w-full lg:w-1/3'>
                              <div className='text-base mb-2 font-semibold text-anchor'>
                                BY CATEGORY
                              </div>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    SHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    POLO
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JACKETS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    QUARTER ZIPS & PULLOVERS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    T-SHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    HOODIES & SWEETSHIRTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    VESTS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    BOTTOMS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JERSEY
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='w-full lg:w-1/3'>
                              <div className='text-base mb-2 font-semibold text-anchor'>
                                BY BRAND
                              </div>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    ADIDAS
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    BAUER
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    CALLAWAY GOLF
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FAIRWAY & GREENE
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    FOOTJOY
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    GALVIN GREEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    HELLY HANSEN
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    JOHNNIE-O
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    PATAGONIA
                                  </a>
                                </li>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    VINEYARD VINES
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4'>
                            <div className='w-full lg:w-1/3'>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    All Women's Apparel & Footwear
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='w-full lg:w-1/3'>
                              <ul>
                                <li className='flex items-center'>
                                  <a
                                    href='product-gridview.html'
                                    className='text-anchor hover:text-anchor-hover'
                                  >
                                    All Brands
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-2 pr-2'>
                        <button
                          className='flex items-center grow group'
                          //  @click.prevent="open = !open" :aria-expanded="open"
                        >
                          <svg
                            className='w-8 h-8 shrink-0 fill-current text-anchor'
                            // :className="{ 'text-anchor-hover rotate-180': open }"
                            viewBox='0 0 32 32'
                          >
                            <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
                          </svg>
                          <div className='text-anchor'>Golf</div>
                        </button>
                        <div className=''>
                          <a href='product-gridview.html' className='text-xs'>
                            Show All
                          </a>
                        </div>
                      </div>
                      <div className='bg-gray-100'>
                        <div className='border-t first:border-t-0 py-5 px-6'>
                          <ul
                            aria-labelledby='desktop-featured-heading-1'
                            className='flex flex-wrap gap-y-2'
                          >
                            <li className='w-full lg:w-1/4 flex justify-center text-center'>
                              <a
                                href='product-gridview.html'
                                className='text-anchor hover:text-anchor-hover'
                              >
                                <span className='block p-2 bg-secondary m-2 mb-3'>
                                  <img
                                    src='https://www.corporategear.com/images/custom-golf-gear.png'
                                    alt=''
                                  />
                                </span>
                                <span className='block pt-2 border-t border-t-gray-300'>
                                  CUSTOM GOLF GEAR
                                </span>
                              </a>
                            </li>
                            <li className='w-full lg:w-1/4 flex justify-center text-center'>
                              <a
                                href='product-gridview.html'
                                className='text-anchor hover:text-anchor-hover'
                              >
                                <span className='block p-2 bg-secondary m-2 mb-3'>
                                  <img
                                    src='https://www.corporategear.com/images/customizable-golf-bags.png'
                                    alt=''
                                  />
                                </span>
                                <span className='block pt-2 border-t border-t-gray-300'>
                                  CUSTOM GOLF BAGS
                                </span>
                              </a>
                            </li>
                            <li className='w-full lg:w-1/4 flex justify-center text-center'>
                              <a
                                href='product-gridview.html'
                                className='text-anchor hover:text-anchor-hover'
                              >
                                <span className='block p-2 bg-secondary m-2 mb-3'>
                                  <img
                                    src='https://www.corporategear.com/images/custom-golf balls.png'
                                    alt=''
                                  />
                                </span>
                                <span className='block pt-2 border-t border-t-gray-300'>
                                  CUSTOM GOLF BALLS
                                </span>
                              </a>
                            </li>
                            <li className='w-full lg:w-1/4 flex justify-center text-center'>
                              <a
                                href='product-gridview.html'
                                className='text-anchor hover:text-anchor-hover'
                              >
                                <span className='block p-2 bg-secondary m-2 mb-3'>
                                  <img
                                    src='https://www.corporategear.com/images/custom-golf-accessories.png'
                                    alt=''
                                  />
                                </span>
                                <span className='block pt-2 border-t border-t-gray-300'>
                                  GOLF ACCESSORIES
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-3 px-2 pl-8'>
                        <div className=''>
                          <a href='product-gridview.html' className=''>
                            Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-3 px-2 pl-8'>
                        <div className=''>
                          <a href='product-gridview.html' className=''>
                            FAQ
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='text-sm border-b border-gray-300'>
                      <div className='flex items-center justify-between py-3 px-2 pl-8'>
                        <div className=''>
                          <a href='product-gridview.html' className=''>
                            Sale
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <a
                        href='index.html'
                        className='after:absolute after:w-full after:h-1 after:left-0 after:bottom-[-11px] after:bg-secondary'
                      >
                        <img
                          className='max-h-20 w-auto'
                          src='../images/logo.png'
                          alt='Corporate Gear'
                        />
                      </a>
                    </div>
                    <div className='ml-12'>
                      <a href='index.html'>
                        <img
                          className='max-h-20 w-auto opacity-30'
                          src='../images/greygoose-logo.png'
                          alt='Corporate Gear'
                        />
                      </a>
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
                      alt='Corporate Gear'
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
  );
};

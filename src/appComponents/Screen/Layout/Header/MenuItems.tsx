import React from 'react';
import { useNavigate } from 'react-router';
import { paths } from '../../../../constants/paths.constant';
import { _Store } from '../constants/store.constant';
import { useActions, useTypedSelector } from '../hooks';
import MenuItem from './MenuItem';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
}

const MenuItems: React.FC<_props> = ({ screen }) => {
  const router = useRouter();
  const { toggleSideMenu } = useActions();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const showSideMenu = useTypedSelector((state) => state.modals.sideMenu);

  if (screen === 'MOBILE' && showSideMenu === false) {
    return <></>;
  }

  if (storeLayout === _Store.type1) {
    if (screen === 'MOBILE') {
      return (
        <>
          <div className="relative z-40 lg:hidden">
            <div
              // x-transition:enter="transition-opacity ease-linear duration-300"
              // x-transition:enter-start="opacity-0"
              // x-transition:enter-end="opacity-100"
              // x-transition:leave="transition-opacity ease-linear duration-300"
              // x-transition:leave-start="opacity-100"
              // x-transition:leave-end="opacity-0"
              x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
              className="fixed inset-0 bg-black bg-opacity-25"
            ></div>
            <div
            //  className="fixed inset-0 flex z-"
            >
              <div
                // x-transition:enter="transition ease-in-out duration-300 transform"
                // x-transition:enter-start="-translate-x-full"
                // x-transition:enter-end="translate-x-0"
                // x-transition:leave="transition ease-in-out duration-300 transform"
                // x-transition:leave-start="translate-x-0"
                // x-transition:leave-end="-translate-x-full"
                x-description="Off-canvas menu, show/hide based on off-canvas menu state."
                className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
                //  @click.away="open = false"
              >
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => toggleSideMenu(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      x-description="Heroicon name: outline/x"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- Links --> */}
                <div className="my-6 px-0 border-t border-gray-300">
                  {/* <!-- Start --> */}
                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-2 pr-2">
                      <button
                        className="flex items-center grow group"
                        //  @click.prevent="open = !open" :aria-expanded="open"
                        // aria-expanded="false"
                        onClick={() => router.push(paths.PRODUCT_LISTING)}
                      >
                        <svg
                          className="w-8 h-8 shrink-0 fill-current text-anchor"
                          //
                          // :className="{ 'text-anchor-hover rotate-180': open }"

                          viewBox="0 0 32 32"
                        >
                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                        </svg>
                        <div className="text-anchor">Brands</div>
                      </button>
                      <div className="">
                        <a href="product-listing.html" className="text-xs">
                          Show All
                        </a>
                      </div>
                    </div>
                    <div className="bg-gray-100" x-cloak="true">
                      {/* <div className="border-t first:border-t-0 py-5 px-6">
                <ul
                  role="list"
                  aria-labelledby="desktop-featured-heading-1"
                  className="flex flex-wrap gap-y-2"
                >
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Adidas{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      BAUER{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Callaway Golf{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Fairway & Greene{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Footjoy{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Galvin Green{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Helly Hansen{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Johnnie-O{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      KNACK{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Lacoste{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Linksoul{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Patagonia{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Peter Millar{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Southern Tide{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      STATE Bags{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      STIO{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      TaylorMade{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Titleist{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Under Armour{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Vineyard Vines{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      YETI{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Zero Restriction{' '}
                    </a>{' '}
                  </li>
                </ul>
              </div> */}
                    </div>
                  </div>
                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-2 pr-2">
                      <button
                        className="flex items-center grow group"
                        // @click.prevent="open = !open" :aria-expanded="open"
                        aria-expanded="false"
                      >
                        <svg
                          className="w-8 h-8 shrink-0 fill-current text-anchor"
                          // :className="{ 'text-anchor-hover rotate-180': open }"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                        </svg>
                        <div className="text-anchor">Men</div>
                      </button>
                      <div className="">
                        <a href="product-listing.html" className="text-xs">
                          Show All
                        </a>
                      </div>
                    </div>
                    <div className="bg-gray-100" x-cloak="true">
                      {/* <div className="border-t first:border-t-0 py-5 px-6">
                <ul
                  role="list"
                  aria-labelledby="desktop-featured-heading-1"
                  className="flex flex-wrap gap-y-2"
                >
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Polo{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Quarter Zips & Pullovers{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Jackets{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Hoodies & Sweetshirts{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Vests{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      T-Shirts{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Shirts{' '}
                    </a>{' '}
                  </li>
                </ul>
              </div> */}
                    </div>
                  </div>
                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-2 pr-2">
                      <button
                        className="flex items-center grow group"
                        // @click.prevent="open = !open" :aria-expanded="open"
                        aria-expanded="false"
                      >
                        <svg
                          className="w-8 h-8 shrink-0 fill-current text-anchor"
                          //
                          // :className="{ 'text-anchor-hover rotate-180': open }"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                        </svg>
                        <div className="text-anchor">Women</div>
                      </button>
                      <div className="">
                        <a href="product-listing.html" className="text-xs">
                          Show All
                        </a>
                      </div>
                    </div>
                    {/* <div className="bg-gray-100"  x-cloak="true">
              <div className="border-t first:border-t-0 py-5 px-6">
                <ul
                  role="list"
                  aria-labelledby="desktop-featured-heading-1"
                  className="flex flex-wrap gap-y-2"
                >
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Bottoms{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Polo{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Quarter Zips & Pullovers{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Jackets{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Hoodies & Sweetshirts{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Vests{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      T-Shirts{' '}
                    </a>{' '}
                  </li>
                  <li className="w-full lg:w-1/2 flex items-center">
                    <span className="material-icons-outlined text-lg">
                      chevron_right
                    </span>{' '}
                    <a
                      href="product-listing.html"
                      className="text-anchor hover:text-anchor-hover"
                    >
                      {' '}
                      Shirts{' '}
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div> */}
                  </div>

                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-2 pr-2">
                      <button
                        className="flex items-center grow group"
                        // @click.prevent="open = !open" :aria-expanded="open"
                        aria-expanded="false"
                      >
                        <svg
                          className="w-8 h-8 shrink-0 fill-current text-anchor"
                          //
                          // :className="{ 'text-anchor-hover rotate-180': open }"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                        </svg>
                        <div className="text-anchor">Golf</div>
                      </button>
                      <div className="">
                        <a href="product-listing.html" className="text-xs">
                          Show All
                        </a>
                      </div>
                    </div>
                    <div className="bg-gray-100" x-cloak="true">
                      <div className="border-t first:border-t-0 py-5 px-6">
                        <ul
                          role="list"
                          aria-labelledby="desktop-featured-heading-1"
                          className="flex flex-wrap gap-y-2"
                        >
                          <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                            <a
                              href="product-listing.html"
                              className="text-anchor hover:text-anchor-hover p-2"
                            >
                              {' '}
                              <span className="block mb-2">
                                <img
                                  src="https://www.corporategear.com/images/custom-golf-gear.png"
                                  alt=""
                                />
                              </span>{' '}
                              CUSTOM GOLF GEAR{' '}
                            </a>{' '}
                          </li>
                          <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                            <a
                              href="product-listing.html"
                              className="text-anchor hover:text-anchor-hover p-2"
                            >
                              {' '}
                              <span className="block mb-2">
                                <img
                                  src="https://www.corporategear.com/images/customizable-golf-bags.png"
                                  alt=""
                                />
                              </span>{' '}
                              CUSTOM GOLF BAGS{' '}
                            </a>{' '}
                          </li>
                          <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                            <a
                              href="product-listing.html"
                              className="text-anchor hover:text-anchor-hover p-2"
                            >
                              {' '}
                              <span className="block mb-2">
                                <img
                                  src="https://www.corporategear.com/images/custom-golf balls.png"
                                  alt=""
                                />
                              </span>{' '}
                              CUSTOM GOLF BALLS{' '}
                            </a>{' '}
                          </li>
                          <li className="w-1/2 lg:w-1/4 flex justify-center text-center">
                            <a
                              href="product-listing.html"
                              className="text-anchor hover:text-anchor-hover p-2"
                            >
                              {' '}
                              <span className="block mb-2">
                                <img
                                  src="https://www.corporategear.com/images/custom-golf-accessories.png"
                                  alt=""
                                />
                              </span>{' '}
                              GOLF ACCESSORIES{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-3 px-2 pl-8">
                      <div className="">
                        <a href="product-listing.html" className="">
                          Consultation
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-3 px-2 pl-8">
                      <div className="">
                        <a href="product-listing.html" className="">
                          FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-sm border-b border-gray-300"
                    x-data="{ open: false }"
                  >
                    <div className="flex items-center justify-between py-3 px-2 pl-8">
                      <div className="">
                        <a href="product-listing.html" className="">
                          Sale
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- <div className="px-1" x-data="{ open: false }">
                    <button className="flex items-center justify-between w-full group mb-1" 
                    // @click.prevent="open = !open" :aria-expanded="open"
                     aria-expanded="false">
                        <div className="text-sm text-gray-800 font-medium px-2">Men</div>
                        <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                        // :className="{ 'text-anchor-hover rotate-180': open }" 
                        viewBox="0 0 32 32">
                            <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                        </svg>
                    </button>
                    <ul className="text-sm pl-4"  x-cloak="true">
                        <li className="py-2" x-data="{ open: false }">
                            <button className="flex items-center justify-between w-full group mb-1" 
                            // @click.prevent="open = !open" :aria-expanded="open"
                             aria-expanded="false">
                                <div className="text-sm text-gray-800 font-medium">Featured</div>
                                <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                                // :className="{ 'text-anchor-hover rotate-180': open }" 
                                viewBox="0 0 32 32">
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button>
                            <ul className="text-sm px-2"  x-cloak="true">
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Sleep</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Swimwear</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Underwear</a> </li>
                            </ul>
                        </li>
                        <li className="py-2" x-data="{ open: false }">
                            <button className="flex items-center justify-between w-full group mb-1" 
                            // @click.prevent="open = !open" :aria-expanded="open"
                             aria-expanded="false">
                                <div className="text-sm text-gray-800 font-medium">Categories</div>
                                <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                                // :className="{ 'text-anchor-hover rotate-180': open }"
                                 
                                 viewBox="0 0 32 32">
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button>
                            <ul className="text-sm px-2"  x-cloak="true">
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Basic Tees</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Artwork Tees</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Bottoms</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Underwear</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Accessories</a> </li>
                            </ul>
                        </li>
                        <li className="py-2" x-data="{ open: false }">
                            <button className="flex items-center justify-between w-full group mb-1" 
                            // @click.prevent="open = !open" :aria-expanded="open"
                             aria-expanded="false">
                                <div className="text-sm text-gray-800 font-medium">Collection</div>
                                <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                                // :className="{ 'text-anchor-hover rotate-180': open }"
                                 
                                 viewBox="0 0 32 32">
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button>
                            <ul className="text-sm px-2"  x-cloak="true">
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Everything</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Core</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">New Arrivals</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Sale</a> </li>
                            </ul>
                        </li>
                        <li className="py-2" x-data="{ open: false }">
                            <button className="flex items-center justify-between w-full group mb-1" 
                            // @click.prevent="open = !open" :aria-expanded="open"
                             aria-expanded="false">
                                <div className="text-sm text-gray-800 font-medium">Brands</div>
                                <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                                // :className="{ 'text-anchor-hover rotate-180': open }"
                                 
                                 viewBox="0 0 32 32">
                                    <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                </svg>
                            </button>
                            <ul className="text-sm px-2"  x-cloak="true">
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Full Nelson</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">My Way</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Re-Arranged</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Counterfeit</a> </li>
                                <li className="text-gray-500 hover:text-gray-700 mt-4"> <a href="#">Significant Other</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div> --> */}
                  {/* <!-- <div className="px-1" x-data="{ open: false }">
                    <button className="flex items-center justify-between w-full group mb-1" @click.prevent="open = !open" :aria-expanded="open" aria-expanded="false">
                    <div className="text-sm text-gray-800 font-medium px-2">Company</div>
                    <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                    // :className="{ 'text-anchor-hover rotate-180': open }"
                     
                     viewBox="0 0 32 32">
                                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                    </svg> 
                    </button>
                </div>
                <div className="px-1" x-data="{ open: false }">
                    <button className="flex items-center justify-between w-full group mb-1"
                    //  @click.prevent="open = !open" :aria-expanded="open" 
                     aria-expanded="false"
                     >
                    <div className="text-sm text-gray-800 font-medium px-2">Stores</div>
                    <svg className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3" 
                    // :className="{ 'text-anchor-hover rotate-180': open }"
                     
                     viewBox="0 0 32 32">
                                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                    </svg> 
                    </button>
                </div> --> */}
                </div>
                {/* <!-- <div className="border-t border-gray-200 py-6 px-4 space-y-6">                    
                <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                </div>
            
                <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                </div>                    
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
                </div>
                <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                </div>
            </div> --> */}
              </div>
            </div>
          </div>
        </>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center flex-1">
          <div
            className="ml-6"
            x-data="Components.popoverGroup()"
            x-init="init()"
          >
            <div className="h-full flex justify-center space-x-6 relative text-sm">
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
                //  @keydown.escape="onEscape"
                // @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    onClick={() => router.push(paths.PRODUCT_LISTING)}
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"

                    // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                    // @mouseover="open = true"
                    // aria-expanded="false" :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">Brands</span>
                    {/* <!-- <svg className="w-8 h-8 shrink-0 fill-current text-anchor-hover group-hover:text-gray-500 ml-3" 
                                  // :className="{ 'text-anchor-hover rotate-180': open }"
                                   
                                   viewBox="0 0 32 32">
                                                                  <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                                              </svg> -->  */}
                  </button>
                </div>
                <div
                  //
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'"
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                  // @mouseover="open = true"
                >
                  {/* // <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div className="relative bg-gray-100 z-50">
                    <div className="max-w-7xl mx-auto">
                      {/* <div className="flex flex-wrap border-t first:border-t-0 py-5 px-5 border pt-8">
                    <div className="w-full lg:w-1/4 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/adidas.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                    <div className="w-full lg:w-1/4 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/peter-millar.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                    <div className="w-full lg:w-1/4 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/adidas.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                    <div className="w-full lg:w-1/4 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/peter-millar.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                  </div> */}
                      {/* <div className="border-t first:border-t-0 py-5 px-5">
                    <div className="flex flex-wrap gap-y-2">
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Adidas{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            BAUER{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Callaway Golf{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Fairway & Greene{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Footjoy{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Galvin Green{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Helly Hansen{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Johnnie-O{' '}
                          </a>{' '}
                        </li>
                      </ul>
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            KNACK{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Lacoste{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Linksoul{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Patagonia{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Peter Millar{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Southern Tide{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            STATE Bags{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            STIO{' '}
                          </a>{' '}
                        </li>
                      </ul>
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            TaylorMade{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Titleist{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Under Armour{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Vineyard Vines{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            YETI{' '}
                          </a>{' '}
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Zero Restriction{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
                // @keydown.escape="onEscape"
                //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    // x-state:on="Item active"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                    onClick={() => router.push(paths.PRODUCT_LISTING)}
                    // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                    // @mouseover="open = true" aria-expanded="false" :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">Men</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'Men' mega menu, show/hide based on flyout menu state."
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                  // @mouseover="open = true"
                >
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-gray-100 z-50">
                    {/* <div className="max-w-7xl mx-auto">
                      <div className="border-t first:border-t-0 py-5 px-5">
                        <ul
                          role="list"
                          aria-labelledby="desktop-featured-heading-1"
                          className="flex flex-wrap gap-y-2"
                        >
                          <li className="w-full lg:w-1/2 flex items-center">
                            <span className="material-icons-outlined text-lg">
                              chevron_right
                            </span>
                            <a
                              href="product-listing.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              Polo
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
                //  @keydown.escape="onEscape"
                // @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    onClick={() => router.push(paths.PRODUCT_LISTING)}
                    // x-state:on="Item active"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                    // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                    // @mouseover="open = true"
                    aria-expanded="false"
                    // :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">Women</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'Men' mega menu, show/hide based on flyout menu state."
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                  // @mouseover="open = true"
                >
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-gray-100 z-50">
                    {/* <div className="max-w-7xl mx-auto">
                  <div className="border-t first:border-t-0 py-5 px-5">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Bottoms{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Polo{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Quarter Zips & Pullovers{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Jackets{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Hoodies & Sweetshirts{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Vests{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          T-Shirts{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>{' '}
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          Shirts{' '}
                        </a>{' '}
                      </li>
                    </ul>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
                //  @keydown.escape="onEscape"
                //     @close-popover-group.window="onClosePopoverGroup" @mouseover.away = "open = false"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    // x-state:on="Item active"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                    // :className="{ 'border-b-primary text-primary-hover': open, 'border-transparent text-white hover:text-primary-hover': !(open) }"
                    // @mouseover="open = true"
                    aria-expanded="false"
                    //  :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">Golf</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'Men' mega menu, show/hide based on flyout menu state."
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                  // @mouseover="open = true"
                >
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-gray-100 z-50">
                    <div className="max-w-7xl mx-auto">
                      {/* <div className="border-t first:border-t-0 py-5 px-5">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          {' '}
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-gear.png"
                              alt=""
                            />
                          </span>{' '}
                          CUSTOM GOLF GEAR{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          {' '}
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/customizable-golf-bags.png"
                              alt=""
                            />
                          </span>{' '}
                          CUSTOM GOLF BAGS{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          {' '}
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf balls.png"
                              alt=""
                            />
                          </span>{' '}
                          CUSTOM GOLF BALLS{' '}
                        </a>{' '}
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover p-2"
                        >
                          {' '}
                          <span className="block mb-2">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-accessories.png"
                              alt=""
                            />
                          </span>{' '}
                          GOLF ACCESSORIES{' '}
                        </a>{' '}
                      </li>
                    </ul>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  {' '}
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                    // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()"
                    aria-expanded="false"
                    //  :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">
                      Accessories
                    </span>{' '}
                  </a>{' '}
                </div>
              </div>
              <div className="flex">
                <div className="">
                  {' '}
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                    // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()"
                    aria-expanded="false"
                    // :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">
                      Consultation
                    </span>{' '}
                  </a>{' '}
                </div>
              </div>
              <div className="flex">
                <div className="">
                  {' '}
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                    // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()"
                    aria-expanded="false"
                    // :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">FAQ</span>{' '}
                  </a>{' '}
                </div>
              </div>
              <div className="flex">
                <div className="">
                  {' '}
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 border-t-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                    // :className="{ 'border-blue-500 text-anchor-hover': open, 'border-transparent text-gray-700 hover:text-gray-800': !(open) }" @click="toggle" @mousedown="if (open) $event.preventDefault()"
                    aria-expanded="false"
                    // :aria-expanded="open.toString()"
                  >
                    {' '}
                    <span className="uppercase text-primary">Sale</span>{' '}
                  </a>{' '}
                </div>
              </div>
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
          <div
            // x-transition:enter="transition-opacity ease-linear duration-300"
            // x-transition:enter-end="opacity-100"
            // x-transition:leave="transition-opacity ease-linear duration-300"
            // x-transition:leave-start="opacity-100"
            // x-transition:leave-end="opacity-0"
            // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
            className="fixed inset-0 bg-black bg-opacity-25"
          ></div>
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
              className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
            >
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  onClick={() => toggleSideMenu(false)}
                  className="p-2 rounded-md inline-flex items-center justify-center text-gray-600"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    // x-description="Heroicon name: outline/x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Links --> */}
              <div className="my-6 px-0 border-t border-gray-300">
                {/* <!-- Start --> */}
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-anchor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-anchor">Brands</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-4">
                      <div className="flex flex-wrap border-t first:border-t-0 py-3">
                        <div className="w-1/2 lg:w-1/4 text-center">
                          <a
                            href="product-listing.html"
                            className="block p-2 bg-secondary m-2"
                          >
                            <img
                              className="inline-block"
                              src="../images/adidas-white.png"
                              alt=""
                              title=""
                            />
                          </a>
                        </div>
                        <div className="w-1/2 lg:w-1/4 text-center">
                          <a
                            href="product-listing.html"
                            className="block p-2 bg-secondary m-2"
                          >
                            <img
                              className="inline-block"
                              src="../images/peter-millar-white.png"
                              alt=""
                              title=""
                            />
                          </a>
                        </div>
                        <div className="w-1/2 lg:w-1/4 text-center">
                          <a
                            href="product-listing.html"
                            className="block p-2 bg-secondary m-2"
                          >
                            <img
                              className="inline-block"
                              src="../images/adidas-white.png"
                              alt=""
                              title=""
                            />
                          </a>
                        </div>
                        <div className="w-1/2 lg:w-1/4 text-center">
                          <a
                            href="product-listing.html"
                            className="block p-2 bg-secondary m-2"
                          >
                            <img
                              className="inline-block"
                              src="../images/peter-millar-white.png"
                              alt=""
                              title=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="border-t first:border-t-0 py-5">
                        <div className="flex flex-wrap gap-y-2">
                          <ul className="w-full lg:w-1/3">
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                ADIDAS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                BAUER{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                CALLAWAY GOLF{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FAIRWAY & GREENE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FOOTJOY{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                GALVIN GREEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                HELLY HANSEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JOHNNIE-O{' '}
                              </a>{' '}
                            </li>
                          </ul>
                          <ul className="w-full lg:w-1/3">
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                KNACK{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                LACOSTE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                LINKSOUL{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                PATAGONIA{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                PETER MILLAR{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                SOUTHERN TIDE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                STATE BAGS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                STIO{' '}
                              </a>{' '}
                            </li>
                          </ul>
                          <ul className="w-full lg:w-1/3">
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                TAYLORMADE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                TITLEIST{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                UNDER ARMOUR{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                VINEYARD VINES{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                YETI{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                ZERO RESTRICTION{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-anchor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-anchor">Men</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <div className="flex flex-wrap gap-4">
                        <div className="w-full lg:w-1/3">
                          <div className="text-base mb-2 font-semibold text-anchor">
                            BY CATEGORY
                          </div>
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                SHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                POLO{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JACKETS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                QUARTER ZIPS & PULLOVERS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                T-SHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                HOODIES & SWEETSHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                VESTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                BOTTOMS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JERSEY{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                          <div className="text-base mb-2 font-semibold text-anchor">
                            BY BRAND
                          </div>
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                ADIDAS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                BAUER{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                CALLAWAY GOLF{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FAIRWAY & GREENE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FOOTJOY{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                GALVIN GREEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                HELLY HANSEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JOHNNIE-O{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                PATAGONIA{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                PETER MILLAR{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4">
                        <div className="w-full lg:w-1/3">
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                All Men's Apparel & Footwear{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                All Brands{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-anchor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-anchor">Women</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <div className="flex flex-wrap gap-4">
                        <div className="w-full lg:w-1/3">
                          <div className="text-base mb-2 font-semibold text-anchor">
                            BY CATEGORY
                          </div>
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                SHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                POLO{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JACKETS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                QUARTER ZIPS & PULLOVERS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                T-SHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                HOODIES & SWEETSHIRTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                VESTS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                BOTTOMS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JERSEY{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                          <div className="text-base mb-2 font-semibold text-anchor">
                            BY BRAND
                          </div>
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                ADIDAS{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                BAUER{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                CALLAWAY GOLF{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FAIRWAY & GREENE{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                FOOTJOY{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                GALVIN GREEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                HELLY HANSEN{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                JOHNNIE-O{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                PATAGONIA{' '}
                              </a>{' '}
                            </li>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                VINEYARD VINES{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4">
                        <div className="w-full lg:w-1/3">
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                All Women's Apparel & Footwear{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                          <ul>
                            <li className="flex items-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                All Brands{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-anchor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-anchor">Golf</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <ul
                        aria-labelledby="desktop-featured-heading-1"
                        className="flex flex-wrap gap-y-2"
                      >
                        <li className="w-full lg:w-1/4 flex justify-center text-center">
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            <span className="block p-2 bg-secondary m-2 mb-3">
                              <img
                                src="https://www.corporategear.com/images/custom-golf-gear.png"
                                alt=""
                              />
                            </span>{' '}
                            <span className="block pt-2 border-t border-t-gray-300">
                              CUSTOM GOLF GEAR
                            </span>{' '}
                          </a>
                        </li>
                        <li className="w-full lg:w-1/4 flex justify-center text-center">
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            <span className="block p-2 bg-secondary m-2 mb-3">
                              <img
                                src="https://www.corporategear.com/images/customizable-golf-bags.png"
                                alt=""
                              />
                            </span>{' '}
                            <span className="block pt-2 border-t border-t-gray-300">
                              CUSTOM GOLF BAGS
                            </span>{' '}
                          </a>
                        </li>
                        <li className="w-full lg:w-1/4 flex justify-center text-center">
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            <span className="block p-2 bg-secondary m-2 mb-3">
                              <img
                                src="https://www.corporategear.com/images/custom-golf balls.png"
                                alt=""
                              />
                            </span>{' '}
                            <span className="block pt-2 border-t border-t-gray-300">
                              CUSTOM GOLF BALLS
                            </span>{' '}
                          </a>
                        </li>
                        <li className="w-full lg:w-1/4 flex justify-center text-center">
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            <span className="block p-2 bg-secondary m-2 mb-3">
                              <img
                                src="https://www.corporategear.com/images/custom-golf-accessories.png"
                                alt=""
                              />
                            </span>{' '}
                            <span className="block pt-2 border-t border-t-gray-300">
                              GOLF ACCESSORIES
                            </span>{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        Consultation
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm border-b border-gray-300"
                  x-data="{ open: false }"
                >
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        Sale
                      </a>
                    </div>
                  </div>
                </div>
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
                {['', ''].map(() => {
                  return <MenuItem screen="DESKTOP" />;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center">
          <div className="">
            {/* <!-- Mega menus --> */}
            <div
              className="ml-6"
              x-data="Components.popoverGroup()"
              x-init="init()"
            >
              <div className="h-full flex justify-center space-x-6 xl:space-x-10 relative text-base xl:tracking-widest">
                <div className="flex">
                  <div className="">
                    {' '}
                    <a
                      href="index.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      {' '}
                      <span className="">HOME</span>{' '}
                    </a>{' '}
                  </div>
                </div>
                {/* <div
                  className="flex"
                  x-data="Components.popover({ open: false, focus: false })"
                >
                  <div className="relative flex">
                    <button
                      type="button"
                      className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
                      aria-expanded="false"
                    >
                      {' '}
                      <span className="">BRANDS</span>
                    </button>
                  </div>
                  <div
                    className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                    x-ref="panel"
                  > */}
                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                {/* <div className="relative bg-gray-200 z-50">
                      <div className="max-w-7xl mx-auto p-4">
                        <div className="flex flex-wrap -mx-3 gap-y-6">
                          <div className="w-full lg:w-1/3 px-3 text-center">
                            <a
                              href="product-listing.html"
                              className="inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white"
                            >
                              <img
                                className="inline-block"
                                src="../images/brands-img/patagonia.png"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="w-full lg:w-1/3 px-3 text-center">
                            <a
                              href="product-listing.html"
                              className="inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white"
                            >
                              <img
                                className="inline-block"
                                src="../images/brands-img/nike.png"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="w-full lg:w-1/3 px-3 text-center">
                            <a
                              href="product-listing.html"
                              className="inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white"
                            >
                              <img
                                className="inline-block"
                                src="../images/brands-img/eddie-bauer.png"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="w-full lg:w-1/3 px-3 text-center">
                            <a
                              href="product-listing.html"
                              className="inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white"
                            >
                              <img
                                className="inline-block"
                                src="../images/brands-img/johnnie-o.png"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                          <div className="w-full lg:w-1/3 px-3 text-center">
                            <a
                              href="product-listing.html"
                              className="inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white"
                            >
                              <img
                                className="inline-block"
                                src="../images/brands-img/yeti.png"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex"
                  x-data="Components.popover({ open: false, focus: false })"
                >
                  <div className="relative flex">
                    <button
                      type="button"
                      className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
                      aria-expanded="false"
                    >
                      {' '}
                      <span className="">MEN</span>
                    </button>
                  </div>
                  <div> */}
                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                {/* <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>
                    <div className="relative bg-gray-100 z-50">
                      <div className="max-w-7xl mx-auto">
                        <div className="border-t first:border-t-0 py-5 px-5">
                          <ul
                            role="list"
                            aria-labelledby="desktop-featured-heading-1"
                            className="flex flex-wrap gap-y-2"
                          >
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Polo{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Quarter Zips & Pullovers{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Jackets{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Hoodies & Sweetshirts{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Vests{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                T-Shirts{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Shirts{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex"
                  x-data="Components.popover({ open: false, focus: false })"
                >
                  <div className="relative flex">
                    <button
                      type="button"
                      className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
                      aria-expanded="false"
                    >
                      {' '}
                      <span className="">WOMEN</span>
                    </button>
                  </div>
                  <div> */}
                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                {/* <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>
                    <div className="relative bg-gray-100 z-50">
                      <div className="max-w-7xl mx-auto">
                        <div className="border-t first:border-t-0 py-5 px-5">
                          <ul
                            role="list"
                            aria-labelledby="desktop-featured-heading-1"
                            className="flex flex-wrap gap-y-2"
                          >
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Bottoms{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Polo{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Quarter Zips & Pullovers{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Jackets{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Hoodies & Sweetshirts{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Vests{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                T-Shirts{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/2 flex items-center">
                              <span className="material-icons-outlined text-lg">
                                chevron_right
                              </span>{' '}
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover"
                              >
                                {' '}
                                Shirts{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex"
                  x-data="Components.popover({ open: false, focus: false })"
                >
                  <div className="relative flex">
                    <button
                      type="button"
                      className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
                      aria-expanded="false"
                    >
                      {' '}
                      <span className="">ACCESSORIES</span>
                    </button>
                  </div>
                  <div> */}
                {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                {/* <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>
                    <div className="relative bg-gray-100 z-50">
                      <div className="max-w-7xl mx-auto">
                        <div className="border-t first:border-t-0 py-5 px-5">
                          <ul
                            role="list"
                            aria-labelledby="desktop-featured-heading-1"
                            className="flex flex-wrap gap-y-2"
                          >
                            <li className="w-full lg:w-1/4 flex justify-center text-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover p-2"
                              >
                                {' '}
                                <span className="block mb-2">
                                  <img
                                    src="https://www.corporategear.com/images/custom-golf-gear.png"
                                    alt=""
                                  />
                                </span>{' '}
                                CUSTOM GOLF GEAR{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/4 flex justify-center text-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover p-2"
                              >
                                {' '}
                                <span className="block mb-2">
                                  <img
                                    src="https://www.corporategear.com/images/customizable-golf-bags.png"
                                    alt=""
                                  />
                                </span>{' '}
                                CUSTOM GOLF BAGS{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/4 flex justify-center text-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover p-2"
                              >
                                {' '}
                                <span className="block mb-2">
                                  <img
                                    src="https://www.corporategear.com/images/custom-golf balls.png"
                                    alt=""
                                  />
                                </span>{' '}
                                CUSTOM GOLF BALLS{' '}
                              </a>{' '}
                            </li>
                            <li className="w-full lg:w-1/4 flex justify-center text-center">
                              <a
                                href="product-listing.html"
                                className="text-anchor hover:text-anchor-hover p-2"
                              >
                                {' '}
                                <span className="block mb-2">
                                  <img
                                    src="https://www.corporategear.com/images/custom-golf-accessories.png"
                                    alt=""
                                  />
                                </span>{' '}
                                GOLF ACCESSORIES{' '}
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    {' '}
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      {' '}
                      <span className="">ORDER GUIDELINES</span>{' '}
                    </a>{' '}
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    {' '}
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      {' '}
                      <span className="">YETI</span>{' '}
                    </a>{' '}
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    {' '}
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      {' '}
                      <span className="">SPECIAL REQUESTS FORMS</span>{' '}
                    </a>{' '}
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    {' '}
                    <a
                      href="product-listing.html"
                      className="flex items-center transition-colors ease-out duration-200 text-anchor py-2.5"
                    >
                      {' '}
                      <span className="">SALE</span>{' '}
                    </a>{' '}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <div
        // className="fixed inset-0 flex z-40"
        >
          <div className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="p-2 rounded-md inline-flex items-center justify-center text-gray-600"
                onClick={() => toggleSideMenu(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  x-description="Heroicon name: outline/x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Links --> */}
            <div className="my-6 px-0 border-t border-gray-300">
              {/* <!-- Start --> */}
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-2 pr-2">
                  <button>
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Brands</div>
                  </button>
                  <div className="">
                    <a href="product-gridview.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100" x-cloak="true">
                  <div className="border-t first:border-t-0 py-5 px-4">
                    <div className="flex flex-wrap border-t first:border-t-0 py-3">
                      <div className="w-1/2 lg:w-1/4 text-center">
                        <a
                          href="product-gridview.html"
                          className="block p-2 bg-secondary m-2"
                        >
                          <img
                            className="inline-block"
                            src="../images/adidas-white.png"
                            alt=""
                            title=""
                          />
                        </a>
                      </div>
                      <div className="w-1/2 lg:w-1/4 text-center">
                        <a
                          href="product-gridview.html"
                          className="block p-2 bg-secondary m-2"
                        >
                          <img
                            className="inline-block"
                            src="../images/peter-millar-white.png"
                            alt=""
                            title=""
                          />
                        </a>
                      </div>
                      <div className="w-1/2 lg:w-1/4 text-center">
                        <a
                          href="product-gridview.html"
                          className="block p-2 bg-secondary m-2"
                        >
                          <img
                            className="inline-block"
                            src="../images/adidas-white.png"
                            alt=""
                            title=""
                          />
                        </a>
                      </div>
                      <div className="w-1/2 lg:w-1/4 text-center">
                        <a
                          href="product-gridview.html"
                          className="block p-2 bg-secondary m-2"
                        >
                          <img
                            className="inline-block"
                            src="../images/peter-millar-white.png"
                            alt=""
                            title=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="border-t first:border-t-0 py-5">
                      <div className="flex flex-wrap gap-y-2">
                        <ul className="w-full lg:w-1/3">
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              ADIDAS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              BAUER{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              CALLAWAY GOLF{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FAIRWAY & GREENE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FOOTJOY{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              GALVIN GREEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              HELLY HANSEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JOHNNIE-O{' '}
                            </a>{' '}
                          </li>
                        </ul>
                        <ul className="w-full lg:w-1/3">
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              KNACK{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              LACOSTE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              LINKSOUL{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              PATAGONIA{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              PETER MILLAR{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              SOUTHERN TIDE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              STATE BAGS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              STIO{' '}
                            </a>{' '}
                          </li>
                        </ul>
                        <ul className="w-full lg:w-1/3">
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              TAYLORMADE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              TITLEIST{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              UNDER ARMOUR{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              VINEYARD VINES{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              YETI{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              ZERO RESTRICTION{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Men</div>
                  </button>
                  <div className="">
                    <a href="product-gridview.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100" x-cloak="true">
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-full lg:w-1/3">
                        <div className="text-base mb-2 font-semibold text-anchor">
                          BY CATEGORY
                        </div>
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              SHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              POLO{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JACKETS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              QUARTER ZIPS & PULLOVERS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              T-SHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              HOODIES & SWEETSHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              VESTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              BOTTOMS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JERSEY{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <div className="text-base mb-2 font-semibold text-anchor">
                          BY BRAND
                        </div>
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              ADIDAS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              BAUER{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              CALLAWAY GOLF{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FAIRWAY & GREENE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FOOTJOY{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              GALVIN GREEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              HELLY HANSEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JOHNNIE-O{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              PATAGONIA{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              PETER MILLAR{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4">
                      <div className="w-full lg:w-1/3">
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              All Men's Apparel & Footwear{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              All Brands{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Women</div>
                  </button>
                  <div className="">
                    <a href="product-gridview.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100" x-cloak="true">
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-full lg:w-1/3">
                        <div className="text-base mb-2 font-semibold text-anchor">
                          BY CATEGORY
                        </div>
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              SHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              POLO{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JACKETS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              QUARTER ZIPS & PULLOVERS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              T-SHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              HOODIES & SWEETSHIRTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              VESTS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              BOTTOMS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JERSEY{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <div className="text-base mb-2 font-semibold text-anchor">
                          BY BRAND
                        </div>
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              ADIDAS{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              BAUER{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              CALLAWAY GOLF{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FAIRWAY & GREENE{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              FOOTJOY{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              GALVIN GREEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              HELLY HANSEN{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              JOHNNIE-O{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              PATAGONIA{' '}
                            </a>{' '}
                          </li>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              VINEYARD VINES{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4">
                      <div className="w-full lg:w-1/3">
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              All Women's Apparel & Footwear{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <ul>
                          <li className="flex items-center">
                            <a
                              href="product-gridview.html"
                              className="text-anchor hover:text-anchor-hover"
                            >
                              {' '}
                              All Brands{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-2 pr-2">
                  <button
                    className="flex items-center grow group"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-8 h-8 shrink-0 fill-current text-anchor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                    </svg>
                    <div className="text-anchor">Golf</div>
                  </button>
                  <div className="">
                    <a href="product-gridview.html" className="text-xs">
                      Show All
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100" x-cloak="true">
                  <div className="border-t first:border-t-0 py-5 px-6">
                    <ul
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-gridview.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          <span className="block p-2 bg-secondary m-2 mb-3">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-gear.png"
                              alt=""
                            />
                          </span>{' '}
                          <span className="block pt-2 border-t border-t-gray-300">
                            CUSTOM GOLF GEAR
                          </span>{' '}
                        </a>
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-gridview.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          <span className="block p-2 bg-secondary m-2 mb-3">
                            <img
                              src="https://www.corporategear.com/images/customizable-golf-bags.png"
                              alt=""
                            />
                          </span>{' '}
                          <span className="block pt-2 border-t border-t-gray-300">
                            CUSTOM GOLF BAGS
                          </span>{' '}
                        </a>
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-gridview.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          <span className="block p-2 bg-secondary m-2 mb-3">
                            <img
                              src="https://www.corporategear.com/images/custom-golf balls.png"
                              alt=""
                            />
                          </span>{' '}
                          <span className="block pt-2 border-t border-t-gray-300">
                            CUSTOM GOLF BALLS
                          </span>{' '}
                        </a>
                      </li>
                      <li className="w-full lg:w-1/4 flex justify-center text-center">
                        <a
                          href="product-gridview.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          {' '}
                          <span className="block p-2 bg-secondary m-2 mb-3">
                            <img
                              src="https://www.corporategear.com/images/custom-golf-accessories.png"
                              alt=""
                            />
                          </span>{' '}
                          <span className="block pt-2 border-t border-t-gray-300">
                            GOLF ACCESSORIES
                          </span>{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-gridview.html" className="">
                      Consultation
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-gridview.html" className="">
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-sm border-b border-gray-300">
                <div className="flex items-center justify-between py-3 px-2 pl-8">
                  <div className="">
                    <a href="product-gridview.html" className="">
                      Sale
                    </a>
                  </div>
                </div>
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
          <div
            // x-transition:enter="transition-opacity ease-linear duration-300"
            // x-transition:enter-start="opacity-0"
            // x-transition:enter-end="opacity-100"
            // x-transition:leave="transition-opacity ease-linear duration-300"
            // x-transition:leave-start="opacity-100"
            // x-transition:leave-end="opacity-0"
            // x-description="Off-canvas menu backdrop, show/hide based on off-canvas menu state."
            className="fixed inset-0 bg-black bg-opacity-25"
          ></div>
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              // x-description="Off-canvas menu, show/hide based on off-canvas menu state."
              className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <div className="px-4 pt-5 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => toggleSideMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    x-description="Heroicon name: outline/x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Links --> */}
              <div className="my-6 px-0 border-t border-gray-300">
                {/* <!-- Start --> */}
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-gray-800 font-medium">Brands</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <ul
                        role="list"
                        aria-labelledby="desktop-featured-heading-1"
                        className="flex flex-wrap gap-y-2"
                      >
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Casual{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Outdoor{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Artwork Tees{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Pants{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Accessories{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Basic Tees{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Casual{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Outdoor{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Artwork Tees{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Pants{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Accessories{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Basic Tees{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Casual{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Outdoor{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Artwork Tees{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Pants{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Accessories{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Boxers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Basic Tees{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-gray-800 font-medium">Men</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <ul
                        role="list"
                        aria-labelledby="desktop-featured-heading-1"
                        className="flex flex-wrap gap-y-2"
                      >
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Polo{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Quarter Zips & Pullovers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Jackets{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Hoodies & Sweetshirts{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Vests{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            T-Shirts{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Shirts{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-2 pr-2">
                    <button
                      className="flex items-center grow group"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                      </svg>
                      <div className="text-gray-800 font-medium">Women</div>
                    </button>
                    <div className="">
                      <a href="product-listing.html" className="text-xs">
                        Show All
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-100" x-cloak="true">
                    <div className="border-t first:border-t-0 py-5 px-6">
                      <ul
                        role="list"
                        aria-labelledby="desktop-featured-heading-1"
                        className="flex flex-wrap gap-y-2"
                      >
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Polo{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Quarter Zips & Pullovers{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Jackets{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Hoodies & Sweetshirts{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Vests{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            T-Shirts{' '}
                          </a>{' '}
                        </li>
                        <li className="w-full lg:w-1/3 flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>{' '}
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            {' '}
                            Shirts{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        Accessories
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        Contact / Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b border-gray-300">
                  <div className="flex items-center justify-between py-3 px-2 pl-8">
                    <div className="">
                      <a href="product-listing.html" className="">
                        Catalogs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center flex-1">
          {/* <!-- Mega menus --> */}
          <div
            className="ml-6"
            x-data="Components.popoverGroup()"
            x-init="init()"
          >
            <div className="h-full flex justify-center space-x-6 relative">
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                  >
                    <span className="text-white">Brands</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'"
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                >
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div className="relative bg-white z-50">
                    <div className="max-w-7xl mx-auto">
                      {/* <div className="flex flex-wrap border-t first:border-t-0 py-4 px-5 border">
                    <div className="w-full lg:w-1/2 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/adidas.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                    <div className="w-full lg:w-1/2 text-center">
                      <a
                        href="product-listing.html"
                        className="text-anchor hover:text-anchor-hover"
                      >
                        <img
                          className="inline-block"
                          src="../images/adidas.png"
                          alt=""
                          title=""
                        />
                      </a>
                    </div>
                  </div> */}
                      {/* <div className="border-t first:border-t-0 py-5 px-5">
                    <div className="flex flex-wrap gap-y-2">
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Adidas
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            BAUER
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Callaway Golf
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Fairway & Greene
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Footjoy
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Galvin Green
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Helly Hansen
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Johnnie-O
                          </a>
                        </li>
                      </ul>
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            KNACK
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Lacoste
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Linksoul
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Patagonia
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Peter Millar
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Southern Tide
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            STATE Bags
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            STIO
                          </a>
                        </li>
                      </ul>
                      <ul className="w-full lg:w-1/3">
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            TaylorMade
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Titleist
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Under Armour
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Vineyard Vines
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            YETI
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="material-icons-outlined text-lg">
                            chevron_right
                          </span>
                          <a
                            href="product-listing.html"
                            className="text-anchor hover:text-anchor-hover"
                          >
                            
                            Zero Restriction
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    // x-state:on="Item active"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                  >
                    <span className="text-white">Men</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'Men' mega menu, show/hide based on flyout menu state."
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                >
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-white z-50">
                    <div className="max-w-7xl mx-auto">
                      {/* <div className="border-t first:border-t-0 py-5 px-5">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Polo
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Quarter Zips & Pullovers
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Jackets
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Hoodies & Sweetshirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Vests
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          T-Shirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Shirts
                        </a>
                      </li>
                    </ul>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex"
                x-data="Components.popover({ open: false, focus: false })"
                x-init="init()"
              >
                <div className="relative flex">
                  <button
                    type="button"
                    // x-state:on="Item active"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover"
                  >
                    <span className="text-white">Women</span>
                  </button>
                </div>
                <div
                  // x-transition:enter="transition ease-out duration-200"
                  // x-transition:enter-start="opacity-0"
                  // x-transition:enter-end="opacity-100"
                  // x-transition:leave="transition ease-in duration-150"
                  // x-transition:leave-start="opacity-100"
                  // x-transition:leave-end="opacity-0"
                  x-description="'Men' mega menu, show/hide based on flyout menu state."
                  className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
                  x-ref="panel"
                >
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-white z-50">
                    <div className="max-w-7xl mx-auto">
                      {/* <div className="border-t first:border-t-0 py-5 px-5">
                    <ul
                      role="list"
                      aria-labelledby="desktop-featured-heading-1"
                      className="flex flex-wrap gap-y-2"
                    >
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Polo
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Quarter Zips & Pullovers
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Jackets
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Hoodies & Sweetshirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Vests
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          T-Shirts
                        </a>
                      </li>
                      <li className="w-full lg:w-1/2 flex items-center">
                        <span className="material-icons-outlined text-lg">
                          chevron_right
                        </span>
                        <a
                          href="product-listing.html"
                          className="text-anchor hover:text-anchor-hover"
                        >
                          
                          Shirts
                        </a>
                      </li>
                    </ul>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                  >
                    <span className="text-white">Accessories</span>
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                  >
                    <span className="text-white">Contact / Quote</span>
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <a
                    href="product-listing.html"
                    // x-state:on="Item active"
                    // x-state:off="Item inactive"
                    className="relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover hover:border-b-primary"
                  >
                    <span className="text-white">Catalogs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default MenuItems;

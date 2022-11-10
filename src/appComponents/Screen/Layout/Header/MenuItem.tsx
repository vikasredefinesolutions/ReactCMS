import React from 'react';
import { _Store } from '../constants/store.constant';
import { useTypedSelector } from '../hooks';
const MenuItem: React.FC<{ screen: 'MOBILE' | 'DESKTOP' }> = ({ screen }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type2) {
    if (screen === 'DESKTOP') {
      return (
        <div className="flex">
          <div className="relative flex">
            <button
              type="button"
              className="relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold  xl:tracking-widest"
            >
              {' '}
              <span className="uppercase text-white">Brands</span>
            </button>
          </div>
          {/* --------------------------MENU--------------------------- */}
          {/* <div className="absolute top-full left-0 right-0 text-gray-500 shadow sm:text-md font-medium">
        <div className="relative bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap border-t first:border-t-0 py-5 px-2 pt-8">
              <div className="w-full lg:w-1/4 text-center">
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
              <div className="w-full lg:w-1/4 text-center">
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
              <div className="w-full lg:w-1/4 text-center">
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
              <div className="w-full lg:w-1/4 text-center">
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
            <div className="border-t first:border-t-0 py-5 px-5">
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
      </div> */}
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return <></>;
    }
  }
  if (storeLayout === _Store.type1) {
    if (screen === 'DESKTOP') {
      return <></>;
    }
    if (screen === 'MOBILE') {
      return <></>;
    }
  }
  return <></>;
};

export default MenuItem;

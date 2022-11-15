import React, { useState } from 'react';
import Link from 'next/link';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';

interface _props {
  menuTitle: string;
  menuItems: string;
  menuUrl: string;
}

const Custom: React.FC<_props> = ({ menuItems, menuTitle, menuUrl }) => {
  const { layout: storeLayout, view } = useTypedSelector(
    (state) => state.store,
  );
  const [focus, setFocus] = useState(false);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);
  const sideMenu = useTypedSelector((state) => state.modals.sideMenu);

  if (storeLayout === _Store.type1) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-2 pr-2">
            <button
              className="flex items-center grow group"
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                  sideMenu === 'OPEN' ? `text-anchor-hover rotate-180` : ''
                }`}
                viewBox="0 0 32 32"
              >
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
              </svg>
              <div className="text-anchor">{menuTitle}</div>
            </button>
            <div className="">
              <Link href={`/${menuUrl}`} className="text-xs">
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className="bg-gray-100">
              <div
                className="border-t first:border-t-0 py-5 px-6"
                dangerouslySetInnerHTML={{ __html: menuItems }}
              />
            </div>
          )}
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <Link href={`/${menuUrl}`} className="flex">
          <>
            <div className="relative flex">
              <button
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                type="button"
                className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                  sideMenu === 'OPEN'
                    ? 'border-b-primary text-primary-hover'
                    : 'border-transparent text-white hover:text-primary-hover'
                }`}
              >
                <span className="uppercase text-primary">{menuTitle}</span>
              </button>
            </div>
            {focus && (
              <div
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                // x-transition:enter="transition ease-out duration-200"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition ease-in duration-150"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
              >
                <div className="absolute inset-0 top-1/2 bg-white shadow"></div>
                <div className="relative bg-gray-100 z-50">
                  <div className="max-w-7xl mx-auto">
                    <div
                      className="border-t first:border-t-0 py-5 px-5"
                      dangerouslySetInnerHTML={{ __html: menuItems }}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-2 pr-2">
            <button
              className="flex items-center grow group"
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                  sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
                }`}
                viewBox="0 0 32 32"
              >
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
              </svg>
              <div className="text-anchor">{menuTitle}</div>
            </button>
            <div className="">
              <Link href={`/${menuUrl}`} className="text-xs">
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className="bg-gray-100">
              <div
                className="border-t first:border-t-0 py-5 px-6"
                dangerouslySetInnerHTML={{ __html: menuItems }}
              />
            </div>
          )}
        </div>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <Link href={`/${menuUrl}`} className="flex">
          <>
            <div className="relative flex">
              <button
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                type="button"
                className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold  xl:tracking-widest ${
                  sideMenu === 'OPEN'
                    ? 'text-primary-hover'
                    : 'text-white hover:text-primary-hover'
                }`}
              >
                <span className="uppercase text-white">{menuTitle}</span>
              </button>
            </div>
            {focus && (
              <div
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                // x-transition:enter="transition ease-out duration-200"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition ease-in duration-150"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                className="absolute top-full left-0 right-0 text-gray-500 shadow sm:text-md font-medium"
              >
                {/* <!-- <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div> --> */}
                <div className="relative bg-gray-100 z-50">
                  <div className="max-w-4xl mx-auto">
                    <div
                      className="border-t first:border-t-0 py-5 px-5"
                      dangerouslySetInnerHTML={{ __html: menuItems }}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-2 pr-2">
            <button
              className="flex items-center grow group"
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                  sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
                }`}
                viewBox="0 0 32 32"
              >
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
              </svg>
              <div className="text-anchor">{menuTitle}</div>
            </button>
            <div className="">
              <Link href={`/${menuUrl}`} className="text-xs">
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className="bg-gray-100">
              <div
                className="border-t first:border-t-0 py-5 px-6"
                dangerouslySetInnerHTML={{ __html: menuItems }}
              ></div>
            </div>
          )}
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <Link href={`/${menuUrl}`} className="flex">
          <>
            <div className="relative flex">
              <button
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                type="button"
                className="relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5"
              >
                <span className="">{menuTitle}</span>
              </button>
            </div>
            {focus && (
              <div
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                // x-transition:enter="transition ease-out duration-200"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition ease-in duration-150"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                // className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
              >
                <div className="absolute inset-0 top-1/2 bg-white shadow"></div>
                <div className="relative bg-gray-200 z-50">
                  <div className="max-w-7xl mx-auto">
                    <div
                      className="border-t first:border-t-0 py-5 px-5"
                      dangerouslySetInnerHTML={{ __html: menuItems }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </>
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (view === 'MOBILE') {
      return (
        <div className="text-sm border-b border-gray-300">
          <div className="flex items-center justify-between py-2 pr-2">
            <button
              className="flex items-center grow group"
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ${
                  sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
                }`}
                viewBox="0 0 32 32"
              >
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
              </svg>
              <div className="text-gray-800 font-medium">{menuTitle}</div>
            </button>
            <div className="">
              <Link href="product-listing" className="text-xs">
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className="bg-gray-100" x-show="open" x-cloak>
              <div
                className="border-t first:border-t-0 py-5 px-6"
                dangerouslySetInnerHTML={{ __html: menuItems }}
              ></div>
            </div>
          )}
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <Link href={`/${menuUrl}`} className="flex">
          <>
            <div className="relative flex">
              <button
                type="button"
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className={`relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                  focus
                    ? 'border-b-primary text-primary-hover'
                    : 'border-transparent text-white hover:text-primary-hover'
                }`}
              >
                <span className="text-white">{menuTitle}</span>
              </button>
            </div>
            {focus && (
              <div
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                // x-transition:enter="transition ease-out duration-200"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition ease-in duration-150"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                className="absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm"
              >
                <div className="absolute inset-0 top-1/2 bg-white shadow"></div>
                <div className="relative bg-white z-50">
                  <div className="max-w-7xl mx-auto">
                    <div
                      className="border-t first:border-t-0 py-5 px-5"
                      dangerouslySetInnerHTML={{ __html: menuItems }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </>
        </Link>
      );
    }
  }

  return <></>;
};

export default Custom;
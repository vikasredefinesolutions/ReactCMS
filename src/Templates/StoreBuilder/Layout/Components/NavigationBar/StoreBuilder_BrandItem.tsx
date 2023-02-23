import { _Brands } from '@type/APIs/header.res';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { __constant } from 'page.config';
import React, { useState } from 'react';
import StoreBuilder_BrandImage from './StoreBuilder_BrandImage';
import StoreBuilder_SubMenuItem from './StoreBuilder_SubMenuItem';

interface _props {
  url: string;
  title: string;
  content: _Brands[] | null;
  view: 'DESKTOP' | 'MOBILE';
}

const StoreBuilder_BrandItem: React.FC<_props> = ({
  view,
  url,
  title,
  content,
}) => {
  const { toggleSideMenu } = useActions();

  // -------------------------------------------------------------------
  const sideMenu = useTypedSelector((state) => state.modals.sideMenu);

  // -------------------------------------------------------------------
  const [focus, setFocus] = useState<boolean>(false);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  if (view === 'MOBILE') {
    return (
      <div className='text-sm border-b border-gray-300'>
        <div className='flex items-center justify-between py-2 pr-2'>
          <button className='flex items-center grow group'>
            <svg
              className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
              }`}
              onClick={() => setShowAllItems((show) => !show)}
              viewBox='0 0 32 32'
            >
              <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
            </svg>
            <div className='text-anchor'>{title}</div>
          </button>
          <div className='' onClick={() => toggleSideMenu('CLOSE')}>
            <Link href={url} className='text-xs'>
              Show All
            </Link>
          </div>
        </div>
        {showAllItems && (
          <div className='bg-gray-100' x-show='open' x-cloak>
            <div className='border-t first:border-t-0 py-5 px-6'>
              <ul
                role='list'
                aria-labelledby='desktop-featured-heading-1'
                className='flex flex-wrap gap-y-2'
              >
                {content?.map((brand) => {
                  return (
                    <StoreBuilder_SubMenuItem
                      view={view}
                      key={brand.id}
                      itemLabel={brand.brandName}
                      itemUrl={brand.seName}
                      type={'BRAND'}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (view === 'DESKTOP') {
    return (
      <Link href={url} className='flex'>
        <>
          <div className='relative flex'>
            <button
              type='button'
              onMouseOver={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                focus
                  ? `border-b-primary text-primary-hover`
                  : `border-transparent text-white hover:text-primary-hover`
              }`}
            >
              <span className='uppercase text-primary'>{title}</span>
              {/* <!-- <svg className="w-8 h-8 shrink-0 fill-current text-anchor-hover group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                      <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                  </svg> -->  */}
            </button>
          </div>
          {focus && (
            <div
              onMouseOver={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              //     x-transition:enter="transition ease-out duration-200"
              //     x-transition:enter-start="opacity-0"
              //     x-transition:enter-end="opacity-100"
              //     x-transition:leave="transition ease-in duration-150"
              //     x-transition:leave-start="opacity-100"
              //     x-transition:leave-end="opacity-0"
              className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm'
            >
              <div className='relative bg-gray-100 z-50'>
                <div className='max-w-7xl mx-auto'>
                  {content && content.length > 0 && (
                    <div className='flex flex-wrap border-t first:border-t-0 py-5 px-5 border pt-8'>
                      {content?.map((brand, index) => {
                        if (
                          index > __constant._header.imagesToShowInBrandDropdown
                        ) {
                          return <></>;
                        }
                        if (brand.brandColorImageUrl) {
                          return (
                            <StoreBuilder_BrandImage
                              key={brand.id}
                              url={brand.seName}
                              view={view}
                              alt={brand.brandName}
                              src={brand.brandColorImageUrl}
                            />
                          );
                        }
                        return <></>;
                      })}
                    </div>
                  )}
                  <div className='border-t first:border-t-0 py-5 px-5'>
                    <div className='flex flex-wrap gap-y-2'>
                      <ul className='w-full lg:w-1/3'>
                        {content?.map((brand, index) => {
                          if (index >= content.length / 2) return <></>;
                          return (
                            <StoreBuilder_SubMenuItem
                              view={view}
                              key={brand.id}
                              itemLabel={brand.brandName}
                              itemUrl={brand.seName}
                              type={'BRAND'}
                            />
                          );
                        })}
                      </ul>
                      <ul className='w-full lg:w-1/3'>
                        {content?.map((brand, index) => {
                          if (index < content.length / 2) return <></>;
                          return (
                            <StoreBuilder_SubMenuItem
                              view={view}
                              key={brand.id}
                              itemLabel={brand.brandName}
                              itemUrl={brand.seName}
                              type={'BRAND'}
                            />
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </Link>
    );
  }
  return <></>;
};

export default StoreBuilder_BrandItem;

import { _Brands } from '@type/APIs/header.res';
import { capitalizeFirstLetter } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store, __constant } from 'page.config';
import React, { useState } from 'react';
import BrandImage from './Ecommerce_BrandImage';
import SubMenuItem from './Ecommerce_SubMenuItem';

interface _props {
  url: string;
  title: string;
  content: _Brands[] | null;
  storeCode: string;
}

const Brand: React.FC<_props> = ({ url, title, content, storeCode }) => {
  const { toggleSideMenu } = useActions();

  // -------------------------------------------------------------------
  const { view } = useTypedSelector((state) => state.store);
  const sideMenu = useTypedSelector((state) => state.modals.sideMenu);

  // -------------------------------------------------------------------
  const [focus, setFocus] = useState<boolean>(false);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    if (view === 'MOBILE') {
      return (
        <div className='text-sm border-b border-gray-300'>
          <div className='flex items-center justify-between py-2 pr-2'>
            <button className='flex items-center grow group' title={title}>
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
                    if (
                      brand.brandColorImageUrl &&
                      __constant._header.brandImage.includes(brand.id)
                    ) {
                      return (
                        <BrandImage
                          key={brand.id}
                          url={
                            brand.brandCollectionUrl
                              ? `${brand.brandCollectionUrl}.html`
                              : `${brand.seName}.html?v=product-list`
                          }
                          alt={capitalizeFirstLetter(brand.brandName)}
                          src={brand.brandColorImageUrl}
                        />
                      );
                    }
                    return <></>;
                  })}

                  {content?.map((brand) => {
                    return (
                      <SubMenuItem
                        storeCode={storeCode}
                        view={view}
                        key={brand.id}
                        itemLabel={capitalizeFirstLetter(brand.brandName)}
                        itemUrl={
                          brand.brandCollectionUrl
                            ? `${brand.brandCollectionUrl}.html`
                            : `${brand.seName}.html?v=product-list`
                        }
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
                title={title}
                type='button'
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className={`relative tracking-[1px] z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                  focus
                    ? `border-b-primary text-primary-hover`
                    : `border-transparent text-white hover:text-primary-hover`
                }`}
              >
                <span className='uppercase text-primary'>{title}</span>
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
                        {content?.map((brand) => {
                          if (
                            brand.brandColorImageUrl &&
                            __constant._header.brandImage.includes(brand.id)
                          ) {
                            // console.log('headerbrand image ', brand);
                            return (
                              <BrandImage
                                key={brand.id}
                                url={
                                  `${brand.brandCollectionUrl}.html` ||
                                  `${brand.seName}.html?v=product-list`
                                }
                                alt={capitalizeFirstLetter(brand.brandName)}
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
                            if (index > content.length / 3 + 1) return <></>;
                            return (
                              <SubMenuItem
                                storeCode={storeCode}
                                view={view}
                                key={brand.id}
                                itemLabel={capitalizeFirstLetter(
                                  brand.brandName,
                                )}
                                itemUrl={
                                  brand.brandCollectionUrl
                                    ? `${brand.brandCollectionUrl}.html`
                                    : `${brand.seName}.html?v=product-list`
                                }
                                type={'BRAND'}
                              />
                            );
                          })}
                        </ul>
                        <ul className='w-full lg:w-1/3'>
                          {content?.map((brand, index) => {
                            if (
                              index >= content.length / 3 + 1 &&
                              index <= (content.length / 3) * 2 + 1
                            )
                              return (
                                <SubMenuItem
                                  storeCode={storeCode}
                                  view={view}
                                  key={brand.id}
                                  itemLabel={capitalizeFirstLetter(
                                    brand.brandName,
                                  )}
                                  itemUrl={
                                    brand.brandCollectionUrl
                                      ? `${brand.brandCollectionUrl}.html`
                                      : `${brand.seName}.html?v=product-list`
                                  }
                                  type={'BRAND'}
                                />
                              );
                          })}
                        </ul>
                        <ul className='w-full lg:w-1/3'>
                          {content?.map((brand, index) => {
                            if (index > (content.length / 3) * 2 + 1)
                              return (
                                <SubMenuItem
                                  storeCode={storeCode}
                                  view={view}
                                  key={brand.id}
                                  itemLabel={capitalizeFirstLetter(
                                    brand.brandName,
                                  )}
                                  itemUrl={
                                    brand.brandCollectionUrl
                                      ? `${brand.brandCollectionUrl}.html`
                                      : `${brand.seName}.html?v=product-list`
                                  }
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
  }

  if (storeCode === _Store.type2) {
    if (view === 'MOBILE') {
      return (
        <div className='text-sm border-b border-gray-300'>
          <div className='flex items-center justify-between py-2 pr-2'>
            <button
              className='flex items-center grow group'
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                  sideMenu === 'OPEN' ? `text-anchor-hover rotate-180` : ''
                }`}
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
            <div className='bg-gray-100'>
              <div className='border-t first:border-t-0 py-5 px-4'>
                {content?.map((brand) => {
                  if (
                    brand.brandColorImageUrl &&
                    __constant._header.brandImage.includes(brand.id)
                  ) {
                    return (
                      <BrandImage
                        key={brand.id}
                        url={
                          brand.brandCollectionUrl
                            ? `${brand.brandCollectionUrl}.html`
                            : `${brand.seName}.html?v=product-list`
                        }
                        alt={capitalizeFirstLetter(brand.brandName)}
                        src={brand.brandColorImageUrl}
                      />
                    );
                  }
                  return <></>;
                })}
                <div className='border-t first:border-t-0 py-5'>
                  <div className='flex flex-wrap gap-y-2'>
                    <ul className='w-full lg:w-1/3'>
                      {content?.map((brand) => {
                        return (
                          <SubMenuItem
                            key={brand.id}
                            storeCode={storeCode}
                            view={view}
                            itemLabel={capitalizeFirstLetter(brand.brandName)}
                            itemUrl={
                              `${brand.brandCollectionUrl}.html` ||
                              `${brand.seName}.html?v=product-list`
                            }
                            type={'BRAND'}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
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
            {' '}
            <div className='relative flex'>
              <button
                type='button'
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold  xl:tracking-widest ${
                  sideMenu === 'OPEN'
                    ? 'text-primary-hover'
                    : 'text-white hover:text-primary-hover'
                }`}
              >
                <span className='uppercase text-white'>{title}</span>
                {/* <!-- <svg className="w-8 h-8 shrink-0 fill-current text-anchor-hover group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
            <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
        </svg> -->  */}
              </button>
            </div>
            {focus && (
              <div
                // x-transition:enter="transition ease-out duration-200"
                // x-transition:enter-start="opacity-0"
                // x-transition:enter-end="opacity-100"
                // x-transition:leave="transition ease-in duration-150"
                // x-transition:leave-start="opacity-100"
                // x-transition:leave-end="opacity-0"
                className='absolute top-full left-0 right-0 text-gray-500 shadow sm:text-md font-medium'
              >
                <div className='relative bg-gray-100'>
                  <div className='max-w-4xl mx-auto'>
                    <div className='flex flex-wrap border-t first:border-t-0 py-5 px-2 pt-8'>
                      {content?.map((brand, index) => {
                        if (brand.brandColorImageUrl) {
                          return (
                            <BrandImage
                              key={index}
                              url={
                                brand.brandCollectionUrl
                                  ? `${brand.brandCollectionUrl}.html`
                                  : `${brand.seName}.html?v=product-list`
                              }
                              alt={capitalizeFirstLetter(brand.brandName)}
                              src={brand.brandColorImageUrl}
                            />
                          );
                        }
                        return <></>;
                      })}
                    </div>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <div className='flex flex-wrap gap-y-2'>
                        <ul className='w-full lg:w-1/3'>
                          {content?.map((brand, index) => {
                            return (
                              <SubMenuItem
                                key={index}
                                storeCode={storeCode}
                                view={view}
                                itemLabel={capitalizeFirstLetter(
                                  brand.brandName,
                                )}
                                itemUrl={
                                  brand.brandCollectionUrl
                                    ? `${brand.brandCollectionUrl}.html`
                                    : `${brand.seName}.html?v=product-list`
                                }
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
  }

  if (storeCode === _Store.type3) {
    if (view === 'MOBILE') {
      return (
        <div className='text-sm border-b border-gray-300'>
          <div className='flex items-center justify-between py-2 pr-2'>
            <button
              className='flex items-center grow group'
              onClick={() => setShowAllItems((show) => !show)}
            >
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-anchor ${
                  sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
                }`}
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
            <div className='bg-gray-100'>
              <div className='border-t first:border-t-0 py-5 px-4'>
                <div className='flex flex-wrap border-t first:border-t-0 py-3'>
                  {content?.map((brand) => {
                    if (
                      brand.brandColorImageUrl &&
                      __constant._header.brandImage.includes(brand.id)
                    ) {
                      return (
                        <BrandImage
                          key={brand.id}
                          url={
                            brand.brandCollectionUrl
                              ? `${brand.brandCollectionUrl}.html`
                              : `${brand.seName}.html?v=product-list`
                          }
                          alt={capitalizeFirstLetter(brand.brandName)}
                          src={brand.brandColorImageUrl}
                        />
                      );
                    }
                    return <></>;
                  })}
                </div>
                <div className='border-t first:border-t-0 py-5'>
                  <div className='flex flex-wrap gap-y-2'>
                    <ul className='w-full lg:w-1/3'>
                      {content?.map((brand) => {
                        return (
                          <SubMenuItem
                            key={brand.id}
                            storeCode={storeCode}
                            view={view}
                            itemLabel={capitalizeFirstLetter(brand.brandName)}
                            itemUrl={
                              `${brand.brandCollectionUrl}.html` ||
                              `${brand.seName}.html?v=product-list`
                            }
                            type={'BRAND'}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
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
                className='relative z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5'
              >
                <span className=''>{title}</span>
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
                <div className='relative bg-gray-200 z-50'>
                  <div className='max-w-7xl mx-auto p-4'>
                    <div className='flex flex-wrap -mx-3 gap-y-6'>
                      {content?.map((brand) => {
                        if (brand.brandColorImageUrl) {
                          return (
                            <BrandImage
                              key={brand.id}
                              url={
                                brand.brandCollectionUrl
                                  ? `${brand.brandCollectionUrl}.html`
                                  : `${brand.seName}.html?v=product-list`
                              }
                              alt={capitalizeFirstLetter(brand.brandName)}
                              src={brand.brandColorImageUrl}
                            />
                          );
                        }
                        return <></>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </Link>
      );
    }
  }

  if (storeCode === _Store.type4) {
    if (view === 'MOBILE') {
      return (
        <div className='text-sm border-b border-gray-300'>
          <div className='flex items-center justify-between py-2 pr-2'>
            <button className='flex items-center grow group'>
              <svg
                className={`w-8 h-8 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ${
                  sideMenu === 'OPEN' ? 'text-anchor-hover rotate-180' : ''
                }`}
                viewBox='0 0 32 32'
              >
                <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z'></path>
              </svg>
              <div className='text-gray-800 font-medium'>{title}</div>
            </button>
            <div className='' onClick={() => toggleSideMenu('CLOSE')}>
              <Link href={url} className='text-xs'>
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className='bg-gray-100'>
              <div className='border-t first:border-t-0 py-5 px-6'>
                <ul
                  role='list'
                  aria-labelledby='desktop-featured-heading-1'
                  className='flex flex-wrap gap-y-2'
                >
                  {content?.map((brand) => {
                    if (
                      brand.brandColorImageUrl &&
                      __constant._header.brandImage.includes(brand.id)
                    ) {
                      return (
                        <BrandImage
                          key={brand.id}
                          url={
                            brand.brandCollectionUrl
                              ? `${brand.brandCollectionUrl}.html`
                              : `${brand.seName}.html?v=product-list`
                          }
                          alt={capitalizeFirstLetter(brand.brandName)}
                          src={brand.brandColorImageUrl}
                        />
                      );
                    }
                    return <></>;
                  })}
                  {content?.map((brand) => {
                    return (
                      <SubMenuItem
                        key={brand.id}
                        storeCode={storeCode}
                        view={view}
                        itemLabel={capitalizeFirstLetter(brand.brandName)}
                        itemUrl={
                          `${brand.brandCollectionUrl}.html` ||
                          `${brand.seName}.html?v=product-list`
                        }
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
                className={`relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                  sideMenu === 'OPEN'
                    ? 'border-b-primary text-primary-hover'
                    : 'border-transparent text-white hover:text-primary-hover'
                }`}
              >
                <span className='text-white'>{title}</span>
                {/* <!-- <svg className="w-8 h-8 shrink-0 fill-current text-anchor-hover group-hover:text-gray-500 ml-3" :className="{ 'text-anchor-hover rotate-180': open }" viewBox="0 0 32 32">
                                                                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
                                                                    </svg> -->  */}
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
                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm'
              >
                <div className='relative bg-white z-50'>
                  <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-wrap border-t first:border-t-0 py-4 px-5 border'>
                      {content?.map((brand) => {
                        if (brand.brandColorImageUrl) {
                          return (
                            <BrandImage
                              key={brand.id}
                              url={
                                brand.brandCollectionUrl
                                  ? `${brand.brandCollectionUrl}.html`
                                  : `${brand.seName}.html?v=product-list`
                              }
                              alt={capitalizeFirstLetter(brand.brandName)}
                              src={brand.brandColorImageUrl}
                            />
                          );
                        }
                        return <></>;
                      })}
                    </div>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <div className='flex flex-wrap gap-y-2'>
                        <ul className='w-full lg:w-1/3'>
                          {content?.map((brand) => {
                            return (
                              <SubMenuItem
                                storeCode={storeCode}
                                view={view}
                                key={brand.id}
                                itemLabel={capitalizeFirstLetter(
                                  brand.brandName,
                                )}
                                itemUrl={
                                  brand.brandCollectionUrl
                                    ? `${brand.brandCollectionUrl}.html`
                                    : `${brand.seName}.html?v=product-list`
                                }
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
  }
  return <></>;
};

export default Brand;

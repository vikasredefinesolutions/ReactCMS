import { _MenuCategory } from '@type/APIs/header.res';
import { capitalizeFirstLetter } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import SubMenuItem from './Ecommerce_SubMenuItem';
interface _props {
  title: string;
  url: string;
  content: _MenuCategory[] | null;
}

const Ecommerce_Category: React.FC<_props> = ({ content, title, url }) => {
  const { layout: storeCode, view } = useTypedSelector((state) => state.store);
  const { toggleSideMenu } = useActions();
  const sideMenu = useTypedSelector((state) => state.modals.sideMenu);
  const [focus, setFocus] = useState(false);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  if (content === null) {
    return <></>;
  }

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    if (view === 'MOBILE') {
      return (
        <div className='text-sm border-b border-gray-300'>
          <div className='flex items-center justify-between py-2 pr-2'>
            <button
              title={title}
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
              <Link href={`${url}`} className='text-xs'>
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
                  {content?.map((item, index) => (
                    <SubMenuItem
                      key={index}
                      storeCode={storeCode}
                      view={view}
                      itemLabel={capitalizeFirstLetter(item.categoryName)}
                      itemUrl={`${item.seName}.html?v=product-list`}
                      type={'CATEGORY'}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <Link href={`${url}`} className='flex'>
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
                //   x-transition:enter="transition ease-out duration-200"
                //   x-transition:enter-start="opacity-0"
                //   x-transition:enter-end="opacity-100"
                //   x-transition:leave="transition ease-in duration-150"
                //   x-transition:leave-start="opacity-100"
                //   x-transition:leave-end="opacity-0"
                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm z-50'
              >
                <div className='absolute inset-0 top-1/2 bg-white shadow'></div>
                <div className='relative bg-gray-100 z-50'>
                  <div className='max-w-7xl mx-auto'>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        {content.map((item, index) => (
                          <SubMenuItem
                            key={index}
                            storeCode={storeCode}
                            view={view}
                            itemLabel={capitalizeFirstLetter(item.categoryName)}
                            itemUrl={`${item.seName}.html?v=product-list`}
                            type={'CATEGORY'}
                          />
                        ))}
                      </ul>
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
              onClick={() => setShowAllItems(true)}
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
              <Link href={`${url}`} className='text-xs'>
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className='bg-gray-100'>
              <div className='border-t first:border-t-0 py-5 px-6'>
                <div className='flex flex-wrap gap-4'>
                  <div className='w-full lg:w-1/3'>
                    <div className='text-base mb-2 font-semibold text-anchor'>
                      BY CATEGORY
                    </div>
                    <ul>
                      {content.map((item, index) => (
                        <SubMenuItem
                          key={index}
                          view={view}
                          storeCode={storeCode}
                          itemLabel={capitalizeFirstLetter(item.categoryName)}
                          itemUrl={`${item.seName}.html?v=product-list`}
                          type={'CATEGORY'}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className='w-full lg:w-1/3'>
                    <div className='text-base mb-2 font-semibold text-anchor'>
                      BY BRAND
                    </div>
                    <ul>
                      {content.map((item, index) => (
                        <SubMenuItem
                          key={index}
                          storeCode={storeCode}
                          view={view}
                          itemLabel={capitalizeFirstLetter(item.categoryName)}
                          itemUrl={`${item.seName}.html?v=product-list`}
                          type={'CATEGORY'}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4'>
                  <div className='w-full lg:w-1/3'>
                    <ul>
                      <li className='flex items-center'>
                        <Link
                          href={`${url}`}
                          className='text-anchor hover:text-anchor-hover'
                        >
                          All Men's Apparel & Footwear
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full lg:w-1/3'>
                    <ul>
                      <li className='flex items-center'>
                        <Link
                          href={`${url}`}
                          className='text-anchor hover:text-anchor-hover'
                        >
                          All Brands
                        </Link>
                      </li>
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
        <Link href={`${url}`} className='flex'>
          <>
            <div className='relative flex'>
              <button
                type='button'
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className={`relative tracking-[1px] z-10 flex items-center transition-colors ease-out duration-200 font-semibold  xl:tracking-widest ${
                  focus
                    ? `text-primary-hover`
                    : 'text-white hover:text-primary-hover'
                }`}
              >
                <span className='uppercase text-white'>{title}</span>
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
                className='absolute top-full left-0 right-0 text-gray-500 shadow sm:text-md font-medium z-50'
              >
                {/* <!-- <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div> --> */}
                <div className='relative bg-gray-100'>
                  <div className='max-w-4xl mx-auto'>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <div className='flex flex-wrap gap-4'>
                        <div className='w-full lg:w-1/3'>
                          <div className='text-base mb-4 font-semibold text-anchor'>
                            BY CATEGORY
                          </div>
                          <ul>
                            {content.map((item, index) => (
                              <SubMenuItem
                                storeCode={storeCode}
                                view={view}
                                key={index}
                                itemLabel={capitalizeFirstLetter(
                                  item.categoryName,
                                )}
                                itemUrl={`${item.seName}.html?v=product-list`}
                                type={'CATEGORY'}
                              />
                            ))}
                          </ul>
                        </div>
                        <div className='w-full lg:w-1/3'>
                          <div className='text-base mb-4 font-semibold text-anchor'>
                            BY BRAND
                          </div>
                          <ul>
                            {content.map((item, index) => (
                              <SubMenuItem
                                key={index}
                                storeCode={storeCode}
                                view={view}
                                itemLabel={capitalizeFirstLetter(
                                  item.categoryName,
                                )}
                                itemUrl={`${item.seName}.html?v=product-list`}
                                type={'CATEGORY'}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className='flex flex-wrap gap-4'>
                        <div className='w-full lg:w-1/3 border-t border-t-gray-300 pt-2 mt-2'>
                          <ul>
                            <li className='flex items-center'>
                              <Link
                                href={`${url}`}
                                className='text-anchor hover:text-anchor-hover'
                              >
                                All Men's Apparel & Footwear
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className='w-full lg:w-1/3 border-t border-t-gray-300 pt-2 mt-2'>
                          <ul>
                            <li className='flex items-center'>
                              <Link
                                href={`${url}`}
                                className='text-anchor hover:text-anchor-hover'
                              >
                                All Brands
                              </Link>
                            </li>
                          </ul>
                        </div>
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
              <Link href={`${url}`} className='text-xs'>
                Show All
              </Link>
            </div>
          </div>
          {showAllItems && (
            <div className='bg-gray-100'>
              <div className='border-t first:border-t-0 py-5 px-6'>
                <div className='flex flex-wrap gap-4'>
                  <div className='w-full lg:w-1/3'>
                    <div className='text-base mb-2 font-semibold text-anchor'>
                      BY CATEGORY
                    </div>
                    <ul>
                      {content.map((item, index) => (
                        <SubMenuItem
                          key={index}
                          storeCode={storeCode}
                          view={view}
                          itemLabel={capitalizeFirstLetter(item.categoryName)}
                          itemUrl={`${item.seName}.html?v=product-list`}
                          type={'CATEGORY'}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className='w-full lg:w-1/3'>
                    <div className='text-base mb-2 font-semibold text-anchor'>
                      BY BRAND
                    </div>
                    <ul>
                      {content.map((item, index) => (
                        <SubMenuItem
                          key={index}
                          storeCode={storeCode}
                          view={view}
                          itemLabel={capitalizeFirstLetter(item.categoryName)}
                          itemUrl={`${item.seName}.html?v=product-list`}
                          type={'CATEGORY'}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 mt-4 border-t border-t-gray-300 pt-4'>
                  <div className='w-full lg:w-1/3'>
                    <ul>
                      <SubMenuItem
                        storeCode={storeCode}
                        view={view}
                        itemLabel={`All ${title}`}
                        itemUrl={url}
                        type={'CATEGORY'}
                      />
                    </ul>
                  </div>
                  <div className='w-full lg:w-1/3'>
                    <ul>
                      <SubMenuItem
                        storeCode={storeCode}
                        view={view}
                        itemLabel={`All ${title}`}
                        itemUrl={url}
                        type={'CATEGORY'}
                      />
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
        <Link href={`${url}`} className='flex'>
          <>
            <div className='relative flex'>
              <button
                type='button'
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className='relative tracking-[1px] z-10 flex items-center transition-colors ease-out text-base xl:tracking-widest text-anchor py-2.5'
              >
                <span className=''>{title}</span>
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
                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm  z-50'
              >
                <div className='absolute inset-0 top-1/2 bg-white shadow'></div>
                <div className='relative bg-gray-200 z-50'>
                  <div className='max-w-7xl mx-auto'>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <ul role='list' className='flex flex-wrap gap-y-2'>
                        {content.map((item, index) => (
                          <SubMenuItem
                            key={index}
                            storeCode={storeCode}
                            view={view}
                            itemLabel={capitalizeFirstLetter(item.categoryName)}
                            itemUrl={`${item.seName}.html?v=product-list`}
                            type={'CATEGORY'}
                          />
                        ))}
                      </ul>
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
            <button
              className='flex items-center grow group'
              onClick={() => setShowAllItems((show) => !show)}
            >
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
            <div className=''>
              <Link href='product-listing' className='text-xs'>
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
                  {content.map((item, index) => (
                    <SubMenuItem
                      key={index}
                      storeCode={storeCode}
                      view={view}
                      itemLabel={capitalizeFirstLetter(item.categoryName)}
                      itemUrl={`${item.seName}.html?v=product-list`}
                      type={'CATEGORY'}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <Link href={`${url}`} className='flex'>
          <>
            <div className='relative flex'>
              <button
                type='button'
                onMouseOver={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
                className={`relative tracking-[1px] z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
                  focus
                    ? 'border-b-primary text-primary-hover'
                    : 'border-transparent text-white hover:text-primary-hover'
                }`}
              >
                <span className='text-white'>{title}</span>
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
                className='absolute top-full left-0 w-screen max-w-screen-sm text-gray-500 sm:text-sm  z-50'
              >
                <div className='absolute inset-0 top-1/2 bg-white shadow'></div>
                <div className='relative bg-white z-50'>
                  <div className='max-w-7xl mx-auto'>
                    <div className='border-t first:border-t-0 py-5 px-5'>
                      <ul
                        role='list'
                        aria-labelledby='desktop-featured-heading-1'
                        className='flex flex-wrap gap-y-2'
                      >
                        {content.map((item, index) => (
                          <SubMenuItem
                            key={index}
                            storeCode={storeCode}
                            view={view}
                            itemLabel={capitalizeFirstLetter(item.categoryName)}
                            itemUrl={`${item.seName}.html?v=product-list`}
                            type={'CATEGORY'}
                          />
                        ))}
                      </ul>
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

export default Ecommerce_Category;

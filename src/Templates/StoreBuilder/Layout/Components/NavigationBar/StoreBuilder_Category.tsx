import { _MenuCategory } from '@type/APIs/header.res';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import React, { useState } from 'react';
import StoreBuilder_SubMenuItem from './StoreBuilder_SubMenuItem';

interface _props {
  title: string;
  url: string;
  content: _MenuCategory[] | null;
  view: 'DESKTOP' | 'MOBILE';
}

const StoreBuilder_Category: React.FC<_props> = ({
  content,
  title,
  url,
  view,
}) => {
  const { toggleSideMenu } = useActions();
  const sideMenu = useTypedSelector((state) => state.modals.sideMenu);
  const [focus, setFocus] = useState(false);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  if (content === null) {
    return <></>;
  }

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
              <ul
                role='list'
                aria-labelledby='desktop-featured-heading-1'
                className='flex flex-wrap gap-y-2'
              >
                {content?.map((item, index) => (
                  <StoreBuilder_SubMenuItem
                    key={index}
                    view={view}
                    itemLabel={item.categoryName}
                    itemUrl={item.seName}
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
              className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
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
                        <StoreBuilder_SubMenuItem
                          key={index}
                          view={view}
                          itemLabel={item.categoryName}
                          itemUrl={item.seName}
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

  return <div>StoreBuilder_Category</div>;
};

export default StoreBuilder_Category;

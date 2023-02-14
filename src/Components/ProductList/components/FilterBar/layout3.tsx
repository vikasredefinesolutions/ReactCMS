import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
type props = {
  totalCount: number;
  showSortMenu: boolean;
  productView: string;
  sortProductJson: (arg: number) => void;
  sortOpenHandler: (arg: boolean) => void;
  setProductView: (arg: string) => void;
  setShowFilter: (arg: boolean) => void;
};

const FilterBarLayout3: React.FC<props> = ({
  totalCount,
  showSortMenu,
  productView,
  sortProductJson,
  sortOpenHandler,
  setProductView,
  setShowFilter,
}) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  return (
    <div
      className={`flex justify-between items-center space-x-6 text-sm border-b border-slate-200 ${
        storeLayout === _Store.type26 || storeLayout === _Store.type12
          ? 'border-t py-2'
          : 'pb-4'
      }`}
    >
      <div className='lg:flex-1 flex flex-wrap items-center gap-4 leading-none'>
        <div
          className={`flex items-center gap-2 ${
            storeLayout === _Store.type26 || storeLayout === _Store.type12
              ? 'hidden'
              : ''
          }`}
        >
          <button
            className={`inline-block ${
              productView === 'grid'
                ? 'text-anchor-hover text-primary'
                : 'hover:text-primary'
            }`}
            onClick={() => setProductView('grid')}
          >
            <span className='sr-only'>Grid View</span>
            <span className='material-icons-outlined'>grid_view</span>
          </button>

          <button
            className={`inline-block ${
              productView === 'list'
                ? 'text-anchor-hover text-primary'
                : 'hover:text-primary'
            }`}
            onClick={() => setProductView('list')}
          >
            <span className='sr-only'>List View</span>
            <span className='material-icons-outlined'>view_agenda</span>
          </button>
        </div>
        <div className=''>{totalCount} results</div>
      </div>
      <div className='col-start-1 row-start-1 px-2'>
        <div className='flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 z-40'>
          <div className='flex items-center'>
            <div
              x-data='Components.menu({ open: false })'
              x-init='init()'
              className='relative inline-block text-left'
            >
              <div className=''>
                <button
                  type='button'
                  className='flex items-center text-anchor hover:text-anchor-hover'
                  id='menu-button'
                  onClick={() => sortOpenHandler(!showSortMenu)}
                >
                  <span className=''>Sort</span>
                  <span className='material-icons-outlined'>
                    expand_{showSortMenu ? 'less' : 'more'}
                  </span>
                </button>
              </div>
              {showSortMenu && (
                <div className='z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1 text-sm' role='none'>
                    <button
                      onClick={() => sortProductJson(1)}
                      className='font-medium text-gray-900 block px-4 py-2 text-sm'
                      role='menuitem'
                      id='menu-item-0'
                    >
                      Most Popular{' '}
                    </button>
                    <button
                      onClick={() => sortProductJson(4)}
                      className='text-gray-500 block px-4 py-2 text-sm'
                      id='menu-item-1'
                    >
                      Best Rating{' '}
                    </button>
                    <button
                      onClick={() => sortProductJson(5)}
                      className='text-gray-500 block px-4 py-2 text-sm'
                      role='menuitem'
                      id='menu-item-2'
                    >
                      Newest{' '}
                    </button>
                    <button
                      onClick={() => sortProductJson(2)}
                      className='text-gray-500 block px-4 py-2 text-sm'
                      role='menuitem'
                      id='menu-item-3'
                    >
                      Price: Low to High{' '}
                    </button>
                    <button
                      onClick={() => sortProductJson(3)}
                      className='text-gray-500 block px-4 py-2 text-sm'
                      role='menuitem'
                      id='menu-item-4'
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBarLayout3;

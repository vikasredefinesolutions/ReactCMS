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

const FilterBarLayout2: React.FC<props> = ({
  totalCount,
  showSortMenu,
  productView,
  sortProductJson,
  sortOpenHandler,
  setProductView,
  setShowFilter,
}) => {
  return (
    <div className='flex justify-between items-center space-x-6 text-sm bg-[#f5f5f5] py-4 text-[16px]'>
      <div className='lg:flex-1 flex flex-wrap justify-bet items-center px-2 gap-1'>
        Total <span className='font-semibold'>{totalCount} Results</span>
      </div>
      <div className='col-start-1 row-start-1 px-2'>
        <div className='flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 z-40'>
          <div className='flex items-center'>
            <div className='relative inline-block text-left'>
              <div>
                <button
                  onClick={() => sortOpenHandler(!showSortMenu)}
                  type='button'
                  className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                  id='menu-button'
                >
                  Sort
                  <svg
                    className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              {showSortMenu && (
                <div
                  className='z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='menu-button'
                >
                  <div className='py-1' role='none'>
                    <button
                      onClick={() => sortProductJson(1)}
                      className='font-medium text-gray-900 block px-4 py-2 text-sm'
                      role='menuitem'
                      id='menu-item-0'
                    >
                      Most Popular{' '}
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

export default FilterBarLayout2;

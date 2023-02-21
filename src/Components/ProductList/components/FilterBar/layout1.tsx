import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GridViewIcon from '@mui/icons-material/GridView';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import { useTypedSelector } from 'hooks';
import { properties } from 'mock/properties.mock';
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

const Layout1FilterBar: React.FC<props> = ({
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
    <div className='relative z-20 border-t border-b border-gray-200'>
      <div className='relative py-2'>
        <div className='flex-wrap flex text-sm gap-y-2'>
          <div
            className={`flex ${
              properties.result_box.layout !== 'unset'
                ? ' lg:w-1/3 w-1/2'
                : 'lg:w-1/2 w-full'
            } w-1/2 items-center gap-2`}
          >
            {properties.result_box.showGrid && (
              <>
                <a
                  href='compare.html'
                  className='text-gray-600 hover:text-primary relative'
                >
                  <FontAwesomeIcon
                    icon={faRandom}
                    style={{ fontSize: '18px' }}
                  />
                </a>
                {properties.filter_box.layout !== 'flyout' ? (
                  <>
                    <button
                      className={`inline-block w-6 h-6 ${
                        productView === 'grid'
                          ? 'text-primary'
                          : 'text-gray-600'
                      }`}
                      onClick={() => setProductView('grid')}
                    >
                      <GridViewIcon />
                    </button>
                    <button
                      className={`inline-block w-6 h-6 ${
                        productView === 'list'
                          ? 'text-primary'
                          : 'text-gray-600'
                      }`}
                      onClick={() => setProductView('list')}
                    >
                      <ViewAgendaOutlinedIcon />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setShowFilter(true)}
                    className='inline-flex gap-1 items-center text-gray-700'
                  >
                    {' '}
                    <TuneOutlinedIcon /> <span>Filter</span>
                  </button>
                )}
              </>
            )}
            {properties.result_box.layout === 'unset' && (
              <span>{totalCount} Results</span>
            )}
          </div>
          {properties.result_box.layout !== 'unset' && (
            <div className='flex lg:w-1/3 lg:justify-center w-1/2 items-center gap-2'>
              <span>{totalCount} Results</span>
            </div>
          )}

          <div
            className={`col-start-1 lg:w-${
              properties.result_box.layout !== 'unset' ? '1/3' : '1/2'
            } w-full row-start-1`}
          >
            <div className='flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8'>
              <div className='flex items-center'>
                <div className='relative inline-block text-left'>
                  <div
                    className={`flex items-center ${
                      storeLayout === _Store.type1 ? '' : 'gap-3'
                    }`}
                    onClick={() => sortOpenHandler(true)}
                  >
                    <span>
                      Sort {storeLayout === _Store.type1 ? ' ' : ':'}{' '}
                    </span>
                    <button
                      type='button'
                      className={`group inline-flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900 w-44 ${
                        storeLayout === _Store.type1
                          ? 'pr-2'
                          : 'bg-gray-100 px-2'
                      }  py-2`}
                      id='menu-button'
                    >
                      <span
                        className={
                          storeLayout === _Store.type1 ? 'hidden' : 'test'
                        }
                      >
                        Relevance
                      </span>

                      <svg
                        className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                        x-description='Heroicon name: solid/chevron-down'
                        xmlns='http://www.w3.org/2000/svg'
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
                  <div
                    className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    style={{ display: showSortMenu ? 'unset' : 'none' }}
                  >
                    <div className='py-1' x-ref='options'>
                      <button
                        onClick={() => {
                          sortProductJson(1);
                        }}
                        type='button'
                        className='w-full text-left px-4 py-2 text-sm bg-gray-100 font-medium text-gray-900'
                      >
                        <span>Relevance</span>
                      </button>
                      <button
                        onClick={() => {
                          sortProductJson(2);
                        }}
                        type='button'
                        className='w-full text-left px-4 py-2 text-sm text-gray-500'
                      >
                        <span>Price: (Low to High)</span>
                      </button>
                      <button
                        onClick={() => {
                          sortProductJson(3);
                        }}
                        type='button'
                        className='w-full text-left px-4 py-2 text-sm text-gray-500'
                      >
                        <span>Price: (High to Low)</span>
                      </button>
                      {/* <button
                          onClick={() => {
                            sortProductJson(4);
                          }}
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-gray-500"
                        >
                          <span>A - Z</span>
                        </button>
                        <button
                          onClick={() => {
                            sortProductJson(5);
                          }}
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-gray-500"
                        >
                          <span>Z - A</span>
                        </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1FilterBar;

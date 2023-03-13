import { SortingMethod } from '@constants/sorting.constant';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GridViewIcon from '@mui/icons-material/GridView';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import { useTypedSelector } from 'hooks';
import { properties } from 'mock/properties.mock';
import React from 'react';

type props = {
  totalCount: number;
  showSortMenu: boolean;
  productView: string;
  sortingType: number;
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
  sortingType,
}) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const selectedSort = SortingMethod.find(
    (method) => method.type === sortingType,
  )?.name;
  return (
    <div className='relative z-20  bg-gray-100 px-2'>
      <div className='relative py-3'>
        <div className='container mx-auto flex flex-wrap gap-y-6 text-sm'>
          <div
            // className={`flex ${
            //   properties.result_box.layout !== 'unset'
            //     ? ' lg:w-1/3 w-1/2'
            //     : 'lg:w-1/2 w-full'
            // } w-1/2 items-center`}
            className='w-full md:w-1/3 flex justify-center lg:justify-start flex-wrap items-center tracking-[1.4px]'
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
              <span className='text-[13px]'>
                {'Total '}
                <span className='font-semibold text-sm'>
                  {totalCount} Results
                </span>
              </span>
            )}
          </div>
          {properties.result_box.layout !== 'unset' && (
            <div className='flex lg:w-1/3 lg:justify-center w-1/2 items-center gap-2'>
              <span>
                <b>Total :</b> {totalCount} Results
              </span>
            </div>
          )}

          <div
            // className={`col-start-1 lg:w-${
            //   properties.result_box.layout !== 'unset' ? '1/3' : '1/2'
            // } w-full row-start-1`}
            className={'w-full md:w-2/3'}
          >
            <div className='flex justify-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 z-40'>
              <div className='flex items-center'>
                <div className='relative inline-block text-left'>
                  <div
                    className={`flex items-center gap-3`}
                    onClick={() => sortOpenHandler(showSortMenu ? false : true)}
                  >
                    <span className='px-2'>Sort </span>
                    <button
                      // className={`group inline-flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900 w-44 ${
                      //   storeLayout === _Store.type1
                      //     ? 'pr-2'
                      //     : 'bg-gray-100 px-2 py-2'
                      // }`}
                      className='group inline-flex items-center justify-between text-[13px] text-white bg-primary w-[245px] px-2 py-1 tracking-[1.4px] leading-none'
                      id='menu-button'
                    >
                      <>
                        <span>{selectedSort}</span>
                        {!showSortMenu ? (
                          <span className='material-icons-outlined text-lg leading-none'>
                            add_circle
                          </span>
                        ) : (
                          <span className='material-icons-outlined'>
                            remove_circle
                          </span>
                        )}
                      </>
                    </button>
                  </div>
                  <div
                    className='origin-top-right absolute right-0 mt-0 w-[245px] border border-primary bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    style={{ display: showSortMenu ? 'unset' : 'none' }}
                  >
                    <div className='py-1'>
                      {SortingMethod.map((method) => (
                        <button
                          key={method.type}
                          onClick={() => {
                            sortProductJson(method.type);
                          }}
                          type='button'
                          className='w-full text-left px-2 py-1 text-sm flex items-center gap-2 text-black'
                        >
                          <span
                            className={`material-icons-outlined text-sm ${
                              sortingType === method.type ? '' : 'opacity-0'
                            }`}
                          >
                            check
                          </span>
                          <span className='text-sm'>{method.name}</span>
                        </button>
                      ))}
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

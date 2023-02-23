import { SpinnerComponent } from 'appComponents/ui/spinner';
import dynamic from 'next/dynamic';
import { _Store } from 'page.config';
import { Fragment } from 'react';
import { list_FnProps } from '..';

const CateBand = dynamic(() => import('appComponents/reUsable/CateBand'), {
  loading: () => <SpinnerComponent />,
});
const FilterBarLayout3 = dynamic(
  () => import('../Components/FilterBar/layout3'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const FilterChips = dynamic(() => import('../Components/Filters/filterChips'), {
  loading: () => <SpinnerComponent />,
});
const FilterLayout3 = dynamic(() => import('../Components/Filters/Layout3'), {
  loading: () => <SpinnerComponent />,
});
const ProductLayout2 = dynamic(
  () =>
    import(
      '../../../../Components/ProductList/components/PorudctComponent/Product.layout2'
    ),
  {
    loading: () => <SpinnerComponent />,
  },
);

const Layout3 = ({
  filters,
  products,
  checkedFilters,
  totalCount,
  showFilter,
  showSortMenu,
  productView,
  skuList,
  setShowSortMenu,
  setShowFilter,
  setProductView,
  colorChangeHandler,
  handleChange,
  loadMore,
  sortProductJson,
  clearFilters,
  compareCheckBoxHandler,
  storeLayout,
}: list_FnProps) => {
  return (
    <>
      {storeLayout !== _Store.type10 &&
        storeLayout !== _Store.type5 &&
        storeLayout !== _Store.type8 &&
        storeLayout !== _Store.type23 &&
        storeLayout !== _Store.type24 && <CateBand />}

      <section id='layout3' className=''>
        <div className='container mx-auto'>
          <div className='bg-white'>
            <div className='flex flex-wrap -mx-3'>
              <div className='w-full md:w-3/12 px-3 lg:w-2/12'>
                <div className='block md:block lg:hidden'>
                  <button className='btn btn-lg btn-secondary !py-2 !flex w-full items-center justify-between'>
                    <div className=''>Filter</div>
                    <div className='toggleicon'>-</div>
                  </button>
                </div>
                <FilterLayout3
                  filters={filters}
                  handleChange={handleChange}
                  checkedFilters={checkedFilters}
                />
              </div>
              <div
                className='w-full md:w-9/12 px-3 lg:w-10/12'
                x-data='{ selected : 1 }'
              >
                <FilterBarLayout3
                  {...{
                    totalCount,
                    showSortMenu,
                    sortProductJson,
                    sortOpenHandler: setShowSortMenu,
                    setProductView,
                    productView,
                    setShowFilter,
                  }}
                />
                <div className=''>
                  <FilterChips
                    {...{ clearFilters, checkedFilters, handleChange }}
                  />
                </div>
                <div aria-labelledby='products-heading' className='mt-8'>
                  <div className='mt-8 relative gridlistview' id='gridview'>
                    <div className='relative w-full pb-6 -mb-6'>
                      <ul
                        role='list'
                        className={
                          productView === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'
                            : 'm-0 p-0 list-none'
                        }
                      >
                        {products.map((product, index) => (
                          <Fragment key={index}>
                            <ProductLayout2
                              productView={productView}
                              skuList={skuList}
                              compareCheckBoxHandler={compareCheckBoxHandler}
                              product={product}
                              colorChangeHandler={colorChangeHandler}
                              storeLayout={storeLayout}
                            />
                          </Fragment>
                        ))}
                      </ul>
                    </div>
                    <div className='py-20 border-t border-t-gray-300 text-center'>
                      <div className='mb-8'>
                        You've seen {products.length} Products out of{' '}
                        {totalCount}
                      </div>
                      {totalCount > products.length && (
                        <button
                          type='submit'
                          onClick={loadMore}
                          className='btn btn-lg btn-secondary'
                        >
                          View More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout3;

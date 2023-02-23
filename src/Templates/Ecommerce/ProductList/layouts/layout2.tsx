import { GetlAllProductList } from '@type/productList.type';
import { SpinnerComponent } from 'appComponents/ui/spinner';
import { properties } from 'mock/properties.mock';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { list_FnProps } from '..';

const BarComponent = dynamic(() => import('appComponents/reUsable/Bar'), {
  loading: () => <SpinnerComponent />,
});
const ProductDetailsPageBanner = dynamic(
  () => import('Components/ProductDetails/Banner'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const FilterBarLayout2 = dynamic(
  () => import('../Components/FilterBar/layout2'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const FilterChips = dynamic(() => import('../Components/Filters/filterChips'), {
  loading: () => <SpinnerComponent />,
});
const FlyOutFilter = dynamic(
  () => import('../Components/Filters/flyoutFilter'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const FilterLayout2 = dynamic(() => import('../Components/Filters/Layout2'), {
  loading: () => <SpinnerComponent />,
});
const ListView = dynamic(
  () => import('../Components/PorudctComponent/ListView'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const ProductLayout2 = dynamic(
  () => import('../Components/PorudctComponent/Productlayout2'),
  {
    loading: () => <SpinnerComponent />,
  },
);

const Layout2 = ({
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
  slug,
  seType,
  brandId,
}: list_FnProps) => {
  return (
    <section id=''>
      <ProductDetailsPageBanner slug={slug} seType={seType} />
      <BarComponent />
      <div className='container mx-auto bg-white overflow-hidden'>
        <div className='  flex flex-wrap gap-y-6 -mx-4'>
          <div className='w-full md:w-3/12 lg:w-3/12 px-4'>
            {filters.length > 0 &&
              (properties.filter_box.layout === 'flyout' ? (
                showFilter && (
                  <FlyOutFilter
                    filters={filters}
                    handleChange={handleChange}
                    checkedFilters={checkedFilters}
                    closeFilter={setShowFilter}
                  />
                )
              ) : (
                <FilterLayout2
                  filters={filters}
                  handleChange={handleChange}
                  checkedFilters={checkedFilters}
                />
              ))}
            {/* <button className="md:!hidden btn btn-lg btn-secondary !py-2 !flex w-full items-center justify-between">
                            <div className="">Filter</div>
                            <div className="toggleicon">-</div>
                        </button>
                        <div className="bg-[#f5f5f5] filter-box">
                             <!-- Filters -->
                        </div> */}
          </div>

          <div
            className={`w-full md:w-9/12 ${
              properties.filter_box.layout === 'flyout' ? '' : ' lg:w-9/12'
            } px-4`}
          >
            <FilterBarLayout2
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
            <FilterChips {...{ clearFilters, checkedFilters, handleChange }} />
            <div aria-labelledby='products-heading' className='mt-8'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>
              <div className='mt-8 relative' id='gridview'>
                <div className='relative w-full pb-6 -mb-6'>
                  <ul
                    role='list'
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${properties.product_list_box.box_count} gap-8 mb-8`}
                  >
                    {products.map(
                      (product: GetlAllProductList, index: number) => (
                        <Fragment key={index}>
                          {productView === 'grid' ? (
                            <ProductLayout2
                              brandId={brandId}
                              skuList={skuList}
                              compareCheckBoxHandler={compareCheckBoxHandler}
                              product={product}
                              colorChangeHandler={colorChangeHandler}
                            />
                          ) : (
                            <ListView
                              product={product}
                              colorChangeHandler={colorChangeHandler}
                            />
                          )}
                        </Fragment>
                      ),
                    )}
                  </ul>
                </div>
                <div className='py-24 border-t border-t-gray-300'>
                  <p className='text-center'>
                    You've viewed {products.length} Products out of {totalCount}
                  </p>
                  {products.length !== totalCount && (
                    <button
                      type='submit'
                      className='mt-8 w-auto mx-auto bg-[#415363] border border-[#415363] py-3 px-24 flex items-center text-center justify-center text-base font-medium text-white hover:bg-[#051c2c] hover:border-[#051c2c] uppercase hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 tracking-wider'
                      onClick={() => loadMore()}
                    >
                      Load More
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout2;

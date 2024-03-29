import { GetlAllProductList } from '@type/productList.type';
import { SpinnerComponent } from 'appComponents/ui/spinner';
import { properties } from 'mock/properties.mock';
import dynamic from 'next/dynamic';
import { _Store } from 'page.config';
import { Fragment } from 'react';
import { ContactUs } from 'Templates/Ecommerce/Layout/Components';
import { list_FnProps } from '..';

const ProductComponent = dynamic(
  () => import('Components/ProductList/components/PorudctComponent/Product'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const ProductDetailsPageBanner = dynamic(
  () => import('Components/ProductDetails/Banner'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const Layout1FilterBar = dynamic(
  () => import('../Components/FilterBar/layout1'),
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
const SideFilter = dynamic(
  () =>
    import('../../../../Components/ProductList/components/Filters/sideFilter'),
  {
    loading: () => <SpinnerComponent />,
  },
);
const ListView = dynamic(
  () =>
    import(
      '../../../../Components/ProductList/components/PorudctComponent/ListView'
    ),
  {
    loading: () => <SpinnerComponent />,
  },
);

const FilterBarLayout3 = dynamic(
  () =>
    import('../../../../Components/ProductList/components/FilterBar/layout3'),
  {
    loading: () => <SpinnerComponent />,
  },
);

const Layout1 = ({
  slug,
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
  seType,
  brandId,
  sortingType,
}: list_FnProps) => {
  return (
    <>
      <ProductDetailsPageBanner slug={slug} seType={seType} />
      <section id=''>
        <div className='bg-white'>
          <div className='container mx-auto '>
            <div
              aria-labelledby='products-heading'
              className='mt-8 overflow-hidden'
            >
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='flex flex-wrap -mx-4'>
                <div
                  className={
                    properties.filter_box.layout !== 'flyout'
                      ? 'w-full lg:w-3/12 px-4'
                      : ''
                  }
                >
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
                      <SideFilter
                        filters={filters}
                        handleChange={handleChange}
                        checkedFilters={checkedFilters}
                        storeLayout={storeLayout}
                      />
                    ))}
                </div>
                <div
                  className={`w-full${
                    properties.filter_box.layout === 'flyout'
                      ? ''
                      : ' lg:w-9/12'
                  } px-4`}
                >
                  {storeLayout === _Store.type21 ||
                  storeLayout === _Store.type27 ? (
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
                  ) : (
                    <Layout1FilterBar
                      {...{
                        totalCount,
                        showSortMenu,
                        sortProductJson,
                        sortOpenHandler: setShowSortMenu,
                        setProductView,
                        productView,
                        setShowFilter,
                        sortingType: sortingType || 0,
                      }}
                    />
                  )}

                  <FilterChips
                    {...{ clearFilters, checkedFilters, handleChange }}
                  />
                  <div className='mt-8 relative' id='gridview'>
                    <div className='relative w-full pb-6 -mb-6'>
                      <ul
                        role='list'
                        className={`grid grid-cols-1 gap-6 lg:gap-8 mb-8${
                          productView === 'grid'
                            ? ' lg:grid-cols-' +
                              properties.product_list_box.box_count
                            : ''
                        }`}
                      >
                        {products.map(
                          (product: GetlAllProductList, index: number) => (
                            <Fragment key={index}>
                              {productView === 'grid' ? (
                                <ProductComponent
                                  brandId={brandId}
                                  skuList={skuList}
                                  compareCheckBoxHandler={
                                    compareCheckBoxHandler
                                  }
                                  product={product}
                                  colorChangeHandler={colorChangeHandler}
                                  storeLayout={storeLayout}
                                />
                              ) : (
                                <ListView
                                  product={product}
                                  colorChangeHandler={colorChangeHandler}
                                  storeLayout={storeLayout}
                                />
                              )}
                            </Fragment>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className='py-4 text-center'>
                      <div className=''>
                        <div className='text-sm tracking-[1.4px]'>
                          You've viewed {products.length} of {totalCount}{' '}
                          products
                        </div>
                        <div className='h-[2px] w-full max-w-[250px] mx-auto bg-[#808080] mt-2'>
                          <div
                            className='bg-secondary h-full'
                            style={{
                              width: `${(products.length * 100) / totalCount}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      {products.length < totalCount && (
                        <button
                          onClick={loadMore}
                          type='submit'
                          className='mt-4 btn btn-lg btn-secondary !py-5 !text-[22px] !tracking-[1.4px] !font-normal w-full max-w-[550px] mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                          <span className='inline-block w-5 h-5'>
                            <img
                              className='max-h-full'
                              src='/images/load-more-arrow.gif'
                              alt='gif-img'
                            />
                          </span>
                          <span className=''>LOAD MORE</span>
                          <span className='inline-block w-5 h-5'>
                            <img
                              className='max-h-full'
                              src='/images/load-more-arrow.gif'
                              alt='gif-img'
                            />
                          </span>
                        </button>
                      )}
                    </div>

                    {/* <div className='py-24 border-t border-t-gray-300'>
                      <div className='text-center'>
                        <div>
                          You've seen {products.length} Products out of{' '}
                          {totalCount}
                        </div>
                        <div className='h-1 w-full max-w-[250px] bg-gray-300 mx-auto mt-3 text-left'>
                          <div
                            className='h-1 inline-block bg-secondary'
                            style={{
                              width: `${(products.length * 100) / totalCount}%`,
                            }}
                          >
                            &nbsp;
                          </div>
                        </div>
                      </div>
                      {products.length < totalCount && (
                        <button
                          onClick={loadMore}
                          type='submit'
                          className='uppercase text-3xl btn-secondary mt-8 w-auto mx-auto bg-white border border-gray-800 py-3 px-24 flex items-center text-center justify-center text-base font-medium text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                          Load More
                        </button>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Layout1;

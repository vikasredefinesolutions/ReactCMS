import { GetlAllProductList } from '@type/productList.type';
import ProductDetailsPageBanner from 'Components/ProductDetails/Banner';
import ProductComponent from 'Components/ProductList/components/PorudctComponent/Product';
import { properties } from 'mock/properties.mock';
import { _Store } from 'page.config';
import { Fragment } from 'react';
import { list_FnProps } from '..';
import Layout1FilterBar from '../components/FilterBar/layout1';
import FilterBarLayout3 from '../components/FilterBar/layout3';
import FilterChips from '../components/Filters/filterChips';
import FlyOutFilter from '../components/Filters/flyoutFilter';
import SideFilter from '../components/Filters/sideFilter';
import ListView from '../components/PorudctComponent/ListView';

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
          <div className='container mx-auto px-2 lg:px-0'>
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

export default Layout1;

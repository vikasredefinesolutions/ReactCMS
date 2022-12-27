import { GetlAllProductList } from '@type/productList.type';
import ProductComponent from 'Components/ProductList/components/PorudctComponent/Product';
import { properties } from 'mock/properties.mock';
import { Fragment } from 'react';
import { list_FnProps } from '..';
import Layout1FilterBar from '../components/FilterBar/layout1';
import FilterChips from '../components/Filters/filterChips';
import FlyOutFilter from '../components/Filters/flyoutFilter';
import SideFilter from '../components/Filters/sideFilter';
import ListView from '../components/PorudctComponent/ListView';

const Layout1 = ({
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
}: list_FnProps) => {
  // console.log(products);
  return (
    <>
      {/* <ProductDetailsPageBanner /> */}
      <section id="">
        <div className="bg-white">
          <div className="container mx-auto px-2 lg:px-0">
            <div
              aria-labelledby="products-heading"
              className="mt-8 overflow-hidden"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="flex flex-wrap -mx-4">
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
                      />
                    ))}
                </div>
                <div
                  className={`w-full${properties.filter_box.layout === 'flyout'
                    ? ''
                    : ' lg:w-9/12'
                    } px-4`}
                >
                  <Layout1FilterBar
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
                  <FilterChips
                    {...{ clearFilters, checkedFilters, handleChange }}
                  />
                  <div className="mt-8 relative" id="gridview">
                    <div className="relative w-full pb-6 -mb-6">
                      <ul
                        role="list"
                        className={`grid grid-cols-1 gap-6 lg:gap-8 mb-8${productView === 'grid'
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
                                  skuList={skuList}
                                  compareCheckBoxHandler={
                                    compareCheckBoxHandler
                                  }
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
                    <div className="py-24 border-t border-t-gray-300">
                      <p className="text-center">
                        You've seen {products.length} Products out of{' '}
                        {totalCount}
                      </p>
                      {products.length < totalCount && (
                        <button
                          onClick={loadMore}
                          type="submit"
                          className="mt-8 w-auto mx-auto bg-white border border-gray-800 py-3 px-24 flex items-center text-center justify-center text-base font-medium text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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

export default Layout1;

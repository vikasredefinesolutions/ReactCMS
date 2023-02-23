import { list_FnProps } from '..';
import FilterBarLayout3 from '../components/FilterBar/layout3';
import ProductLayout2 from '../components/PorudctComponent/Product.layout2';

const Layout5 = ({
  products,
  totalCount,
  showSortMenu,
  productView,
  skuList,
  setShowSortMenu,
  setShowFilter,
  setProductView,
  colorChangeHandler,
  loadMore,
  sortProductJson,
  compareCheckBoxHandler,
  storeLayout,
}: list_FnProps) => {
  return (
    <>
      <section id='layout5' className=''>
        <div className='container mx-auto'>
          <div className='bg-white'>
            <div className='flex flex-wrap -mx-3'>
              <div className='w-full px-3'>
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
                <div aria-labelledby='products-heading' className='mt-8'>
                  <div className='mt-8 relative gridlistview' id='gridview'>
                    <div className='relative w-full pb-6 -mb-6'>
                      <ul
                        role='list'
                        className={
                          productView === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                            : 'm-0 p-0 list-none'
                        }
                      >
                        {products.map((product, index) => (
                          <ProductLayout2
                            key={index}
                            productView={productView}
                            skuList={skuList}
                            compareCheckBoxHandler={compareCheckBoxHandler}
                            product={product}
                            colorChangeHandler={colorChangeHandler}
                            storeLayout={storeLayout}
                          />
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

export default Layout5;
